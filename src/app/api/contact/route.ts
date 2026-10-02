import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactRequest = {
  name?: string;
  email?: string;
  company?: string;
  project?: string;
  message?: string;
  website?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(
  request: Request
) {
  try {
    const apiKey =
      process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error(
        "RESEND_API_KEY is missing"
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const resend =
      new Resend(apiKey);

    const body =
      (await request.json()) as ContactRequest;

    const name =
      body.name?.trim() ?? "";

    const email =
      body.email?.trim() ?? "";

    const company =
      body.company?.trim() ?? "";

    const project =
      body.project?.trim() ?? "";

    const message =
      body.message?.trim() ?? "";

    const website =
      body.website?.trim() ?? "";

    // Honeypot spam field
    if (website) {
      return NextResponse.json({
        success: true,
        message:
          "Message sent successfully.",
      });
    }

    if (
      !name ||
      !email ||
      !project ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    if (name.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Name is too long.",
        },
        {
          status: 400,
        }
      );
    }

    if (email.length > 200) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Email address is too long.",
        },
        {
          status: 400,
        }
      );
    }

    if (company.length > 150) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Company name is too long.",
        },
        {
          status: 400,
        }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please provide a little more detail.",
        },
        {
          status: 400,
        }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Message is too long.",
        },
        {
          status: 400,
        }
      );
    }

    const safeName =
      escapeHtml(name);

    const safeEmail =
      escapeHtml(email);

    const safeCompany =
      escapeHtml(
        company || "Not provided"
      );

    const safeProject =
      escapeHtml(project);

    const safeMessage =
      escapeHtml(message).replace(
        /\n/g,
        "<br />"
      );

    const { data, error } =
      await resend.emails.send({
        from:
          "Portfolio <onboarding@resend.dev>",

        // keep the Resend-approved test address for now
        to: [
          "priyanshu210620@gmail.com",
        ],

        replyTo: email,

        subject:
          `Portfolio Inquiry — ${name}`,

        html: `
          <div
            style="
              margin:0;
              padding:32px;
              background:#080808;
              color:#f4f4f5;
              font-family:Arial,Helvetica,sans-serif;
            "
          >
            <div
              style="
                max-width:640px;
                margin:0 auto;
                padding:28px;
                background:#111113;
                border:1px solid #27272a;
                border-radius:20px;
              "
            >
              <p
                style="
                  margin:0 0 10px;
                  color:#a78bfa;
                  font-size:12px;
                  letter-spacing:2px;
                  text-transform:uppercase;
                "
              >
                Portfolio Contact
              </p>

              <h1
                style="
                  margin:0 0 24px;
                  color:#ffffff;
                  font-size:28px;
                "
              >
                New inquiry from ${safeName}
              </h1>

              <p style="color:#a1a1aa;">
                <strong style="color:#ffffff;">
                  Email:
                </strong>
                ${safeEmail}
              </p>

              <p style="color:#a1a1aa;">
                <strong style="color:#ffffff;">
                  Company:
                </strong>
                ${safeCompany}
              </p>

              <p style="color:#a1a1aa;">
                <strong style="color:#ffffff;">
                  Opportunity:
                </strong>
                ${safeProject}
              </p>

              <div
                style="
                  border-top:1px solid #27272a;
                  margin-top:24px;
                  padding-top:24px;
                "
              >
                <p
                  style="
                    color:#71717a;
                    font-size:12px;
                    letter-spacing:1.5px;
                    text-transform:uppercase;
                  "
                >
                  Message
                </p>

                <p
                  style="
                    color:#d4d4d8;
                    line-height:1.7;
                  "
                >
                  ${safeMessage}
                </p>
              </div>
            </div>
          </div>
        `,
      });

    if (error) {
      console.error(
        "Resend error:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          message:
            error.message ||
            "Unable to send the message right now.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Message sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error(
      "Contact API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}
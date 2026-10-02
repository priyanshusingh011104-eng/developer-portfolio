import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

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
    

    if (!process.env.RESEND_API_KEY) {
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

    /*
      Honeypot spam check.
      Real users will not fill this hidden field.
    */
    if (website) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully.",
      });
    }

    /*
      Required field validation
    */
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

    /*
      Basic email validation
    */
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

    /*
      Length validation
    */
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

    /*
      Escape user content before inserting it
      into the HTML email.
    */
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

    /*
      IMPORTANT:
      For testing we are sending to:
      delivered@resend.dev

      After this works, we will replace
      it with your Gmail address.
    */
    const { data, error } =
      await resend.emails.send({
        from:
          "Portfolio <onboarding@resend.dev>",

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

              <div
                style="
                  margin-bottom:24px;
                "
              >
                <p
                  style="
                    margin:8px 0;
                    color:#a1a1aa;
                  "
                >
                  <strong
                    style="
                      color:#ffffff;
                    "
                  >
                    Name:
                  </strong>

                  ${safeName}
                </p>

                <p
                  style="
                    margin:8px 0;
                    color:#a1a1aa;
                  "
                >
                  <strong
                    style="
                      color:#ffffff;
                    "
                  >
                    Email:
                  </strong>

                  ${safeEmail}
                </p>

                <p
                  style="
                    margin:8px 0;
                    color:#a1a1aa;
                  "
                >
                  <strong
                    style="
                      color:#ffffff;
                    "
                  >
                    Company:
                  </strong>

                  ${safeCompany}
                </p>

                <p
                  style="
                    margin:8px 0;
                    color:#a1a1aa;
                  "
                >
                  <strong
                    style="
                      color:#ffffff;
                    "
                  >
                    Opportunity:
                  </strong>

                  ${safeProject}
                </p>
              </div>

              <div
                style="
                  border-top:1px solid #27272a;
                  padding-top:22px;
                "
              >
                <p
                  style="
                    margin:0 0 12px;
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
                    margin:0;
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
      "CONTACT API ERROR:",
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
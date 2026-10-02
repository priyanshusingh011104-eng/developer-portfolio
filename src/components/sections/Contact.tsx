"use client";

import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
} from "react";

import { motion } from "framer-motion";

import {
  CheckCircle2,
  Loader2,
  Mail,
  Phone,
  Send,
  XCircle,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import MagneticButton from "../ui/MagneticButton";

type FormStatus =
  | "idle"
  | "sending"
  | "success"
  | "error";

type ContactForm = {
  name: string;
  email: string;
  company: string;
  project: string;
  message: string;
  website: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  company: "",
  project: "",
  message: "",
  website: "",
};

export default function Contact() {
  const [form, setForm] =
    useState<ContactForm>(initialForm);

  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [feedback, setFeedback] =
    useState("");

  /*
    Remove query parameters created by
    the old native form submission.

    Example:
    ?name=Priyanshu&email=...
  */
  useEffect(() => {
    const params =
      new URLSearchParams(
        window.location.search
      );

    const oldFormParams = [
      "name",
      "email",
      "company",
      "project",
      "message",
    ];

    const containsOldFormData =
      oldFormParams.some((key) =>
        params.has(key)
      );

    if (containsOldFormData) {
      const cleanUrl =
        window.location.pathname +
        window.location.hash;

      window.history.replaceState(
        {},
        "",
        cleanUrl
      );
    }
  }, []);

  const handleChange = (
    event: ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
    >
  ) => {
    const { name, value } =
      event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (
      status === "success" ||
      status === "error"
    ) {
      setStatus("idle");
      setFeedback("");
    }
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    /*
      IMPORTANT:
      Prevent normal browser form submission.

      Without this, the browser would generate:
      ?name=...&email=...&message=...
    */
    event.preventDefault();

    if (status === "sending") {
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(form),
        }
      );

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
            "Unable to send message."
        );
      }

      setStatus("success");

      setFeedback(
        "Message sent successfully. I'll get back to you soon."
      );

      setForm(initialForm);

      /*
        Make sure the URL stays clean
        after successful submission.
      */
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}#contact`
      );
    } catch (error) {
      console.error(
        "Contact form error:",
        error
      );

      setStatus("error");

      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section
      id="contact"
      className="section-spacing relative border-t border-white/[0.05]"
    >
      <div className="container-custom">
        <div className="grid min-w-0 gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20 xl:gap-24">
          {/* =========================================
              LEFT SIDE
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="min-w-0"
          >
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-violet-400 sm:text-xs sm:tracking-[0.3em]">
              07 — Contact
            </p>

            <h2 className="text-[clamp(2.8rem,11vw,4.8rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-white">
              Let&apos;s
              <br />

              <span className="gradient-text">
                connect.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8 md:text-lg">
              Have a software opportunity,
              freelance project or collaboration
              in mind? Send me a message and
              let&apos;s discuss it.
            </p>

            {/* CONTACT DETAILS */}

            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
              <a
                href="mailto:priyanshusingh011104@gmail.com"
                className="group flex min-w-0 items-center gap-3 text-zinc-400 transition-colors duration-300 hover:text-white sm:gap-4"
              >
                <div className="glass flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-11 sm:w-11">
                  <Mail size={17} />
                </div>

                <span className="min-w-0 break-all text-xs sm:text-sm">
                  priyanshusingh011104@gmail.com
                </span>
              </a>

              <a
                href="tel:+919695011033"
                className="group flex items-center gap-3 text-zinc-400 transition-colors duration-300 hover:text-white sm:gap-4"
              >
                <div className="glass flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-11 sm:w-11">
                  <Phone size={17} />
                </div>

                <span className="text-xs sm:text-sm">
                  +91 9695011033
                </span>
              </a>

              {/* SOCIALS */}

              <div className="flex items-center gap-3 pt-2 sm:gap-4 sm:pt-3">
                <a
                  href="https://github.com/priyanshu210620"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="glass flex h-10 w-10 items-center justify-center rounded-xl text-zinc-500 transition-all duration-300 hover:-translate-y-1 hover:text-white sm:h-11 sm:w-11"
                >
                  <FaGithub size={17} />
                </a>

                <a
                  href="https://www.linkedin.com/in/priyanshu-singh-1b58a1384/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="glass flex h-10 w-10 items-center justify-center rounded-xl text-zinc-500 transition-all duration-300 hover:-translate-y-1 hover:text-white sm:h-11 sm:w-11"
                >
                  <FaLinkedinIn size={17} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* =========================================
              CONTACT FORM
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
            }}
            className="glass relative min-w-0 rounded-[1.5rem] p-5 sm:p-6 md:rounded-[2rem] md:p-9"
          >
            <div className="mb-7 sm:mb-8">
              <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600 sm:text-xs">
                Send an inquiry
              </p>

              <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                Tell me about your project.
              </h3>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 sm:space-y-6"
            >
              {/* =====================================
                  SPAM HONEYPOT
              ===================================== */}

              <div
                aria-hidden="true"
                className="absolute -left-[9999px] h-px w-px overflow-hidden"
              >
                <label htmlFor="website">
                  Website
                </label>

                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={handleChange}
                />
              </div>

              {/* =====================================
                  NAME + EMAIL
              ===================================== */}

              <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[9px] uppercase tracking-[0.18em] text-zinc-600 sm:text-xs"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full border-b border-white/[0.08] bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-violet-400/60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[9px] uppercase tracking-[0.18em] text-zinc-600 sm:text-xs"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={200}
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full border-b border-white/[0.08] bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-violet-400/60"
                  />
                </div>
              </div>

              {/* =====================================
                  COMPANY
              ===================================== */}

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-[9px] uppercase tracking-[0.18em] text-zinc-600 sm:text-xs"
                >
                  Company / Organization
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  maxLength={150}
                  autoComplete="organization"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Optional"
                  className="w-full border-b border-white/[0.08] bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-violet-400/60"
                />
              </div>

              {/* =====================================
                  PROJECT TYPE
              ===================================== */}

              <div>
                <label
                  htmlFor="project"
                  className="mb-2 block text-[9px] uppercase tracking-[0.18em] text-zinc-600 sm:text-xs"
                >
                  Project / Opportunity Type
                </label>

                <select
                  id="project"
                  name="project"
                  required
                  value={form.project}
                  onChange={handleChange}
                  className="w-full border-b border-white/[0.08] bg-transparent py-3 text-sm text-zinc-400 outline-none transition-colors focus:border-violet-400/60"
                >
                  <option
                    value=""
                    disabled
                    className="bg-[#0d0d0f]"
                  >
                    Select type
                  </option>

                  <option
                    value="Software Engineering Opportunity"
                    className="bg-[#0d0d0f]"
                  >
                    Software Engineering Opportunity
                  </option>

                  <option
                    value="Backend Development"
                    className="bg-[#0d0d0f]"
                  >
                    Backend Development
                  </option>

                  <option
                    value="Full-Stack Application"
                    className="bg-[#0d0d0f]"
                  >
                    Full-Stack Application
                  </option>

                  <option
                    value="E-Commerce Platform"
                    className="bg-[#0d0d0f]"
                  >
                    E-Commerce Platform
                  </option>

                  <option
                    value="API Development"
                    className="bg-[#0d0d0f]"
                  >
                    API Development
                  </option>

                  <option
                    value="Other"
                    className="bg-[#0d0d0f]"
                  >
                    Other
                  </option>
                </select>
              </div>

              {/* =====================================
                  MESSAGE
              ===================================== */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[9px] uppercase tracking-[0.18em] text-zinc-600 sm:text-xs"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  maxLength={5000}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or project..."
                  className="w-full resize-none border-b border-white/[0.08] bg-transparent py-3 text-sm leading-7 text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-violet-400/60"
                />
              </div>

              {/* =====================================
                  FEEDBACK
              ===================================== */}

              {feedback && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className={`flex items-start gap-3 rounded-xl border px-4 py-3 ${
                    status === "success"
                      ? "border-emerald-400/20 bg-emerald-400/[0.05] text-emerald-300"
                      : "border-red-400/20 bg-red-400/[0.05] text-red-300"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0"
                    />
                  ) : (
                    <XCircle
                      size={17}
                      className="mt-0.5 shrink-0"
                    />
                  )}

                  <p className="text-xs leading-6 sm:text-sm">
                    {feedback}
                  </p>
                </motion.div>
              )}

              {/* =====================================
                  SUBMIT BUTTON
              ===================================== */}

              <MagneticButton
                type="submit"
                className={`group inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300 sm:w-auto ${
                  status === "sending"
                    ? "pointer-events-none bg-zinc-300 text-zinc-700"
                    : "bg-white text-black hover:bg-violet-200"
                }`}
              >
                {status === "sending" ? (
                  <>
                    <Loader2
                      size={17}
                      className="animate-spin"
                    />

                    Sending...
                  </>
                ) : (
                  <>
                    Send Message

                    <Send
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
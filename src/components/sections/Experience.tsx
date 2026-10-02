"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin } from "lucide-react";

const experiences = [
  {
    period: "Oct 2025 — Apr 2026",
    role: "Full Stack Developer Intern",
    company: "Alter 8 Concierge",
    location: "Remote",
    description:
      "Worked on full-stack application development with a focus on scalable features, REST API integration, responsive interfaces, debugging and performance improvements.",
    highlights: [
      "Developed and maintained scalable full-stack features",
      "Designed and integrated RESTful APIs",
      "Implemented responsive and user-friendly interfaces",
      "Debugged technical issues and improved application performance",
      "Participated in code reviews and clean-code practices",
      "Collaborated in an Agile development environment",
    ],
  },
  {
    period: "Current",
    role: "Independent Developer",
    company: "Personal & Client Projects",
    location: "India",
    description:
      "Building software products across e-commerce, hotel booking, backend systems and workflow automation while focusing on scalable architecture and practical business requirements.",
    highlights: [
      "E-Commerce development",
      "Backend engineering",
      "Full-stack application development",
      "REST API integration",
      "Database design",
      "Deployment and cloud workflows",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-spacing relative border-t border-white/[0.05]"
    >
      <div className="container-custom">
        <div className="mb-14 sm:mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-violet-400 sm:text-xs sm:tracking-[0.3em]"
          >
            04 — Experience
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[clamp(2.8rem,11vw,4.8rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-white"
          >
            Learning by
            <br />

            <span className="gradient-text">
              building.
            </span>
          </motion.h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8 md:text-lg">
            Practical experience across full-stack
            development, backend systems, API integration
            and real-world software projects.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] top-0 hidden h-full w-px bg-white/[0.08] md:block" />

          <div className="space-y-10 sm:space-y-12 md:space-y-20">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.role}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="relative grid min-w-0 gap-5 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10 md:pl-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12"
              >
                <div className="absolute left-0 top-2 hidden h-[15px] w-[15px] rounded-full border border-violet-400/40 bg-[#080808] md:block">
                  <div className="absolute left-1/2 top-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400" />
                </div>

                <div>
                  <p className="text-xs text-zinc-600 sm:text-sm">
                    {experience.period}
                  </p>
                </div>

                <div className="glass min-w-0 rounded-[1.5rem] p-5 sm:p-6 md:rounded-[1.75rem] md:p-9">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-violet-400 sm:text-xs">
                        {experience.company}
                      </p>

                      <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl md:text-3xl">
                        {experience.role}
                      </h3>
                    </div>

                    <div className="flex shrink-0 items-center gap-2 text-xs text-zinc-600">
                      <MapPin size={14} />
                      {experience.location}
                    </div>
                  </div>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
                    {experience.description}
                  </p>

                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {experience.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2
                          size={15}
                          className="mt-1 shrink-0 text-violet-400"
                        />

                        <p className="text-xs leading-6 text-zinc-500 sm:text-sm">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
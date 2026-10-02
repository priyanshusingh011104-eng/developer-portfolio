"use client";

import { motion } from "framer-motion";

import {
  Braces,
  Code2,
  Cloud,
  Database,
  Server,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "C++", "C", "Python", "SQL"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "REST APIs",
      "System Design",
    ],
  },
  {
    title: "Frontend",
    icon: Braces,
    skills: ["React.js", "Next.js", "MERN Stack"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "DBMS"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Docker", "AWS", "Kafka"],
  },
  {
    title: "Tools & Core",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Solana",
      "DSA",
      "OOP",
      "Computer Networks",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            02 — Skills & Technologies
          </motion.p>

          <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end lg:gap-8">
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
              Tools I use
              <br />

              <span className="gradient-text">
                to build.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.08,
              }}
              className="min-w-0 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8 md:text-lg"
            >
              My stack covers backend engineering, modern
              frontend development, database systems, cloud
              tools and software engineering fundamentals.
            </motion.p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -5 }}
                className="glass group relative min-w-0 overflow-hidden rounded-[1.5rem] p-5 sm:p-6 md:p-7"
              >
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-violet-500/0 blur-[60px] transition-all duration-500 group-hover:bg-violet-500/10" />

                <div className="relative z-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-violet-300 sm:h-11 sm:w-11">
                    <Icon size={19} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold tracking-[-0.03em] text-white sm:text-xl">
                    {group.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[11px] text-zinc-500 transition-all duration-300 hover:border-violet-400/30 hover:text-white sm:text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="glass mt-4 rounded-[1.5rem] p-5 sm:p-6 md:mt-6 md:p-9"
        >
          <div className="grid min-w-0 gap-7 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-violet-400 sm:text-xs sm:tracking-[0.25em]">
                Engineering Focus
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
                Backend-first.
                <br />
                Product-minded.
              </h3>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
              {[
                "REST API Development",
                "Database Design",
                "Authentication & Authorization",
                "Scalable Application Architecture",
                "Full-Stack Integration",
                "Deployment & Cloud Workflows",
              ].map((item) => (
                <div
                  key={item}
                  className="flex min-w-0 items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.015] px-4 py-3"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                  <span className="min-w-0 text-xs leading-5 text-zinc-500 sm:text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
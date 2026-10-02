"use client";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
} from "lucide-react";

import MagneticButton from "../ui/MagneticButton";

export default function About() {
  return (
    <section
      id="about"
      className="section-spacing relative overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid min-w-0 gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20 xl:gap-24">
          {/* LEFT */}
          <div className="min-w-0">
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
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
                duration: 0.6,
              }}
              className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-violet-400 sm:text-xs sm:tracking-[0.3em]"
            >
              01 — About Me
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
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
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[clamp(2.8rem,11vw,4.8rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-white"
            >
              More than
              <br />

              <span className="gradient-text">
                just code.
              </span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
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
                duration: 0.6,
                delay: 0.12,
              }}
              className="mt-6 max-w-sm text-sm leading-7 text-zinc-500 sm:mt-8"
            >
              I enjoy building software that combines
              thoughtful architecture, reliable backend
              systems and clean user experiences.
            </motion.p>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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
              delay: 0.08,
            }}
            className="min-w-0 lg:pt-10"
          >
            <p className="max-w-[760px] text-lg leading-8 text-zinc-300 sm:text-xl sm:leading-9 md:text-2xl md:leading-10">
              I&apos;m Priyanshu Singh, a Computer Science
              and Engineering student specializing in
              Artificial Intelligence, focused on backend
              development, full-stack applications and
              scalable software systems.
            </p>

            <p className="mt-6 max-w-[720px] text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8 md:text-lg">
              My work combines Java and Spring Boot for
              backend development with modern web
              technologies such as React.js, Next.js,
              Node.js and Express.js. I also work with
              relational and NoSQL databases, REST APIs,
              cloud tools and containerized deployments.
            </p>

            <p className="mt-5 max-w-[720px] text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8 md:text-lg">
              I&apos;m especially interested in building
              products that solve real business problems —
              whether that&apos;s an e-commerce platform,
              booking system, automation product or backend
              service.
            </p>

            {/* INFO CARDS */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <motion.div
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-violet-300">
                  <GraduationCap size={18} />
                </div>

                <p className="mt-5 text-sm font-medium text-white">
                  B.Tech CSE (AI)
                </p>

                <p className="mt-2 text-xs leading-6 text-zinc-600">
                  Galgotias College of Engineering and
                  Technology
                </p>

                <p className="mt-1 text-xs text-zinc-700">
                  Graduation: June 2026
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-violet-300">
                  <Code2 size={18} />
                </div>

                <p className="mt-5 text-sm font-medium text-white">
                  Engineering Focus
                </p>

                <p className="mt-2 text-xs leading-6 text-zinc-600">
                  Backend systems, REST APIs, full-stack
                  products and databases.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 sm:col-span-2 lg:col-span-1"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-violet-300">
                  <BriefcaseBusiness size={18} />
                </div>

                <p className="mt-5 text-sm font-medium text-white">
                  Open To
                </p>

                <p className="mt-2 text-xs leading-6 text-zinc-600">
                  Software engineering roles, freelance
                  projects and collaborations.
                </p>
              </motion.div>
            </div>

            {/* STATS */}
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="glass rounded-2xl p-4 sm:p-5">
                <p className="text-2xl font-semibold text-white sm:text-3xl">
                  03
                </p>

                <p className="mt-2 text-xs text-zinc-500 sm:text-sm">
                  Featured Projects
                </p>
              </div>

              <div className="glass rounded-2xl p-4 sm:p-5">
                <p className="text-2xl font-semibold text-white sm:text-3xl">
                  Full
                </p>

                <p className="mt-2 text-xs text-zinc-500 sm:text-sm">
                  Stack Capability
                </p>
              </div>

              <div className="glass col-span-2 rounded-2xl p-4 sm:col-span-1 sm:p-5">
                <p className="text-2xl font-semibold text-white sm:text-3xl">
                  API
                </p>

                <p className="mt-2 text-xs text-zinc-500 sm:text-sm">
                  Focused Engineering
                </p>
              </div>
            </div>

            <div className="mt-8">
              <MagneticButton
                href="/resume/Priyanshu-Singh-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:border-violet-400/30 hover:bg-white/[0.06]"
              >
                View Resume

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
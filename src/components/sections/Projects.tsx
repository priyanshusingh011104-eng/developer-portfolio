"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { projects } from "../../data/projects";
import TiltCard from "../ui/TiltCard";

export default function Projects() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const secondaryProjects = projects.filter(
    (project) => !project.featured
  );

  if (!featuredProject) {
    return null;
  }

  return (
    <section
      id="projects"
      className="section-spacing relative overflow-hidden"
    >
      <div className="container-custom">
        {/* HEADING */}
        <div className="mb-14 sm:mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-violet-400 sm:text-xs sm:tracking-[0.3em]"
          >
            03 — Selected Work
          </motion.p>

          <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end">
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
              Projects that
              <br />

              <span className="gradient-text">
                define my work.
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
              className="max-w-xl text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8 md:text-lg"
            >
              Three projects demonstrating my work across
              e-commerce, full-stack product development and
              event-driven backend architecture.
            </motion.p>
          </div>
        </div>

        {/* FEATURED */}
        <motion.article
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex items-center justify-between border-b border-white/[0.07] pb-4 sm:mb-8 sm:pb-5">
            <span className="text-xs text-zinc-600 sm:text-sm">
              {featuredProject.number}
            </span>

            <span className="text-[9px] uppercase tracking-[0.22em] text-zinc-600 sm:text-xs">
              Featured Project
            </span>
          </div>

          <div className="grid min-w-0 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
            <div className="min-w-0">
              <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-violet-400 sm:text-sm">
                {featuredProject.type}
              </p>

              <h3 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {featuredProject.title}
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-500 sm:mt-7 sm:text-base sm:leading-8 md:text-lg">
                {featuredProject.shortDescription}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 sm:mt-7">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-[10px] text-zinc-400 sm:px-4 sm:py-2 sm:text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7 sm:mt-9">
                <Link
                  href={`/projects/${featuredProject.slug}`}
                  data-cursor="VIEW"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-white"
                >
                  View Case Study

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>

            <div className="min-w-0">
              <Link
                href={`/projects/${featuredProject.slug}`}
                data-cursor="VIEW"
                className="relative block"
              >
                <div className="pointer-events-none absolute inset-0 scale-90 rounded-[2.5rem] bg-violet-600/20 blur-[80px] sm:rounded-[3rem] sm:blur-[100px]" />

                <TiltCard>
                  <div className="glass relative aspect-[16/10] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
                    <Image
                      src={featuredProject.image}
                      alt={`${featuredProject.title} project screenshot`}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-blue-500/[0.06]" />

                    <div className="absolute left-4 top-4 rounded-full border border-white/[0.08] bg-black/40 px-3 py-1.5 text-[9px] text-zinc-300 backdrop-blur-xl sm:left-6 sm:top-6 sm:px-4 sm:py-2 sm:text-xs">
                      Featured
                    </div>

                    <div className="absolute bottom-4 left-4 z-20 sm:bottom-6 sm:left-6">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-400 sm:text-xs">
                        View Case Study
                      </p>

                      <p className="mt-1 text-base font-medium text-white sm:text-xl">
                        {featuredProject.title}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </div>
          </div>
        </motion.article>

        <div className="my-16 h-px bg-white/[0.06] sm:my-20 md:my-28" />

        {/* SECONDARY */}
        <div className="grid min-w-0 gap-14 lg:grid-cols-2 lg:gap-10">
          {secondaryProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="min-w-0"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs text-zinc-600 sm:text-sm">
                  {project.number}
                </span>

                <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-600 sm:text-xs">
                  Project
                </span>
              </div>

              <Link
                href={`/projects/${project.slug}`}
                data-cursor="VIEW"
                className="block"
              >
                <TiltCard>
                  <div className="glass relative aspect-[16/11] overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem]">
                    <Image
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    <div className="absolute bottom-4 left-4 z-20 sm:bottom-6 sm:left-6">
                      <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-400 sm:text-xs">
                        {project.type}
                      </p>

                      <p className="mt-1 text-base font-medium text-white sm:text-xl">
                        {project.title}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </Link>

              <div className="mt-6 sm:mt-7">
                <p className="text-[10px] uppercase tracking-[0.2em] text-violet-400 sm:text-xs">
                  {project.type}
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl md:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
                  {project.shortDescription}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/[0.07] bg-white/[0.015] px-3 py-1.5 text-[10px] text-zinc-500 sm:text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  data-cursor="VIEW"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-white sm:mt-7"
                >
                  View Case Study

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
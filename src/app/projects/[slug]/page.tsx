import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import { projects } from "../../../data/projects";
import PageTransition from "../../../components/ui/PageTransition";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================================================
   STATIC PROJECT ROUTES
========================================================= */

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/* =========================================================
   PROJECT SEO METADATA
========================================================= */

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "Project",
      description:
        "Project case study by Priyanshu Singh.",
    };
  }

  return {
    title: project.title,

    description:
      project.shortDescription,

    openGraph: {
      type: "website",

      title:
        `${project.title} | Priyanshu Singh`,

      description:
        project.shortDescription,

      images: [
        {
          url: project.image,

          alt:
            `${project.title} project by Priyanshu Singh`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title:
        `${project.title} | Priyanshu Singh`,

      description:
        project.shortDescription,

      images: [
        project.image,
      ],
    },
  };
}

/* =========================================================
   PROJECT PAGE
========================================================= */

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <PageTransition>
      <main className="min-h-screen text-white">
        {/* =========================================
            BACK LINK
        ========================================= */}

        <div className="container-custom pt-24 sm:pt-28 md:pt-32">
          <Link
            href="/#projects"
            data-cursor="BACK"
            className="group inline-flex items-center gap-2 text-xs text-zinc-500 transition-colors duration-300 hover:text-white sm:text-sm"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to projects
          </Link>
        </div>

        {/* =========================================
            PROJECT HERO
        ========================================= */}

        <section className="container-custom pb-14 pt-14 sm:pb-20 sm:pt-20 md:pb-28 md:pt-24">
          <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-end lg:gap-16">
            {/* LEFT */}

            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.28em] text-violet-400 sm:text-xs sm:tracking-[0.3em]">
                Project {project.number}
              </p>

              <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:text-sm">
                {project.type}
              </p>

              <h1 className="mt-3 text-[clamp(3rem,14vw,5rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                {project.title}
              </h1>
            </div>

            {/* RIGHT */}

            <div className="min-w-0">
              <p className="max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg md:text-xl">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map(
                  (technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-[10px] text-zinc-400 sm:px-4 sm:py-2 sm:text-xs"
                    >
                      {technology}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            PROJECT IMAGE
        ========================================= */}

        <section className="container-custom">
          <div className="glass relative aspect-[16/10] overflow-hidden rounded-[1.5rem] sm:aspect-[16/9] sm:rounded-[2rem]">
            <Image
              src={project.image}
              alt={`${project.title} project`}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />
          </div>
        </section>

        {/* =========================================
            OVERVIEW
        ========================================= */}

        <section className="section-spacing">
          <div className="container-custom">
            <div className="grid min-w-0 gap-7 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1.45fr)] lg:gap-20">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-violet-400 sm:text-xs sm:tracking-[0.3em]">
                  01 — Overview
                </p>
              </div>

              <p className="max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl sm:leading-9 md:text-2xl md:leading-10">
                {project.overview}
              </p>
            </div>
          </div>
        </section>

        {/* =========================================
            PROBLEM + SOLUTION
        ========================================= */}

        <section className="border-y border-white/[0.05] py-14 sm:py-20 md:py-28">
          <div className="container-custom grid min-w-0 gap-4 md:grid-cols-2 md:gap-6">
            {/* PROBLEM */}

            <div className="glass min-w-0 rounded-[1.5rem] p-5 sm:p-7 md:rounded-[2rem] md:p-10">
              <p className="text-[10px] uppercase tracking-[0.24em] text-violet-400 sm:text-xs sm:tracking-[0.25em]">
                The Problem
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                What needed to be solved.
              </h2>

              <p className="mt-5 text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
                {project.problem}
              </p>
            </div>

            {/* SOLUTION */}

            <div className="glass min-w-0 rounded-[1.5rem] p-5 sm:p-7 md:rounded-[2rem] md:p-10">
              <p className="text-[10px] uppercase tracking-[0.24em] text-violet-400 sm:text-xs sm:tracking-[0.25em]">
                The Solution
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                How I approached it.
              </h2>

              <p className="mt-5 text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
                {project.solution}
              </p>
            </div>
          </div>
        </section>

        {/* =========================================
            FEATURES
        ========================================= */}

        <section className="section-spacing">
          <div className="container-custom">
            <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1.45fr)] lg:gap-20">
              {/* TITLE */}

              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-violet-400 sm:text-xs sm:tracking-[0.3em]">
                  02 — Features
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                  Core functionality.
                </h2>
              </div>

              {/* FEATURES */}

              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {project.features.map(
                  (feature) => (
                    <div
                      key={feature}
                      className="glass flex min-w-0 items-start gap-3 rounded-2xl p-4 sm:gap-4 sm:p-5"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-violet-400"
                      />

                      <p className="text-xs leading-6 text-zinc-400 sm:text-sm">
                        {feature}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            CHALLENGES
        ========================================= */}

        <section className="border-y border-white/[0.05] py-14 sm:py-20 md:py-28">
          <div className="container-custom">
            <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1.45fr)] lg:gap-20">
              {/* TITLE */}

              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-violet-400 sm:text-xs sm:tracking-[0.3em]">
                  03 — Challenges
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                  Engineering considerations.
                </h2>
              </div>

              {/* CHALLENGE LIST */}

              <div className="space-y-3">
                {project.challenges.map(
                  (challenge, index) => (
                    <div
                      key={challenge}
                      className="glass flex min-w-0 gap-4 rounded-2xl p-4 sm:gap-5 sm:p-5"
                    >
                      <span className="shrink-0 text-[10px] text-violet-400 sm:text-xs">
                        {String(
                          index + 1
                        ).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <p className="text-xs leading-6 text-zinc-400 sm:text-sm sm:leading-7">
                        {challenge}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            TECHNOLOGY
        ========================================= */}

        <section className="section-spacing">
          <div className="container-custom">
            <p className="text-[10px] uppercase tracking-[0.28em] text-violet-400 sm:text-xs sm:tracking-[0.3em]">
              04 — Technology
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl md:mt-5 md:text-5xl">
              Built with technologies selected for the
              product.
            </h2>

            <div className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
              {project.technologies.map(
                (technology) => (
                  <div
                    key={technology}
                    className="glass rounded-full px-4 py-2 text-xs text-zinc-300 sm:px-5 sm:py-3 sm:text-sm"
                  >
                    {technology}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* =========================================
            PROJECT LINKS
        ========================================= */}

        {(project.liveUrl ||
          project.githubUrl) && (
          <section className="pb-16 sm:pb-24">
            <div className="container-custom">
              <div className="glass rounded-[1.5rem] p-6 sm:p-8 md:rounded-[2rem] md:p-12">
                <p className="text-[10px] uppercase tracking-[0.28em] text-violet-400 sm:text-xs sm:tracking-[0.3em]">
                  Explore
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                  See the project.
                </h2>

                <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
                  {project.liveUrl && (
                    <a
                      href={
                        project.liveUrl
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="OPEN"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-violet-200"
                    >
                      Live Project

                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={
                        project.githubUrl
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="CODE"
                      className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.02] px-6 py-3 text-sm text-white transition-colors hover:border-violet-400/30"
                    >
                      Source Code

                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================
            BOTTOM CTA
        ========================================= */}

        <section className="border-t border-white/[0.05] py-14 sm:py-20">
          <div className="container-custom flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-600 sm:text-xs sm:tracking-[0.25em]">
                Continue exploring
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                More selected work.
              </h2>
            </div>

            <Link
              href="/#projects"
              data-cursor="VIEW"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white"
            >
              All Projects

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
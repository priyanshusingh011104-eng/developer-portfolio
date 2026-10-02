"use client";

import Image from "next/image";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowUpRight,
  Mail,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import { MouseEvent } from "react";

import AnimatedBackground from "../ui/AnimatedBackground";
import MagneticButton from "../ui/MagneticButton";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 90,
    damping: 22,
    mass: 0.6,
  });

  const springY = useSpring(mouseY, {
    stiffness: 90,
    damping: 22,
    mass: 0.6,
  });

  const photoX = useTransform(
    springX,
    [-1, 1],
    [-10, 10]
  );

  const photoY = useTransform(
    springY,
    [-1, 1],
    [-10, 10]
  );

  const glowX = useTransform(
    springX,
    [-1, 1],
    [-24, 24]
  );

  const glowY = useTransform(
    springY,
    [-1, 1],
    [-24, 24]
  );

  const cardOneX = useTransform(
    springX,
    [-1, 1],
    [-18, 18]
  );

  const cardOneY = useTransform(
    springY,
    [-1, 1],
    [-14, 14]
  );

  const cardTwoX = useTransform(
    springX,
    [-1, 1],
    [14, -14]
  );

  const cardTwoY = useTransform(
    springY,
    [-1, 1],
    [12, -12]
  );

  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    const bounds =
      event.currentTarget.getBoundingClientRect();

    const relativeX =
      (event.clientX - bounds.left) /
      bounds.width;

    const relativeY =
      (event.clientY - bounds.top) /
      bounds.height;

    mouseX.set(relativeX * 2 - 1);
    mouseY.set(relativeY * 2 - 1);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      className="container-custom relative flex min-h-screen items-center pb-16 pt-28 sm:pt-32 lg:pb-20 lg:pt-36"
    >
      <AnimatedBackground />

      <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12 xl:gap-20">
        {/* LEFT */}
        <div className="relative z-10 min-w-0">
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-6 flex items-center gap-3 sm:mb-7"
          >
            <motion.span
              animate={{
                opacity: [1, 0.45, 1],
                scale: [1, 0.85, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]"
            />

            <p className="text-[10px] font-medium uppercase leading-5 tracking-[0.23em] text-zinc-400 sm:text-xs sm:tracking-[0.28em] md:text-sm">
              Available for software & freelance work
            </p>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.85,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[clamp(3rem,14vw,5rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-white sm:text-[clamp(4rem,10vw,6rem)] lg:text-[clamp(4.5rem,6.5vw,7rem)]"
          >
            Building software
            <br />

            <span className="gradient-text">
              that performs.
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:mt-8 sm:text-lg sm:leading-8 md:text-xl md:leading-9"
          >
            I&apos;m Priyanshu Singh, a Software Engineer
            focused on backend systems, full-stack
            applications, e-commerce platforms and modern
            digital products.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <MagneticButton
              href="#projects"
              dataCursor="VIEW"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-colors duration-300 hover:bg-violet-200 sm:w-auto"
            >
              Explore My Work

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl sm:w-auto"
            >
              Let&apos;s Work Together
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.65,
            }}
            className="mt-9 flex flex-wrap gap-2 sm:mt-10"
          >
            {[
              "Java",
              "Spring Boot",
              "Next.js",
              "Node.js",
              "PostgreSQL",
              "Docker",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-2 text-[11px] text-zinc-400 sm:px-4 sm:text-xs"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            className="mt-8 flex items-center gap-4"
          >
            <p className="mr-1 text-[9px] uppercase tracking-[0.25em] text-zinc-600 sm:mr-2 sm:text-[10px]">
              Connect
            </p>

            <a
              href="https://github.com/priyanshu210620"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/priyanshu-singh-1b58a1384/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <FaLinkedinIn size={19} />
            </a>

            <a
              href="mailto:priyanshusingh011104@gmail.com"
              aria-label="Email"
              className="text-zinc-500 transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <Mail size={19} />
            </a>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.25,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative mx-auto mt-4 w-full max-w-[420px] sm:max-w-[460px] lg:mt-0"
        >
          <motion.div
            style={{
              x: glowX,
              y: glowY,
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[100px] sm:h-[420px] sm:w-[420px]"
          />

          <div className="pointer-events-none absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-violet-400/30 via-transparent to-blue-400/10 blur-[2px]" />

          <motion.div
            style={{
              x: photoX,
              y: photoY,
            }}
            data-cursor="HELLO"
            className="glass relative aspect-[4/5] overflow-hidden rounded-[1.75rem] sm:rounded-[2rem]"
          >
            <Image
              src="/images/profile/hero.jpg"
              alt="Priyanshu Singh"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 90vw, 460px"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/75" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-violet-600/25 via-transparent to-transparent" />

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="glass absolute bottom-4 left-4 z-20 rounded-xl px-3 py-2.5 sm:bottom-5 sm:left-5 sm:rounded-2xl sm:px-4 sm:py-3"
            >
              <p className="text-[8px] uppercase tracking-[0.24em] text-zinc-500 sm:text-[9px]">
                Focus
              </p>

              <p className="mt-1 text-xs font-medium text-white sm:text-sm">
                Backend × Full Stack
              </p>
            </motion.div>
          </motion.div>

          {/* desktop-only floating cards */}
          <motion.div
            style={{
              x: cardOneX,
              y: cardOneY,
            }}
            className="glass absolute -right-6 top-16 hidden rounded-2xl px-4 py-3 lg:block"
          >
            <p className="font-mono text-xs text-violet-300">
              {"{ build(); ship(); }"}
            </p>
          </motion.div>

          <motion.div
            style={{
              x: cardTwoX,
              y: cardTwoY,
            }}
            className="glass absolute -left-8 top-[34%] hidden rounded-2xl px-5 py-4 lg:block"
          >
            <p className="text-xs text-zinc-500">
              Building
            </p>

            <p className="mt-1 text-sm font-semibold text-white">
              Scalable products
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* desktop only */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 xl:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-600">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="h-8 w-px bg-gradient-to-b from-zinc-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
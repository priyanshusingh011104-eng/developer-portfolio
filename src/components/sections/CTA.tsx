"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import MagneticButton from "../ui/MagneticButton";

export default function CTA() {
  return (
    <section className="section-spacing relative">
      <div className="container-custom">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
          }}
          className="glass relative overflow-hidden rounded-[2.5rem] px-7 py-16 md:px-12 md:py-24 lg:px-16"
        >
          {/* GLOWS */}
          <div className="absolute right-[-150px] top-[-180px] h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[120px]" />

          <div className="absolute bottom-[-200px] left-[-100px] h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[120px]" />

          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-400">
              Available for projects
            </p>

            <h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Have an idea?
              <br />
              Let&apos;s build it.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              Whether you need a web application, backend
              system, e-commerce platform or custom software
              product, I&apos;m open to discussing how we
              can turn your idea into something real.
            </p>

            <div className="mt-10">
              <MagneticButton
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-colors duration-300 hover:bg-violet-200"
              >
                Start a Project

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
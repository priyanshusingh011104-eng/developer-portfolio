"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "I start by understanding the business goal, user requirements, technical constraints and the core problem the product needs to solve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "I define the architecture, technology stack, application structure, database design and development roadmap before implementation.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "The product is developed incrementally with focus on clean code, reusable components, reliable APIs and maintainable architecture.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "Core functionality, responsive behavior, API flows and application states are tested before moving toward production.",
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "The final product is prepared for production using appropriate deployment, database and cloud infrastructure.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
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
            06 — Process
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
              How I turn
              <br />

              <span className="gradient-text">
                ideas into products.
              </span>
            </motion.h2>

            <p className="max-w-xl text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8 md:text-lg">
              A structured workflow helps keep development
              clear, scalable and aligned with the actual
              product goal.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
              }}
              whileHover={{ y: -5 }}
              className="glass group relative overflow-hidden rounded-[1.5rem] p-5 sm:p-6"
            >
              <span className="text-[10px] text-violet-400 sm:text-xs">
                {step.number}
              </span>

              <h3 className="mt-6 text-lg font-semibold text-white sm:mt-8 sm:text-xl">
                {step.title}
              </h3>

              <p className="mt-4 text-xs leading-6 text-zinc-500 sm:text-sm sm:leading-7">
                {step.description}
              </p>

              <div className="mt-6 h-px w-full bg-white/[0.06] sm:mt-8">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.06,
                  }}
                  className="h-full bg-violet-400/40"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
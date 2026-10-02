"use client";

import { motion } from "framer-motion";

const technologies = [
  "Java",
  "Spring Boot",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Kafka",
  "Docker",
  "AWS",
  "Postman",
  "REST APIs",
];

export default function TechMarquee() {
  const repeatedTechnologies = [
    ...technologies,
    ...technologies,
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-white/[0.015] py-6">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#080808] to-transparent md:w-40" />

      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#080808] to-transparent md:w-40" />

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max items-center"
      >
        {repeatedTechnologies.map((tech, index) => (
          <div
            key={`${tech}-${index}`}
            className="flex items-center"
          >
            <span className="whitespace-nowrap px-6 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500 transition-colors duration-300 hover:text-white md:px-8">
              {tech}
            </span>

            <span className="text-violet-500/60">
              •
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
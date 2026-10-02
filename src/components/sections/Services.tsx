"use client";

import { motion } from "framer-motion";
import {
  Braces,
  Cloud,
  Database,
  Layers3,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Braces,
    number: "01",
    title: "Backend Development",
    description:
      "Scalable backend applications, REST APIs, authentication, business logic and database-driven systems.",
    technologies: "Java • Spring Boot • Node.js",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Full-Stack Development",
    description:
      "Modern web applications combining responsive frontend experiences with reliable backend infrastructure.",
    technologies: "React.js • Next.js • APIs",
  },
  {
    icon: ShoppingBag,
    number: "03",
    title: "E-Commerce Development",
    description:
      "Product catalogs, cart systems, orders, customer flows, admin functionality and custom online stores.",
    technologies: "Next.js • Backend • Database",
  },
  {
    icon: Database,
    number: "04",
    title: "API & Database Design",
    description:
      "Structured APIs and database architectures designed around maintainability, performance and scalability.",
    technologies: "REST • PostgreSQL • MongoDB",
  },
  {
    icon: Sparkles,
    number: "05",
    title: "AI Integration",
    description:
      "Integrating intelligent features and automation into modern software products where they add practical value.",
    technologies: "AI APIs • Automation",
  },
  {
    icon: Cloud,
    number: "06",
    title: "Deployment & Cloud",
    description:
      "Containerized applications and production deployment for frontend, backend and database services.",
    technologies: "Docker • AWS • Vercel",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-spacing relative border-t border-white/[0.05]"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24"
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-violet-400">
            05 — What I Do
          </p>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <h2 className="section-heading text-white">
              From idea
              <br />
              to product.
            </h2>

            <p className="max-w-xl text-base leading-8 text-zinc-500 lg:justify-self-end md:text-lg">
              I work across backend engineering, full-stack development and
              digital product development for both software teams and clients.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -6,
                }}
                className="glass group relative overflow-hidden rounded-[1.75rem] p-7 md:p-8"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/0 blur-[60px] transition-all duration-500 group-hover:bg-violet-500/10" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-violet-300">
                      <Icon size={20} />
                    </div>

                    <span className="text-xs text-zinc-700">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-500">
                    {service.description}
                  </p>

                  <p className="mt-8 text-xs uppercase tracking-[0.18em] text-zinc-600">
                    {service.technologies}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
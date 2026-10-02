"use client";

import { motion } from "framer-motion";

export default function GlobalBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* BASE */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* GRID */}
      <div className="global-grid absolute inset-0 opacity-[0.22]" />

      {/* TOP RIGHT GLOW */}
      <motion.div
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-[180px] -top-[160px] h-[600px] w-[600px] rounded-full bg-violet-600/[0.09] blur-[150px]"
      />

      {/* LEFT GLOW */}
      <motion.div
        animate={{
          x: [0, 35, -25, 0],
          y: [0, -25, 25, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-220px] top-[35%] h-[520px] w-[520px] rounded-full bg-blue-600/[0.05] blur-[150px]"
      />

      {/* BOTTOM GLOW */}
      <motion.div
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 30, -15, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-250px] right-[10%] h-[550px] w-[550px] rounded-full bg-purple-500/[0.06] blur-[160px]"
      />

      {/* SOFT CENTER LIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.025),transparent_40%)]" />

      {/* VIGNETTE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.45)_100%)]" />

      {/* NOISE */}
      <div className="global-noise absolute inset-0 opacity-[0.035]" />
    </div>
  );
}
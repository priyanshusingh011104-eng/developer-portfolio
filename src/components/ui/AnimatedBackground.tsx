"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [
            1,
            1.08,
            0.96,
            1,
          ],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 right-[-120px] h-[420px] w-[420px] rounded-full bg-violet-600/[0.12] blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -30, 25, 0],
          y: [0, 30, -15, 0],
          scale: [
            1,
            0.95,
            1.05,
            1,
          ],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-180px] left-[-120px] h-[420px] w-[420px] rounded-full bg-blue-600/[0.06] blur-[130px]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.018),transparent_58%)]" />
    </div>
  );
}
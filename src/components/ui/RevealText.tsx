"use client";

import { motion } from "framer-motion";

type RevealTextProps = {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  animateOnLoad?: boolean;
  highlightLastLine?: boolean;
};

export default function RevealText({
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  animateOnLoad = false,
  highlightLastLine = false,
}: RevealTextProps) {
  const hiddenState = {
    y: "105%",
    opacity: 0,
  };

  const visibleState = {
    y: "0%",
    opacity: 1,
  };

  return (
    <div className={className}>
      {lines.map((line, index) => {
        const isLastLine =
          index === lines.length - 1;

        return (
          <div
            key={`${line}-${index}`}
            className="overflow-hidden pb-[0.06em]"
          >
            {animateOnLoad ? (
              <motion.div
                initial={hiddenState}
                animate={visibleState}
                transition={{
                  duration: 0.85,
                  delay:
                    delay +
                    index * 0.09,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className={`${lineClassName} ${
                  highlightLastLine &&
                  isLastLine
                    ? "gradient-text"
                    : ""
                }`}
              >
                {line}
              </motion.div>
            ) : (
              <motion.div
                initial={hiddenState}
                whileInView={visibleState}
                viewport={{
                  once: true,
                  amount: 0.1,
                  margin:
                    "0px 0px -40px 0px",
                }}
                transition={{
                  duration: 0.85,
                  delay:
                    delay +
                    index * 0.09,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className={`${lineClassName} ${
                  highlightLastLine &&
                  isLastLine
                    ? "gradient-text"
                    : ""
                }`}
              >
                {line}
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}
"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  MouseEvent,
  ReactNode,
} from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export default function TiltCard({
  children,
  className = "",
}: TiltCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(
      mouseY,
      [-0.5, 0.5],
      [5, -5]
    ),
    {
      stiffness: 180,
      damping: 24,
      mass: 0.35,
    }
  );

  const rotateY = useSpring(
    useTransform(
      mouseX,
      [-0.5, 0.5],
      [-6, 6]
    ),
    {
      stiffness: 180,
      damping: 24,
      mass: 0.35,
    }
  );

  const glowX = useTransform(
    mouseX,
    [-0.5, 0.5],
    ["25%", "75%"]
  );

  const glowY = useTransform(
    mouseY,
    [-0.5, 0.5],
    ["25%", "75%"]
  );

  const imageX = useSpring(
    useTransform(
      mouseX,
      [-0.5, 0.5],
      [-8, 8]
    ),
    {
      stiffness: 140,
      damping: 24,
    }
  );

  const imageY = useSpring(
    useTransform(
      mouseY,
      [-0.5, 0.5],
      [-8, 8]
    ),
    {
      stiffness: 140,
      damping: 24,
    }
  );

  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    const bounds =
      event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX -
        bounds.left) /
        bounds.width -
      0.5;

    const y =
      (event.clientY -
        bounds.top) /
        bounds.height -
      0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1100,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 24,
      }}
      className={`relative will-change-transform ${className}`}
    >
      {/* POINTER GLOW */}
      <motion.div
        style={{
          left: glowX,
          top: glowY,
        }}
        className="pointer-events-none absolute z-20 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/[0.09] blur-[60px]"
      />

      {/* CONTENT */}
      <motion.div
        style={{
          x: imageX,
          y: imageY,
        }}
        className="relative h-full w-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
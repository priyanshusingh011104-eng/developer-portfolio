"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  MouseEvent,
  ReactNode,
} from "react";

type MagneticButtonProps = {
  children: ReactNode;

  href?: string;

  type?:
    | "button"
    | "submit"
    | "reset";

  className?: string;

  target?: string;

  rel?: string;

  dataCursor?: string;
};

export default function MagneticButton({
  children,
  href,
  type = "button",
  className = "",
  target,
  rel,
  dataCursor,
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 18,
    mass: 0.15,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 18,
    mass: 0.15,
  });

  const handleMouseMove = (
    event: MouseEvent<HTMLElement>
  ) => {
    const element =
      event.currentTarget.getBoundingClientRect();

    const centerX =
      event.clientX -
      element.left -
      element.width / 2;

    const centerY =
      event.clientY -
      element.top -
      element.height / 2;

    x.set(centerX * 0.18);
    y.set(centerY * 0.18);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        data-cursor={dataCursor}
        style={{
          x: springX,
          y: springY,
        }}
        onMouseMove={
          handleMouseMove
        }
        onMouseLeave={
          handleMouseLeave
        }
        whileTap={{
          scale: 0.96,
        }}
        className={className}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      data-cursor={dataCursor}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={
        handleMouseMove
      }
      onMouseLeave={
        handleMouseLeave
      }
      whileTap={{
        scale: 0.96,
      }}
      className={className}
    >
      {children}
    </motion.button>
  );
}
"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const pathname = usePathname();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, {
    stiffness: 250,
    damping: 26,
    mass: 0.35,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 250,
    damping: 26,
    mass: 0.35,
  });

  const [enabled, setEnabled] =
    useState(false);

  const [visible, setVisible] =
    useState(false);

  const [hovered, setHovered] =
    useState(false);

  const [pressed, setPressed] =
    useState(false);

  const [label, setLabel] =
    useState("");

  /* =========================================
     CHECK POINTER TYPE
  ========================================= */

  useEffect(() => {
    const pointerQuery =
      window.matchMedia("(pointer: fine)");

    const updatePointerSupport = () => {
      setEnabled(pointerQuery.matches);
    };

    updatePointerSupport();

    pointerQuery.addEventListener(
      "change",
      updatePointerSupport
    );

    return () => {
      pointerQuery.removeEventListener(
        "change",
        updatePointerSupport
      );
    };
  }, []);

  /* =========================================
     RESET CURSOR ON ROUTE CHANGE
  ========================================= */

  useEffect(() => {
    setHovered(false);
    setPressed(false);
    setLabel("");

    /*
      Keep it visible if the mouse is already
      inside the browser when changing route.
    */

    setVisible(true);
  }, [pathname]);

  /* =========================================
     CURSOR EVENTS
  ========================================= */

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handlePointerMove = (
      event: PointerEvent
    ) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      setVisible(true);

      const target =
        event.target as HTMLElement | null;

      if (!target) {
        setHovered(false);
        setLabel("");
        return;
      }

      const interactiveElement =
        target.closest(
          "a, button, [data-cursor]"
        ) as HTMLElement | null;

      if (interactiveElement) {
        setHovered(true);

        setLabel(
          interactiveElement.dataset.cursor ??
            ""
        );
      } else {
        setHovered(false);
        setLabel("");
      }
    };

    const handlePointerDown = () => {
      setPressed(true);
    };

    const handlePointerUp = () => {
      setPressed(false);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    const handleWindowBlur = () => {
      setVisible(false);
    };

    const handleWindowFocus = () => {
      setVisible(true);
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove
    );

    window.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    window.addEventListener(
      "pointerup",
      handlePointerUp
    );

    window.addEventListener(
      "blur",
      handleWindowBlur
    );

    window.addEventListener(
      "focus",
      handleWindowFocus
    );

    document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    document.documentElement.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "pointerdown",
        handlePointerDown
      );

      window.removeEventListener(
        "pointerup",
        handlePointerUp
      );

      window.removeEventListener(
        "blur",
        handleWindowBlur
      );

      window.removeEventListener(
        "focus",
        handleWindowFocus
      );

      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );
    };
  }, [
    enabled,
    mouseX,
    mouseY,
  ]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      {/* OUTER CURSOR */}
      <motion.div
        style={{
          left: smoothX,
          top: smoothY,
        }}
        animate={{
          width: label
            ? 82
            : hovered
              ? 54
              : 34,

          height: label
            ? 82
            : hovered
              ? 54
              : 34,

          opacity: visible ? 1 : 0,

          scale: pressed ? 0.82 : 1,

          backgroundColor: hovered
            ? "rgba(124, 92, 255, 0.14)"
            : "rgba(124, 92, 255, 0.04)",

          borderColor: hovered
            ? "rgba(167, 139, 250, 0.7)"
            : "rgba(255, 255, 255, 0.18)",
        }}
        transition={{
          width: {
            duration: 0.18,
          },

          height: {
            duration: 0.18,
          },

          scale: {
            duration: 0.12,
          },

          opacity: {
            duration: 0.15,
          },
        }}
        className="pointer-events-none fixed z-[9999] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-sm"
      >
        {label && (
          <motion.span
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white"
          >
            {label}
          </motion.span>
        )}
      </motion.div>

      {/* CENTER DOT */}
      <motion.div
        style={{
          left: mouseX,
          top: mouseY,
        }}
        animate={{
          opacity: visible ? 1 : 0,

          scale: hovered
            ? 0.5
            : pressed
              ? 1.6
              : 1,
        }}
        transition={{
          duration: 0.1,
        }}
        className="pointer-events-none fixed z-[10000] h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(196,181,253,0.8)]"
      />
    </>
  );
}
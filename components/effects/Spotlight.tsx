"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Spotlight({ children }: Props) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 350,
    damping: 35,
  });

  const y = useSpring(mouseY, {
    stiffness: 350,
    damping: 35,
  });

  return (
    <div
      className="group relative overflow-hidden rounded-3xl"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
    >
      <motion.div
        style={{
          left: x,
          top: y,
        }}
        className="
          pointer-events-none
          absolute
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/20
          blur-3xl
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {children}
    </div>
  );
}
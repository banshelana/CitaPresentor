"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 80,
    damping: 25,
  });

  const y = useSpring(mouseY, {
    stiffness: 80,
    damping: 25,
  });

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    }

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[120px]"
    />
  );
}
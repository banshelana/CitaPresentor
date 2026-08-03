"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -80, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -150, 80, 0],
          y: [0, 120, -60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-10%] top-[20%] h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -120, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-[30%] h-[400px] w-[400px] rounded-full bg-violet-500/20 blur-[120px]"
      />

    </div>
  );
}
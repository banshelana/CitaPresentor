"use client";

import { motion } from "framer-motion";

export default function FloatingOrbs() {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
          }}
          className="absolute rounded-full bg-violet-500/10 blur-3xl"
          style={{
            width: 150 + i * 30,
            height: 150 + i * 30,
            left: `${10 + i * 10}%`,
            top: `${5 + i * 8}%`,
          }}
        />
      ))}
    </>
  );
}
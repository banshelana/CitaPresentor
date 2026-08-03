"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GlowBorder({ children }: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      className="
      relative
      overflow-hidden
      rounded-3xl
      p-[1px]
      bg-gradient-to-r
      from-violet-600
      via-cyan-500
      to-violet-600
      "
    >
      <div className="rounded-3xl bg-zinc-950">

        {children}

      </div>

    </motion.div>
  );
}
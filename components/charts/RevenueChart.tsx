"use client";

import { motion } from "framer-motion";

const data = [60, 95, 75, 120, 90, 140, 110, 170, 145, 210, 180, 240];

export default function RevenueChart() {
  return (
    <div className="flex h-72 items-end gap-3">

      {data.map((value, index) => (

        <motion.div
          key={index}
          initial={{ height: 0 }}
          whileInView={{ height: value }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.05,
            duration: .6,
          }}
          className="group relative flex-1 rounded-t-xl bg-gradient-to-t from-violet-600 to-cyan-500"
        >

          <div className="absolute -top-8 left-1/2 hidden -translate-x-1/2 rounded-lg bg-zinc-900 px-2 py-1 text-xs group-hover:block">

            {value}

          </div>

        </motion.div>

      ))}

    </div>
  );
}
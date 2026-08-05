"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";

const data = [80, 120, 95, 150, 130, 180, 160, 220, 200, 260, 240, 300];

export default function RevenueChart() {
  return (
    <GlassCard className="p-8">

      <div className="mb-8 flex items-center justify-between">

        <h3 className="text-xl font-bold">
          درآمد ماهانه
        </h3>

        <span className="text-zinc-500">
          12 ماه اخیر
        </span>

      </div>

      <div className="flex h-72 items-end gap-3">

        {data.map((value, index) => (

          <motion.div
            key={index}
            initial={{ height: 0 }}
            whileInView={{ height: value }}
            viewport={{ once: true }}
            transition={{
              delay: index * .05,
              duration: .6,
            }}
            className="flex-1 rounded-t-xl bg-gradient-to-t from-violet-600 to-cyan-500"
          />

        ))}

      </div>

    </GlassCard>
  );
}
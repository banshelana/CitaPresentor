"use client";

import { motion } from "framer-motion";
import CountUp from "../effects/CountUp";

const stats = [
  { value: "+250", label: "سالن فعال" },
  { value: "+120K", label: "رزرو موفق" },
  { value: "98%", label: "رضایت مشتریان" },
  { value: "24/7", label: "پشتیبانی" },
];

export default function Stats() {
  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              className="text-center"
            >
              <h3 className="text-4xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {/* {item.value} */}
                <CountUp value={parseInt(item.value)} />
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
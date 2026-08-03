"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "TailwindCSS",
  "Framer Motion",
  "Shadcn/UI",
  "ASP.NET Core",
  "REST API",
  "JWT",
  "PostgreSQL",
  "Redis",
  "SignalR",
  "Docker",
  "Nginx",
];

export default function TechStack() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          badge="Technology Stack"
          title="Modern Technologies"
          description="سامانه با استفاده از تکنولوژی‌های روز و معماری Enterprise توسعه یافته است."
        />

        <div className="relative flex h-[650px] items-center justify-center overflow-hidden">

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[520px] w-[520px]"
          >

            {stack.map((item, index) => {

              const angle = (360 / stack.length) * index;

              return (

                <motion.div
                  key={item}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `
                    rotate(${angle}deg)
                    translateY(-240px)
                    rotate(-${angle}deg)
                    `,
                  }}
                >

                  <GlassCard className="px-5 py-3 whitespace-nowrap">

                    {item}

                  </GlassCard>

                </motion.div>

              );

            })}

          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
          >

            <GlassCard className="flex h-52 w-52 items-center justify-center rounded-full">

              <div className="text-center">

                <div className="text-5xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">

                  Beauty

                </div>

                <div className="mt-3 text-zinc-400">

                  Enterprise Platform

                </div>

              </div>

            </GlassCard>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
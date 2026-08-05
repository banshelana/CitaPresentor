"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  Star,
} from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";

const salons = [
  {
    name: "Beauty Plus",
    top: "22%",
    left: "35%",
    rate: 4.9,
  },
  {
    name: "Luxury Beauty",
    top: "42%",
    left: "70%",
    rate: 4.8,
  },
  {
    name: "Beauty Land",
    top: "65%",
    left: "45%",
    rate: 4.7,
  },
];

export default function InteractiveMap() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          badge="Location Services"
          title="Interactive Map"
          description="جستجوی سالن‌ها براساس موقعیت مکانی"
        />

        <GlassCard className="overflow-hidden p-0">

          <div className="relative h-[650px] bg-[radial-gradient(circle_at_center,#27272a_1px,transparent_1px)] bg-[size:40px_40px]">

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/40"
            />

            <motion.div
              animate={{
                scale: [1, 1.4, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                delay: .5,
              }}
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/20"
            />

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
              >
                <Navigation
                  size={42}
                  className="text-cyan-400"
                />
              </motion.div>

            </div>

            {salons.map((salon) => (

              <motion.div
                key={salon.name}
                initial={{
                  opacity: 0,
                  scale: .5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                style={{
                  top: salon.top,
                  left: salon.left,
                }}
                className="absolute"
              >

                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="absolute h-8 w-8 rounded-full bg-violet-500/30"
                />

                <MapPin
                  className="relative text-violet-400"
                  size={34}
                />

                <GlassCard className="mt-3 w-52 p-4">

                  <h4 className="font-bold">
                    {salon.name}
                  </h4>

                  <div className="mt-2 flex items-center gap-2">

                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    {salon.rate}

                  </div>

                  <button className="mt-4 w-full rounded-xl bg-violet-600 py-2">
                    رزرو
                  </button>

                </GlassCard>

              </motion.div>

            ))}

          </div>

        </GlassCard>

      </div>

    </section>
  );
}
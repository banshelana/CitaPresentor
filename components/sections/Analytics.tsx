"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  CalendarDays,
  Wallet,
  ArrowUpRight,
} from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";

const stats = [
  {
    title: "درآمد ماه",
    value: "845M",
    growth: "+18%",
    icon: Wallet,
  },
  {
    title: "رزروها",
    value: "12,480",
    growth: "+12%",
    icon: CalendarDays,
  },
  {
    title: "کاربران",
    value: "24,350",
    growth: "+22%",
    icon: Users,
  },
  {
    title: "رشد سیستم",
    value: "98%",
    growth: "+7%",
    icon: TrendingUp,
  },
];

const chart = [45, 70, 55, 90, 65, 120, 95, 150, 135, 180, 165, 210];

export default function Analytics() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          badge="Analytics"
          title="داشبورد گزارشات مدیریتی"
          description="تحلیل عملکرد سیستم، درآمد، رزروها و کاربران."
        />

        <div className="grid gap-6 lg:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * .08 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6">

                  <div className="flex items-center justify-between">

                    <div className="rounded-xl bg-violet-600/20 p-3">

                      <Icon className="text-violet-400" />

                    </div>

                    <span className="flex items-center gap-1 text-green-400 text-sm">

                      {item.growth}

                      <ArrowUpRight size={14} />

                    </span>

                  </div>

                  <div className="mt-6 text-4xl font-black">

                    {item.value}

                  </div>

                  <div className="mt-2 text-zinc-400">

                    {item.title}

                  </div>

                </GlassCard>

              </motion.div>
            );
          })}

        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">

          <GlassCard className="p-8 lg:col-span-2">

            <div className="mb-8 flex items-center justify-between">

              <h3 className="text-xl font-bold">

                روند درآمد

              </h3>

              <span className="text-zinc-500">

                12 ماه اخیر

              </span>

            </div>

            <div className="flex h-72 items-end gap-4">

              {chart.map((value, index) => (

                <motion.div
                  key={index}
                  initial={{
                    height: 0,
                  }}
                  whileInView={{
                    height: value,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * .05,
                    duration: .6,
                  }}
                  className="flex-1 rounded-t-xl bg-gradient-to-t from-violet-600 to-cyan-500"
                />

              ))}

            </div>

          </GlassCard>

          <GlassCard className="p-8">

            <h3 className="mb-8 text-xl font-bold">

              شاخص عملکرد

            </h3>

            {[
              ["رضایت مشتری", 96],
              ["پرداخت موفق", 99],
              ["رزرو آنلاین", 91],
              ["سرعت سیستم", 98],
            ].map(([title, value]) => (

              <div
                key={title}
                className="mb-6"
              >

                <div className="mb-2 flex justify-between">

                  <span>{title}</span>

                  <span>{value}%</span>

                </div>

                <div className="h-2 rounded-full bg-white/10">

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${value}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="h-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500"
                  />

                </div>

              </div>

            ))}

          </GlassCard>

        </div>

      </div>

    </section>
  );
}
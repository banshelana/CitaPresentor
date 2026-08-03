"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  CalendarDays,
  Wallet,
} from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import KPI from "@/components/dashboard/KPI";
import RevenueChart from "@/components/charts/RevenueChart";

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

          {stats.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .08 }}
              viewport={{ once: true }}
            >

              <KPI
                title={item.title}
                value={item.value}
                growth={item.growth}
                icon={item.icon}
              />

            </motion.div>

          ))}

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

            <RevenueChart />

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
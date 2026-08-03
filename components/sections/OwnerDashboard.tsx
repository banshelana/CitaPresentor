"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Users,
  Wallet,
  Star,
  Clock3,
  Scissors,
} from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";

const stats = [
  {
    title: "رزرو امروز",
    value: "42",
    icon: CalendarDays,
  },
  {
    title: "مشتریان",
    value: "1280",
    icon: Users,
  },
  {
    title: "درآمد امروز",
    value: "18.4M",
    icon: Wallet,
  },
  {
    title: "امتیاز",
    value: "4.9",
    icon: Star,
  },
];

const operators = [
  {
    name: "الهام محمدی",
    service: "رنگ مو",
    status: "در حال سرویس",
  },
  {
    name: "سارا کریمی",
    service: "کوتاهی",
    status: "آزاد",
  },
  {
    name: "مریم رضایی",
    service: "میکاپ",
    status: "رزرو شده",
  },
];

export default function OwnerDashboard() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          badge="پنل صاحب سالن"
          title="مدیریت کامل کسب‌وکار"
          description="مدیریت اپراتورها، رزروها، مشتریان و گزارش‌های مالی از یک داشبورد واحد."
        />

        <GlassCard className="p-8">

          <div className="grid gap-6 lg:grid-cols-4">

            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <GlassCard key={item.title} className="p-5">

                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20">

                    <Icon />

                  </div>

                  <div className="text-3xl font-black">
                    {item.value}
                  </div>

                  <div className="mt-2 text-zinc-400">
                    {item.title}
                  </div>

                </GlassCard>
              );
            })}

          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">

            <GlassCard className="p-6">

              <h3 className="mb-6 text-xl font-bold">
                اپراتورهای امروز
              </h3>

              <div className="space-y-4">

                {operators.map((item) => (

                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-xl bg-white/5 p-4"
                  >

                    <div className="flex items-center gap-4">

                      <div className="rounded-xl bg-cyan-500/20 p-3">

                        <Scissors size={18} />

                      </div>

                      <div>

                        <div className="font-semibold">
                          {item.name}
                        </div>

                        <div className="text-sm text-zinc-400">
                          {item.service}
                        </div>

                      </div>

                    </div>

                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                      {item.status}
                    </span>

                  </div>

                ))}

              </div>

            </GlassCard>

            <GlassCard className="p-6">

              <h3 className="mb-6 text-xl font-bold">
                برنامه امروز
              </h3>

              <div className="space-y-4">

                {[
                  "09:00 افتتاح سالن",
                  "10:30 رزرو اول",
                  "12:00 استراحت",
                  "14:30 جلسه VIP",
                  "18:00 پایان شیفت",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-xl bg-white/5 p-4"
                  >

                    <Clock3 className="text-violet-400" size={18} />

                    {item}

                  </div>

                ))}

              </div>

            </GlassCard>

          </div>

        </GlassCard>

      </div>

    </section>
  );
}
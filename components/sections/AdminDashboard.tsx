"use client";

import { motion } from "framer-motion";
import {
  Building2,
  CalendarDays,
  Users,
  Wallet,
  TrendingUp,
  Bell,
} from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";

const stats = [
  {
    title: "سالن ها",
    value: "248",
    icon: Building2,
  },
  {
    title: "رزرو امروز",
    value: "1,284",
    icon: CalendarDays,
  },
  {
    title: "کاربران",
    value: "18,540",
    icon: Users,
  },
  {
    title: "درآمد",
    value: "286 M",
    icon: Wallet,
  },
];

const reservations = [
  {
    customer: "نگار احمدی",
    salon: "Beauty Plus",
    time: "10:30",
    status: "تایید شده",
  },
  {
    customer: "الهام رضایی",
    salon: "Luxury Beauty",
    time: "11:00",
    status: "در انتظار",
  },
  {
    customer: "مریم کریمی",
    salon: "Beauty Land",
    time: "11:30",
    status: "پرداخت شده",
  },
];

export default function AdminDashboard() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          badge="داشبورد مدیریت"
          title="کنترل کامل سامانه"
          description="نمایی از پنل مدیریت برای نظارت بر سالن‌ها، کاربران، رزروها و گزارش‌های مالی."
        />

        <GlassCard className="overflow-hidden p-8">

          <div className="mb-8 flex items-center justify-between">

            <div>

              <h3 className="text-3xl font-bold">
                Admin Dashboard
              </h3>

              <p className="mt-2 text-zinc-400">
                Enterprise Management Panel
              </p>

            </div>

            <Bell className="text-violet-400" />

          </div>

          <div className="grid gap-6 lg:grid-cols-4">

            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <GlassCard key={item.title} className="p-5">

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20">

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

          <div className="mt-8 grid gap-8 lg:grid-cols-3">

            <GlassCard className="p-6 lg:col-span-2">

              <div className="mb-5 flex items-center justify-between">

                <h4 className="font-bold">
                  آخرین رزروها
                </h4>

                <TrendingUp className="text-green-400" />

              </div>

              <div className="space-y-4">

                {reservations.map((item) => (

                  <div
                    key={item.customer}
                    className="flex items-center justify-between rounded-xl bg-white/5 p-4"
                  >

                    <div>

                      <div className="font-semibold">
                        {item.customer}
                      </div>

                      <div className="text-sm text-zinc-400">
                        {item.salon}
                      </div>

                    </div>

                    <div className="text-center">

                      <div>
                        {item.time}
                      </div>

                      <div className="text-xs text-green-400">
                        {item.status}
                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </GlassCard>

            <GlassCard className="p-6">

              <h4 className="mb-6 font-bold">
                وضعیت سیستم
              </h4>

              <div className="space-y-5">

                <Status
                  title="API Server"
                  value="Online"
                />

                <Status
                  title="Database"
                  value="Healthy"
                />

                <Status
                  title="SMS Service"
                  value="Connected"
                />

                <Status
                  title="Payment"
                  value="Available"
                />

              </div>

            </GlassCard>

          </div>

        </GlassCard>

      </div>

    </section>
  );
}

function Status({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">

      <span>{title}</span>

      <span className="text-green-400">
        {value}
      </span>

    </div>
  );
}
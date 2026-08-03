"use client";

import { motion } from "framer-motion";
import {
  User,
  Store,
  Shield,
  ArrowRight,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";

const roles = [
  {
    title: "مشتری",
    icon: User,
    color: "from-cyan-500 to-blue-600",
    items: [
      "جستجوی سالن",
      "رزرو آنلاین",
      "مدیریت نوبت‌ها",
      "لیست علاقه‌مندی‌ها",
      "ثبت نظر و امتیاز",
    ],
  },
  {
    title: "صاحب سالن",
    icon: Store,
    color: "from-violet-500 to-fuchsia-600",
    items: [
      "مدیریت سالن",
      "مدیریت اپراتورها",
      "مدیریت رزروها",
      "گزارش‌ها",
      "مدیریت پرداخت‌ها",
    ],
  },
  {
    title: "مدیر سیستم",
    icon: Shield,
    color: "from-emerald-500 to-teal-600",
    items: [
      "مدیریت کاربران",
      "مدیریت سالن‌ها",
      "مدیریت پرداخت‌ها",
      "گزارش‌های مدیریتی",
      "داشبورد سیستم",
    ],
  },
];

export default function UserRoles() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          badge="پنل‌های کاربری"
          title="سه نقش، یک سامانه"
          description="هر کاربر تنها امکانات موردنیاز خود را مشاهده می‌کند."
        />

        <div className="grid gap-8 lg:grid-cols-3">

          {roles.map((role, index) => {
            const Icon = role.icon;

            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <GlassCard className="group h-full p-8">

                  <div
                    className={`mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${role.color}`}
                  >
                    <Icon className="text-white" size={36} />
                  </div>

                  <h3 className="mb-6 text-3xl font-bold">
                    {role.title}
                  </h3>

                  <div className="space-y-4">

                    {role.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-zinc-300"
                      >
                        <ArrowRight
                          size={16}
                          className="text-violet-400"
                        />

                        {item}
                      </div>
                    ))}

                  </div>

                </GlassCard>
              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
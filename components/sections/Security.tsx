"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  KeyRound,
  Lock,
  FileCheck2,
  Activity,
  ServerCrash,
} from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";

const items = [
  {
    icon: KeyRound,
    title: "JWT Authentication",
    description: "احراز هویت مبتنی بر JWT Token",
  },
  {
    icon: ShieldCheck,
    title: "Role Management",
    description: "مدیریت نقش‌های کاربران",
  },
  {
    icon: Lock,
    title: "Claims Authorization",
    description: "کنترل دسترسی بر اساس Claim",
  },
  {
    icon: FileCheck2,
    title: "Activity Logs",
    description: "ثبت تمامی عملیات مهم سیستم",
  },
  {
    icon: Activity,
    title: "Monitoring",
    description: "پایش وضعیت سیستم و سرویس‌ها",
  },
  {
    icon: ServerCrash,
    title: "Error Handling",
    description: "مدیریت خطا و جلوگیری از اختلال سیستم",
  },
];

export default function Security() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          badge="امنیت سامانه"
          title="طراحی بر اساس استانداردهای روز"
          description="تمامی عملیات، دسترسی‌ها و ارتباطات با رعایت اصول امنیتی پیاده‌سازی شده‌اند."
        />

        <div className="grid gap-8 lg:grid-cols-2">

          <GlassCard className="p-10">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 p-5 text-white">
                <ShieldCheck size={36} />
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  Secure Platform
                </h3>

                <p className="mt-2 text-zinc-400">
                  امنیت در تمام لایه‌های سامانه
                </p>
              </div>

            </div>

            <div className="mt-10 space-y-5">

              {[
                "JWT Authentication",
                "Role Based Access",
                "Claims Authorization",
                "Encrypted Communication",
                "Audit Logs",
                "Exception Handling",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/5 p-4"
                >
                  <ShieldCheck
                    size={18}
                    className="text-green-400"
                  />

                  <span>{item}</span>
                </div>
              ))}

            </div>

          </GlassCard>

          <div className="grid gap-6">

            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >
                  <GlassCard className="flex items-center gap-5 p-6">

                    <div className="rounded-2xl bg-violet-600/20 p-4 text-violet-400">
                      <Icon size={28} />
                    </div>

                    <div>

                      <h4 className="font-semibold">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm text-zinc-400">
                        {item.description}
                      </p>

                    </div>

                  </GlassCard>
                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}
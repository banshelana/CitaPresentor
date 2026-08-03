"use client";

import { motion } from "framer-motion";
import {
  Search,
  Scissors,
  UserCheck,
  Clock3,
  CreditCard,
  CheckCircle2,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    icon: Search,
    title: "انتخاب سالن",
    description: "جستجو بر اساس شهر، موقعیت و خدمات",
  },
  {
    icon: Scissors,
    title: "انتخاب خدمت",
    description: "مشاهده خدمات و قیمت‌ها",
  },
  {
    icon: UserCheck,
    title: "انتخاب اپراتور",
    description: "انتخاب اپراتور دلخواه",
  },
  {
    icon: Clock3,
    title: "انتخاب زمان",
    description: "نمایش زمان‌های آزاد",
  },
  {
    icon: CreditCard,
    title: "پرداخت",
    description: "پرداخت آنلاین و امن",
  },
  {
    icon: CheckCircle2,
    title: "تایید رزرو",
    description: "ارسال پیامک و ثبت نهایی",
  },
];

export default function BookingFlow() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          badge="فرآیند رزرو"
          title="رزرو در کمتر از یک دقیقه"
          description="تمام مراحل رزرو به صورت کاملاً هوشمند و بدون خطا انجام می‌شود."
        />

        <div className="relative">

          <div className="absolute right-0 top-10 hidden h-1 w-full bg-gradient-to-l from-violet-600 via-cyan-500 to-violet-600 lg:block" />

          <div className="grid gap-8 lg:grid-cols-6">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="relative h-full p-6 text-center">

                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 text-white shadow-lg">

                      <Icon size={34} />

                    </div>

                    <div className="mb-3 text-sm font-bold text-violet-400">
                      مرحله {index + 1}
                    </div>

                    <h3 className="mb-3 text-xl font-bold">
                      {step.title}
                    </h3>

                    <p className="text-sm leading-7 text-zinc-400">
                      {step.description}
                    </p>

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
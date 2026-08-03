"use client";

import { motion } from "framer-motion";
import {
  Search,
  CalendarDays,
  CreditCard,
  CheckCircle2,
} from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

const steps = [
  {
    icon: Search,
    title: "جستجوی سالن",
    desc: "بر اساس شهر، نقشه و خدمات",
  },
  {
    icon: CalendarDays,
    title: "انتخاب زمان",
    desc: "مشاهده زمان‌های آزاد",
  },
  {
    icon: CreditCard,
    title: "پرداخت آنلاین",
    desc: "پرداخت امن از طریق درگاه",
  },
  {
    icon: CheckCircle2,
    title: "رزرو نهایی",
    desc: "دریافت پیامک و تایید رزرو",
  },
];

export default function BookingFlow() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          badge="Reservation Process"
          title="فرآیند رزرو هوشمند"
          description="تمام مراحل رزرو به ساده‌ترین شکل ممکن برای مشتری طراحی شده است."
        />

        <div className="relative mt-20">

          <div className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-cyan-500 to-violet-600 hidden lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * .15,
                  }}
                  viewport={{
                    once: true,
                  }}
                >

                  <GlassCard className="relative p-8 text-center">

                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500">

                      <Icon size={34} />

                    </div>

                    <div className="mb-3 text-xl font-bold">

                      {step.title}

                    </div>

                    <p className="leading-7 text-zinc-400">

                      {step.desc}

                    </p>

                    <div className="absolute -top-4 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 font-bold">

                      {index + 1}

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
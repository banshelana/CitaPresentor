"use client";

import { motion } from "framer-motion";
import {
  Search,
  CalendarDays,
  CreditCard,
  Star,
  Bell,
  MapPin,
} from "lucide-react";

import PhoneFrame from "@/components/mockup/PhoneFrame";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

export default function MobileShowcase() {
  return (
    <section className="relative overflow-hidden py-36">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          badge="Mobile Experience"
          title="اپلیکیشن موبایل"
          description="طراحی Mobile First برای Android و iOS"
        />

        <div className="mt-24 flex flex-col items-center justify-center gap-12 lg:flex-row">

          <motion.div
            initial={{ opacity: 0, x: -120, rotate: -12 }}
            whileInView={{ opacity: 1, x: 0, rotate: -8 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <PhoneFrame>

              <div className="space-y-5 p-6">

                <div className="flex items-center justify-between">

                  <Search />

                  <Bell />

                </div>

                <GlassCard className="p-4">

                  <div className="font-bold">
                    جستجوی سالن
                  </div>

                  <div className="mt-2 text-sm text-zinc-400">
                    Beauty Plus
                  </div>

                </GlassCard>

                <GlassCard className="p-4">

                  <div className="flex justify-between">

                    <span>Luxury Beauty</span>

                    <Star className="fill-yellow-400 text-yellow-400" size={18} />

                  </div>

                </GlassCard>

                <GlassCard className="p-4">

                  <div className="flex items-center gap-3">

                    <MapPin />

                    نزدیک‌ترین سالن

                  </div>

                </GlassCard>

              </div>

            </PhoneFrame>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .9 }}
          >
            <PhoneFrame>

              <div className="space-y-5 p-6">

                <div className="text-center text-2xl font-black">

                  رزرو نوبت

                </div>

                {[
                  "09:00",
                  "09:30",
                  "10:00",
                  "10:30",
                  "11:00",
                  "11:30",
                ].map((item) => (

                  <button
                    key={item}
                    className="w-full rounded-xl border border-green-500/30 bg-green-500/10 py-4"
                  >
                    {item}
                  </button>

                ))}

                <button className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-bold">

                  ادامه رزرو

                </button>

              </div>

            </PhoneFrame>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 120, rotate: 12 }}
            whileInView={{ opacity: 1, x: 0, rotate: 8 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <PhoneFrame>

              <div className="space-y-5 p-6">

                <div className="flex items-center justify-between">

                  <CalendarDays />

                  <CreditCard />

                </div>

                <GlassCard className="p-4">

                  <div className="text-lg font-bold">

                    پرداخت موفق

                  </div>

                  <div className="mt-2 text-sm text-zinc-400">

                    شماره پیگیری
                    <br />
                    #84512875

                  </div>

                </GlassCard>

                <button className="w-full rounded-xl bg-cyan-500 py-4 font-bold">

                  مشاهده رزرو

                </button>

              </div>

            </PhoneFrame>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
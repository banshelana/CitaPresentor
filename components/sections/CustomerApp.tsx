"use client";

import { motion } from "framer-motion";
import {
  Search,
  MapPinned,
  Star,
  CalendarDays,
  Clock3,
  Heart,
  Bell,
} from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";

const salons = [
  {
    name: "Beauty Plus",
    rate: "4.9",
    service: "رنگ مو • کوتاهی • میکاپ",
    distance: "1.2 km",
  },
  {
    name: "Luxury Beauty",
    rate: "4.8",
    service: "ناخن • پوست • ابرو",
    distance: "2.4 km",
  },
];

export default function CustomerApp() {
  return (
    <section className="py-32">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        <div>

          <SectionHeader
            badge="اپلیکیشن مشتری"
            title="رزرو آسان در چند مرحله"
            description="جستجو، مشاهده سالن، انتخاب اپراتور، پرداخت و دریافت نوبت."
          />

          <div className="mt-10 space-y-6">

            {[
              "جستجوی سالن روی نقشه",
              "مشاهده خدمات و قیمت‌ها",
              "انتخاب اپراتور",
              "پرداخت آنلاین",
              "دریافت پیامک تایید",
              "مدیریت رزروها",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <div className="rounded-xl bg-violet-600/20 p-3">

                  <CalendarDays
                    className="text-violet-400"
                    size={20}
                  />

                </div>

                {item}

              </div>
            ))}

          </div>

        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >

          <div className="mx-auto w-[360px] rounded-[40px] border border-white/10 bg-zinc-900 p-5 shadow-2xl">

            <div className="mb-6 flex items-center justify-between">

              <Search />

              <span className="font-bold">
                Beauty Booking
              </span>

              <Bell />

            </div>

            <GlassCard className="p-4">

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="font-bold">
                    سالن‌های نزدیک
                  </h3>

                  <p className="text-sm text-zinc-400">
                    بر اساس موقعیت شما
                  </p>

                </div>

                <MapPinned className="text-violet-400" />

              </div>

            </GlassCard>

            <div className="mt-5 space-y-4">

              {salons.map((salon) => (

                <GlassCard
                  key={salon.name}
                  className="p-5"
                >

                  <div className="flex items-start justify-between">

                    <div>

                      <h4 className="font-bold">
                        {salon.name}
                      </h4>

                      <p className="mt-2 text-sm text-zinc-400">
                        {salon.service}
                      </p>

                    </div>

                    <Heart
                      size={18}
                      className="text-pink-500"
                    />

                  </div>

                  <div className="mt-5 flex items-center justify-between">

                    <div className="flex items-center gap-2">

                      <Star
                        className="fill-yellow-400 text-yellow-400"
                        size={16}
                      />

                      {salon.rate}

                    </div>

                    <span className="text-sm text-zinc-500">

                      {salon.distance}

                    </span>

                  </div>

                </GlassCard>

              ))}

            </div>

            <GlassCard className="mt-6 flex items-center justify-between p-5">

              <div>

                <div className="font-bold">
                  رزرو بعدی
                </div>

                <div className="mt-2 text-sm text-zinc-400">

                  امروز ساعت 18:30

                </div>

              </div>

              <Clock3 className="text-cyan-400" />

            </GlassCard>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { Clock, CalendarDays } from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";

const days = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
];

const slots = [
  { time: "09:00", status: "free" },
  { time: "09:30", status: "busy" },
  { time: "10:00", status: "free" },
  { time: "10:30", status: "busy" },
  { time: "11:00", status: "free" },
  { time: "11:30", status: "pending" },
  { time: "12:00", status: "free" },
  { time: "12:30", status: "free" },
  { time: "13:00", status: "busy" },
  { time: "13:30", status: "free" },
  { time: "14:00", status: "pending" },
  { time: "14:30", status: "free" },
];

export default function BookingCalendar() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          badge="Reservation Calendar"
          title="Smart Booking Calendar"
          description="نمایش وضعیت لحظه‌ای تمامی زمان‌های رزرو"
        />

        <GlassCard className="p-8">

          <div className="mb-10 flex items-center justify-between">

            <div className="flex items-center gap-3">

              <CalendarDays className="text-violet-400" />

              <span className="text-2xl font-bold">

                مرداد 1405

              </span>

            </div>

            <div className="flex gap-6 text-sm">

              <Legend color="bg-green-500" text="آزاد" />
              <Legend color="bg-red-500" text="رزرو شده" />
              <Legend color="bg-yellow-500" text="در انتظار" />

            </div>

          </div>

          <div className="grid grid-cols-7 gap-3">

            {days.map((day) => (

              <div
                key={day}
                className="rounded-xl bg-white/5 py-4 text-center font-bold"
              >
                {day}
              </div>

            ))}

          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3 xl:grid-cols-4">

            {slots.map((slot, index) => (

              <motion.div
                key={slot.time}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.04,
                }}
                viewport={{
                  once: true,
                }}
              >

                <button
                  className={`w-full rounded-2xl border p-5 transition hover:scale-105
                    ${
                      slot.status === "free"
                        ? "border-green-500/30 bg-green-500/10"
                        : slot.status === "busy"
                        ? "border-red-500/30 bg-red-500/10"
                        : "border-yellow-500/30 bg-yellow-500/10"
                    }`}
                >

                  <Clock
                    size={18}
                    className="mx-auto mb-3"
                  />

                  <div className="text-xl font-bold">

                    {slot.time}

                  </div>

                </button>

              </motion.div>

            ))}

          </div>

        </GlassCard>

      </div>

    </section>
  );
}

function Legend({
  color,
  text,
}: {
  color: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2">

      <div className={`h-3 w-3 rounded-full ${color}`} />

      <span>{text}</span>

    </div>
  );
}
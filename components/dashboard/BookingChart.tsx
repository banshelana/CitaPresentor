"use client";

import GlassCard from "@/components/ui/GlassCard";

const days = [45, 62, 38, 70, 92, 60, 88];

export default function BookingChart() {
  return (
    <GlassCard className="p-8">

      <h3 className="mb-8 text-xl font-bold">
        رزروهای هفته
      </h3>

      <div className="space-y-5">

        {days.map((item, index) => (

          <div key={index}>

            <div className="mb-2 flex justify-between">

              <span>روز {index + 1}</span>

              <span>{item}%</span>

            </div>

            <div className="h-3 rounded-full bg-white/10">

              <div
                style={{ width: `${item}%` }}
                className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600"
              />

            </div>

          </div>

        ))}

      </div>

    </GlassCard>
  );
}
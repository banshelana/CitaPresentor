"use client";

import GlassCard from "@/components/ui/GlassCard";

export default function CalendarWidget() {
  return (
    <GlassCard className="p-8">

      <h3 className="mb-8 text-xl font-bold">

        تقویم

      </h3>

      <div className="grid grid-cols-7 gap-2">

        {Array.from({ length: 35 }).map((_, index) => (

          <button
            key={index}
            className={`
            aspect-square rounded-xl
            ${
              index === 18
                ? "bg-violet-600"
                : "bg-white/5 hover:bg-white/10"
            }
            `}
          >
            {index + 1}
          </button>

        ))}

      </div>

    </GlassCard>
  );
}
"use client";

import GlassCard from "@/components/ui/GlassCard";

const hours = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
];

export default function TimeSelector({
  next,
}: {
  next: () => void;
}) {
  return (
    <GlassCard className="p-8">

      <div className="grid grid-cols-4 gap-4">

        {hours.map((hour) => (

          <button
            key={hour}
            onClick={next}
            className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-violet-600"
          >
            {hour}
          </button>

        ))}

      </div>

    </GlassCard>
  );
}
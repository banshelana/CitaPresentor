"use client";

import {
  Calendar,
  Clock3,
  MapPin,
  Star,
} from "lucide-react";

const times = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
];

export default function DashboardPreview() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 pb-4">

        <div>
          <h3 className="font-semibold text-white">
            Beauty Salon
          </h3>

          <div className="mt-1 flex items-center gap-2 text-xs text-zinc-400">
            <MapPin size={14} />
            تهران، شهر زیبا
          </div>
        </div>

        <div className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-3 py-1 text-sm text-yellow-400">
          <Star size={14} fill="currentColor" />
          4.9
        </div>

      </div>

      {/* Services */}

      <div className="mt-6">

        <p className="mb-3 text-sm text-zinc-400">
          خدمات
        </p>

        <div className="flex flex-wrap gap-2">

          <Tag active>کراتین</Tag>

          <Tag>رنگ مو</Tag>

          <Tag>کوتاهی</Tag>

          <Tag>میکاپ</Tag>

        </div>

      </div>

      {/* Date */}

      <div className="mt-6 flex items-center gap-2 text-zinc-300">

        <Calendar size={18} />

        امروز

      </div>

      {/* Time */}

      <div className="mt-4 grid grid-cols-3 gap-3">

        {times.map((time, index) => (
          <button
            key={time}
            className={`rounded-xl border py-3 text-sm transition
              ${
                index === 2
                  ? "border-violet-500 bg-violet-600 text-white"
                  : "border-white/10 bg-white/5 hover:border-violet-400"
              }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Clock3 size={14} />
              {time}
            </div>
          </button>
        ))}

      </div>

      {/* CTA */}

      <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-semibold text-white transition hover:scale-[1.02]">
        رزرو نوبت
      </button>

    </div>
  );
}

function Tag({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      className={`rounded-full px-4 py-2 text-sm transition ${
        active
          ? "bg-violet-600 text-white"
          : "bg-white/5 text-zinc-300 hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  );
}
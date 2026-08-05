"use client";

import GlassCard from "@/components/ui/GlassCard";

const services = [
  ["کوتاهی مو", "450,000"],
  ["رنگ مو", "1,200,000"],
  ["پاکسازی پوست", "850,000"],
];

export default function ServiceCard({
  next,
}: {
  next: () => void;
}) {
  return (
    <div className="grid gap-6">

      {services.map(([title, price]) => (

        <GlassCard
          key={title}
          className="flex items-center justify-between p-6"
        >

          <div>

            <h3 className="text-xl font-bold">
              {title}
            </h3>

            <p className="text-zinc-400">
              {price} تومان
            </p>

          </div>

          <button
            onClick={next}
            className="rounded-xl bg-violet-600 px-6 py-3"
          >
            انتخاب
          </button>

        </GlassCard>

      ))}

    </div>
  );
}
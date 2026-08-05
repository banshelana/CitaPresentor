"use client";

import GlassCard from "@/components/ui/GlassCard";

const logs = [
  "رزرو جدید ثبت شد",
  "پرداخت انجام شد",
  "اپراتور اضافه شد",
  "سالن جدید ثبت شد",
  "نظر جدید ارسال شد",
];

export default function ActivityTimeline() {
  return (
    <GlassCard className="p-8">

      <h3 className="mb-8 text-xl font-bold">

        فعالیت‌های اخیر

      </h3>

      <div className="space-y-6">

        {logs.map((item) => (

          <div
            key={item}
            className="flex gap-4"
          >

            <div className="mt-2 h-3 w-3 rounded-full bg-violet-500" />

            <div>{item}</div>

          </div>

        ))}

      </div>

    </GlassCard>
  );
}
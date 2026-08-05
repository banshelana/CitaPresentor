"use client";

import { Bell } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const notifications = [
  "۳ رزرو جدید ثبت شد",
  "یک پرداخت ناموفق",
  "نسخه جدید سیستم منتشر شد",
  "۵ نظر جدید ثبت شد",
];

export default function Notifications() {
  return (
    <GlassCard className="p-8">

      <div className="mb-8 flex items-center gap-3">

        <Bell className="text-violet-400" />

        <h3 className="text-xl font-bold">

          اعلان‌ها

        </h3>

      </div>

      <div className="space-y-4">

        {notifications.map((item) => (

          <div
            key={item}
            className="rounded-xl bg-white/5 p-4"
          >
            {item}
          </div>

        ))}

      </div>

    </GlassCard>
  );
}
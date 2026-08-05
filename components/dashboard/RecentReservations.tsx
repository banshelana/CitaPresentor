"use client";

import GlassCard from "@/components/ui/GlassCard";

const items = [
  ["نگار احمدی", "Hair Color", "09:30"],
  ["مریم رضایی", "Makeup", "10:30"],
  ["الهام کریمی", "Facial", "11:00"],
  ["زهرا محمدی", "Hair Cut", "12:00"],
  ["سمیه احمدی", "Nail", "13:00"],
];

export default function RecentReservations() {
  return (
    <GlassCard className="p-8">

      <h3 className="mb-8 text-xl font-bold">

        آخرین رزروها

      </h3>

      <div className="space-y-4">

        {items.map((item) => (

          <div
            key={item[0]}
            className="flex items-center justify-between rounded-xl bg-white/5 p-4"
          >

            <div>

              <div className="font-semibold">

                {item[0]}

              </div>

              <div className="text-sm text-zinc-500">

                {item[1]}

              </div>

            </div>

            <span className="text-cyan-400">

              {item[2]}

            </span>

          </div>

        ))}

      </div>

    </GlassCard>
  );
}
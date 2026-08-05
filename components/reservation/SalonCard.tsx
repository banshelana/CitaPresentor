"use client";

import GlassCard from "@/components/ui/GlassCard";
import { Star, MapPin } from "lucide-react";

const salons = [
  {
    name: "Luxury Beauty",
    rate: 4.9,
    distance: "1.2 km",
  },
  {
    name: "Beauty Plus",
    rate: 4.8,
    distance: "2 km",
  },
];

export default function SalonCard({
  next,
}: {
  next: () => void;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">

      {salons.map((salon) => (

        <GlassCard
          key={salon.name}
          className="p-8"
        >
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20" />

          <h3 className="mt-6 text-2xl font-bold">
            {salon.name}
          </h3>

          <div className="mt-3 flex gap-5 text-zinc-400">

            <span className="flex items-center gap-2">
              <Star size={16} />
              {salon.rate}
            </span>

            <span className="flex items-center gap-2">
              <MapPin size={16} />
              {salon.distance}
            </span>

          </div>

          <button
            onClick={next}
            className="mt-8 w-full rounded-xl bg-violet-600 py-3"
          >
            انتخاب سالن
          </button>

        </GlassCard>

      ))}

    </div>
  );
}
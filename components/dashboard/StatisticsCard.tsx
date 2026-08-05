"use client";

import { LucideIcon } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

interface Props {
  title: string;
  value: string;
  icon: LucideIcon;
}

export default function StatisticsCard({
  title,
  value,
  icon: Icon,
}: Props) {
  return (
    <GlassCard className="p-6">

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600/20">

        <Icon className="text-violet-400" />

      </div>

      <div className="text-4xl font-black">

        {value}

      </div>

      <div className="mt-2 text-zinc-400">

        {title}

      </div>

    </GlassCard>
  );
}
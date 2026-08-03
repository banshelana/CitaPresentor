import GlassCard from "@/components/ui/GlassCard";
import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  growth: string;
  icon: LucideIcon;
}

export default function KPI({
  title,
  value,
  growth,
  icon: Icon,
}: Props) {
  return (
    <GlassCard className="group p-6">

      <div className="flex items-center justify-between">

        <div className="rounded-xl bg-violet-600/20 p-3">

          <Icon className="text-violet-400" />

        </div>

        <span className="text-green-400">

          {growth}

        </span>

      </div>

      <div className="mt-6 text-4xl font-black">

        {value}

      </div>

      <div className="mt-2 text-zinc-400">

        {title}

      </div>

    </GlassCard>
  );
}
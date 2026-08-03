import { ReactNode } from "react";
import GlassCard from "@/components/ui/GlassCard";
import { Circle } from "lucide-react";

interface Props {
  children: ReactNode;
}

export default function BrowserFrame({ children }: Props) {
  return (
    <GlassCard className="overflow-hidden p-0">

      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-5 py-4">

        <Circle size={10} className="fill-red-500 text-red-500" />
        <Circle size={10} className="fill-yellow-500 text-yellow-500" />
        <Circle size={10} className="fill-green-500 text-green-500" />

        <div className="ml-4 flex-1 rounded-lg bg-black/30 px-4 py-2 text-sm text-zinc-500">
          https://beauty-booking.app/dashboard
        </div>

      </div>

      <div className="p-8">

        {children}

      </div>

    </GlassCard>
  );
}
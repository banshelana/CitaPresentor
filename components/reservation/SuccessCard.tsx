"use client";

import { CheckCircle2 } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function SuccessCard() {
  return (
    <GlassCard className="mx-auto max-w-xl p-14 text-center">

      <CheckCircle2
        size={90}
        className="mx-auto text-green-400"
      />

      <h2 className="mt-8 text-4xl font-black">

        رزرو با موفقیت انجام شد

      </h2>

      <p className="mt-5 text-zinc-400">

        پیامک تأیید برای شما ارسال شد.

      </p>

      <button className="mt-10 rounded-xl bg-violet-600 px-8 py-4">

        مشاهده رزروها

      </button>

    </GlassCard>
  );
}
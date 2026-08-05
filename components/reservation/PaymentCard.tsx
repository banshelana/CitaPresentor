"use client";

import GlassCard from "@/components/ui/GlassCard";

export default function PaymentCard({
  next,
}: {
  next: () => void;
}) {
  return (
    <GlassCard className="mx-auto max-w-xl p-10">

      <h2 className="text-3xl font-bold">

        خلاصه سفارش

      </h2>

      <div className="mt-8 space-y-4">

        <Row title="سالن" value="Luxury Beauty" />
        <Row title="سرویس" value="رنگ مو" />
        <Row title="اپراتور" value="نگار احمدی" />
        <Row title="زمان" value="شنبه 10:30" />
        <Row title="مبلغ" value="1,200,000 تومان" />

      </div>

      <button
        onClick={next}
        className="mt-10 w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-bold"
      >
        پرداخت
      </button>

    </GlassCard>
  );
}

function Row({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex justify-between">

      <span className="text-zinc-400">
        {title}
      </span>

      <span>
        {value}
      </span>

    </div>
  );
}
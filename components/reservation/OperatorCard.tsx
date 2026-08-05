"use client";

import GlassCard from "@/components/ui/GlassCard";

const operators = [
  "نگار احمدی",
  "مریم کریمی",
  "الهام رضایی",
];

export default function OperatorCard({
  next,
}: {
  next: () => void;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-3">

      {operators.map((item) => (

        <GlassCard
          key={item}
          className="p-8 text-center"
        >

          <div className="mx-auto h-24 w-24 rounded-full bg-violet-600/30" />

          <h3 className="mt-5 text-xl font-bold">

            {item}

          </h3>

          <button
            onClick={next}
            className="mt-6 rounded-xl bg-violet-600 px-5 py-3"
          >
            انتخاب
          </button>

        </GlassCard>

      ))}

    </div>
  );
}
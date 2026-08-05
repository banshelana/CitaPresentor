"use client";

import { Check } from "lucide-react";

const steps = [
  "سالن",
  "سرویس",
  "اپراتور",
  "زمان",
  "پرداخت",
  "پایان",
];

export default function Stepper({
  step,
}: {
  step: number;
}) {
  return (
    <div className="flex items-center justify-between gap-4">

      {steps.map((title, index) => (

        <div
          key={title}
          className="flex flex-1 items-center"
        >

          <div
            className={`
            flex h-12 w-12 items-center justify-center rounded-full border
            ${
              index < step
                ? "bg-green-500 border-green-500"
                : index === step
                ? "bg-violet-600 border-violet-600"
                : "bg-white/5 border-white/10"
            }
            `}
          >
            {index < step ? <Check size={18} /> : index + 1}
          </div>

          {index !== steps.length - 1 && (
            <div
              className={`h-[2px] flex-1 ${
                index < step ? "bg-green-500" : "bg-white/10"
              }`}
            />
          )}

        </div>

      ))}

    </div>
  );
}
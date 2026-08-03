import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PhoneFrame({ children }: Props) {
  return (
    <div className="mx-auto w-[360px] rounded-[42px] border border-white/10 bg-black p-4 shadow-[0_20px_80px_rgba(0,0,0,.45)]">

      <div className="mb-4 flex justify-center">

        <div className="h-2 w-24 rounded-full bg-zinc-700" />

      </div>

      <div className="overflow-hidden rounded-[30px] bg-zinc-900">

        {children}

      </div>

    </div>
  );
}
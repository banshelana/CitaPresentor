export default function Logo() {
  return (
    <div className="flex items-center gap-3">

      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-gradient-to-br
          from-violet-600
          to-cyan-500
          text-lg
          font-bold
          text-white
          shadow-lg
        "
      >
        B
      </div>

      <div className="hidden sm:block">
        <p className="font-bold text-white">
          Beauty Booking
        </p>

        <p className="text-xs text-zinc-400">
          Smart Reservation Platform
        </p>
      </div>

    </div>
  );
}
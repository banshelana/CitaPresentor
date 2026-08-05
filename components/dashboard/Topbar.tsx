"use client";

import {
  Bell,
  Search,
  UserCircle2,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 px-8">

      <div className="flex items-center gap-4 rounded-2xl bg-white/5 px-5 py-3">

        <Search size={18} />

        <input
          placeholder="جستجو..."
          className="bg-transparent outline-none"
        />

      </div>

      <div className="flex items-center gap-5">

        <Bell className="text-violet-400" />

        <UserCircle2 size={38} />

      </div>

    </header>
  );
}
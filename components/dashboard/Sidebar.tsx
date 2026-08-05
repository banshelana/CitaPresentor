"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  Building2,
  Wallet,
  BarChart3,
  Settings,
  Bell,
} from "lucide-react";

const items = [
  { icon: LayoutDashboard, title: "داشبورد", active: true },
  { icon: CalendarDays, title: "رزروها" },
  { icon: Building2, title: "سالن‌ها" },
  { icon: Users, title: "مشتریان" },
  { icon: Wallet, title: "پرداخت‌ها" },
  { icon: BarChart3, title: "گزارشات" },
  { icon: Bell, title: "اعلان‌ها" },
  { icon: Settings, title: "تنظیمات" },
];

export default function Sidebar() {
  return (
    <aside className="flex h-full w-72 flex-col border-l border-white/10 bg-white/5 backdrop-blur-xl">

      <div className="border-b border-white/10 p-8">

        <h2 className="text-2xl font-black">

          Beauty Booking

        </h2>

        <p className="mt-2 text-sm text-zinc-400">

          Enterprise Dashboard

        </p>

      </div>

      <nav className="flex-1 space-y-2 p-5">

        {items.map((item) => {

          const Icon = item.icon;

          return (

            <motion.button
              key={item.title}
              whileHover={{ x: -6 }}
              className={`flex w-full items-center gap-4 rounded-2xl px-5 py-4 transition
              ${
                item.active
                  ? "bg-gradient-to-r from-violet-600 to-cyan-500"
                  : "hover:bg-white/5"
              }`}
            >
              <Icon size={20} />

              <span>{item.title}</span>

            </motion.button>

          );
        })}

      </nav>

    </aside>
  );
}
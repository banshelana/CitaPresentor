"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Users,
  CalendarDays,
  UserCog,
  CreditCard,
  MessageSquare,
  MapPinned,
  ShieldCheck,
  BarChart3,
  FileSpreadsheet,
  Globe,
  Blocks,
} from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";

const modules = [
  {
    icon: Building2,
    title: "مدیریت سالن",
    desc: "پروفایل، تصاویر، خدمات، ساعات کاری",
  },
  {
    icon: UserCog,
    title: "مدیریت اپراتورها",
    desc: "برنامه کاری و سرویس‌های اختصاصی",
  },
  {
    icon: Users,
    title: "مدیریت مشتریان",
    desc: "سوابق، امتیازات و علاقه‌مندی‌ها",
  },
  {
    icon: CalendarDays,
    title: "رزرو هوشمند",
    desc: "مدیریت زمان‌های آزاد و رزرو شده",
  },
  {
    icon: MapPinned,
    title: "نقشه تعاملی",
    desc: "نمایش سالن‌ها و موقعیت کاربر",
  },
  {
    icon: CreditCard,
    title: "پرداخت آنلاین",
    desc: "اتصال به درگاه پرداخت",
  },
  {
    icon: MessageSquare,
    title: "پیامک",
    desc: "OTP، اطلاع‌رسانی و تبلیغات",
  },
  {
    icon: ShieldCheck,
    title: "امنیت",
    desc: "JWT، Role و Claim Based Access",
  },
  {
    icon: BarChart3,
    title: "گزارش‌ها",
    desc: "داشبورد و گزارش‌های مدیریتی",
  },
  {
    icon: FileSpreadsheet,
    title: "خروجی اطلاعات",
    desc: "PDF و Excel",
  },
  {
    icon: Globe,
    title: "SEO",
    desc: "Next.js و بهینه‌سازی موتور جستجو",
  },
  {
    icon: Blocks,
    title: "API",
    desc: "ارتباط با سامانه‌های جانبی",
  },
];

export default function SystemModules() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          badge="ماژول‌های سامانه"
          title="تمام امکانات در یک پلتفرم"
          description="تمامی بخش‌های موردنیاز برای مدیریت سالن‌های زیبایی در یک سامانه یکپارچه پیاده‌سازی شده‌اند."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {modules.map((module, index) => {
            const Icon = module.icon;

            return (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                }}
              >
                <GlassCard className="group h-full p-6">

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 text-white transition duration-300 group-hover:scale-110 group-hover:rotate-6">

                    <Icon size={28} />

                  </div>

                  <h3 className="mb-3 text-xl font-bold">
                    {module.title}
                  </h3>

                  <p className="text-sm leading-7 text-zinc-400">
                    {module.desc}
                  </p>

                </GlassCard>
              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
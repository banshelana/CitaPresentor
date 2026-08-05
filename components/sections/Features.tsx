"use client";

import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import {
    Smartphone,
    ShieldCheck,
    MapPinned,
    CreditCard,
    BarChart3,
    Boxes,
} from "lucide-react";
import Spotlight from "../effects/Spotlight";

const features = [
    {
        icon: Smartphone,
        title: "طراحی Mobile First",
        description: "رابط کاربری اختصاصی برای موبایل، تبلت و دسکتاپ",
    },
    {
        icon: Boxes,
        title: "معماری API محور",
        description: "قابلیت اتصال و توسعه با سامانه‌های جانبی",
    },
    {
        icon: ShieldCheck,
        title: "امنیت پیشرفته",
        description: "احراز هویت JWT و مدیریت نقش‌های کاربری",
    },
    {
        icon: MapPinned,
        title: "نقشه هوشمند",
        description: "نمایش سالن‌ها و موقعیت کاربر روی نقشه",
    },
    {
        icon: CreditCard,
        title: "پرداخت آنلاین",
        description: "اتصال امن به درگاه پرداخت و مدیریت تراکنش‌ها",
    },
    {
        icon: BarChart3,
        title: "گزارش‌گیری",
        description: "خروجی PDF، Excel و گزارش‌های مدیریتی",
    },
];

export default function Features() {
    return (
        <section
            id="features"
            className="py-32"
        >
            <div className="mx-auto max-w-7xl px-6">

                <Spotlight>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeader
                            badge="امکانات کلیدی"
                            title="چرا این سامانه؟"
                            description="طراحی مدرن، معماری توسعه‌پذیر و امکانات حرفه‌ای برای مدیریت کامل سالن‌های زیبایی."
                        />
                    </motion.div>
                </Spotlight>
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <Spotlight>
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.08,
                                    }}
                                >
                                    <GlassCard className="group h-full p-8">

                                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 text-white transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                                            <Icon size={30} />
                                        </div>

                                        <h3 className="mb-4 text-2xl font-bold">
                                            {feature.title}
                                        </h3>

                                        <p className="leading-8 text-zinc-400">
                                            {feature.description}
                                        </p>

                                    </GlassCard>
                                </motion.div>
                            </Spotlight>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}
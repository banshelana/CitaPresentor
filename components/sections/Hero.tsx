"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, ShieldCheck } from "lucide-react";
import DashboardPreview from "@/components/dashboard/DashboardPreview";
import AuroraBackground from "@/components/effects/AuroraBackground";
import MouseGlow from "@/components/effects/MouseGlow";
import FloatingOrbs from "../effects/FloatingOrbs";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-zinc-950 pt-36 pb-24">

            <AuroraBackground />
            <FloatingOrbs />
             <MouseGlow />


            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

                {/* Left */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                >
                    <span className="rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">

                        نسخه Enterprise

                    </span>

                    <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight lg:text-7xl">

                        سامانه جامع

                        <br />

                        مدیریت سالن‌های زیبایی

                    </h1>

                    <p className="mt-8 max-w-xl text-lg leading-9 text-zinc-300">

                        مدیریت سالن، رزرو آنلاین، مدیریت اپراتورها، پرداخت،
                        گزارشات مدیریتی و ارتباط هوشمند با مشتریان
                        در یک پلتفرم یکپارچه.

                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">

                        <button className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold transition hover:scale-105">

                            مشاهده دمو

                        </button>

                        <button className="rounded-xl border border-zinc-700 px-8 py-4 hover:border-violet-500">

                            امکانات سامانه

                        </button>

                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-6">

                        <Feature
                            icon={<Calendar size={20} />}
                            title="رزرو هوشمند"
                        />

                        <Feature
                            icon={<MapPin size={20} />}
                            title="نقشه تعاملی"
                        />

                        <Feature
                            icon={<ShieldCheck size={20} />}
                            title="امنیت بالا"
                        />

                        <Feature
                            icon={<ArrowLeft size={20} />}
                            title="API محور"
                        />

                    </div>

                </motion.div>

                {/* Right */}

                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                >
                    <DashboardPreview />
                </motion.div>

            </div>

        </section>
    );
}

function Feature({
    icon,
    title,
}: {
    icon: React.ReactNode;
    title: string;
}) {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-4">

            <div className="text-violet-400">

                {icon}

            </div>

            <span>{title}</span>

        </div>
    );
}
"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Server,
  Database,
  CreditCard,
  MapPinned,
  MessageSquare,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";

const nodes = [
  {
    title: "Client",
    subtitle: "Mobile / Desktop",
    icon: Smartphone,
  },
  {
    title: "Next.js",
    subtitle: "Frontend",
    icon: Globe,
  },
  {
    title: "REST API",
    subtitle: "ASP.NET Core",
    icon: Server,
  },
  {
    title: "SQL",
    subtitle: "Database",
    icon: Database,
  },
];

const services = [
  {
    title: "Payment Gateway",
    icon: CreditCard,
  },
  {
    title: "SMS Service",
    icon: MessageSquare,
  },
  {
    title: "Maps",
    icon: MapPinned,
  },
];

export default function Architecture() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          badge="معماری سیستم"
          title="زیرساخت مدرن و توسعه پذیر"
          description="تمامی بخش های سامانه بر پایه معماری API محور و ماژولار طراحی شده اند."
        />

        <div className="grid gap-8 lg:grid-cols-4">

          {nodes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * .15 }}
              >

                <GlassCard className="p-8 text-center">

                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500">

                    <Icon size={30} />

                  </div>

                  <h3 className="text-2xl font-bold">

                    {item.title}

                  </h3>

                  <p className="mt-2 text-zinc-400">

                    {item.subtitle}

                  </p>

                </GlassCard>

              </motion.div>
            );
          })}

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {services.map((item) => {
            const Icon = item.icon;

            return (
              <GlassCard
                key={item.title}
                className="flex items-center gap-5 p-6"
              >

                <div className="rounded-xl bg-violet-600/20 p-4">

                  <Icon />

                </div>

                <h4 className="font-semibold">

                  {item.title}

                </h4>

              </GlassCard>
            );
          })}

        </div>

      </div>

    </section>
  );
}
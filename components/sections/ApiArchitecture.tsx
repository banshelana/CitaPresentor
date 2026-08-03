"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Server,
  Database,
  CreditCard,
  MessageSquare,
  MapPinned,
} from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";

const clients = [
  {
    title: "Mobile App",
    icon: Smartphone,
  },
  {
    title: "Web App",
    icon: Globe,
  },
];

const services = [
  {
    title: "Payment",
    icon: CreditCard,
  },
  {
    title: "SMS",
    icon: MessageSquare,
  },
  {
    title: "Maps",
    icon: MapPinned,
  },
];

export default function ApiArchitecture() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          badge="System Architecture"
          title="API Driven Platform"
          description="تمام ارتباطات سیستم از طریق سرویس‌های API انجام می‌شود."
        />

        <div className="grid gap-10 lg:grid-cols-3">

          <div className="space-y-6">

            {clients.map((item) => {

              const Icon = item.icon;

              return (

                <GlassCard
                  key={item.title}
                  className="flex items-center gap-5 p-6"
                >

                  <div className="rounded-2xl bg-cyan-500/20 p-4">

                    <Icon className="text-cyan-400"/>

                  </div>

                  <span className="font-semibold">

                    {item.title}

                  </span>

                </GlassCard>

              );

            })}

          </div>

          <div className="flex items-center justify-center">

            <motion.div
              animate={{
                scale:[1,.96,1],
              }}
              transition={{
                repeat:Infinity,
                duration:3,
              }}
            >

              <GlassCard className="p-10">

                <div className="flex flex-col items-center">

                  <div className="rounded-3xl bg-gradient-to-br from-violet-600 to-cyan-500 p-6">

                    <Server size={48}/>

                  </div>

                  <h3 className="mt-6 text-3xl font-bold">

                    REST API

                  </h3>

                  <p className="mt-2 text-zinc-400">

                    ASP.NET Core

                  </p>

                </div>

              </GlassCard>

            </motion.div>

          </div>

          <div className="space-y-6">

            <GlassCard className="flex items-center gap-5 p-6">

              <div className="rounded-2xl bg-violet-500/20 p-4">

                <Database className="text-violet-400"/>

              </div>

              PostgreSQL

            </GlassCard>

            {services.map((item)=>{

              const Icon=item.icon;

              return(

                <GlassCard
                  key={item.title}
                  className="flex items-center gap-5 p-6"
                >

                  <div className="rounded-2xl bg-green-500/20 p-4">

                    <Icon className="text-green-400"/>

                  </div>

                  {item.title}

                </GlassCard>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}
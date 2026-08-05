"use client";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import StatisticsCard from "./StatisticsCard";
import RevenueChart from "./RevenueChart";
import BookingChart from "./BookingChart";
import RecentReservations from "./RecentReservations";
import CalendarWidget from "./CalendarWidget";
import ActivityTimeline from "./ActivityTimeline";
import Notifications from "./Notifications";

import {
  Building2,
  Users,
  Wallet,
  CalendarDays,
} from "lucide-react";

export default function AdminDashboardPreview() {
  return (
    <div className="overflow-hidden rounded-[36px] border border-white/10 bg-zinc-950 shadow-2xl">

      <div className="grid h-[900px] grid-cols-[280px_1fr]">

        <Sidebar />

        <div className="flex flex-col overflow-auto">

          <Topbar />

          <div className="space-y-8 p-8">

            <div className="grid gap-6 lg:grid-cols-4">

              <StatisticsCard
                title="سالن‌ها"
                value="248"
                icon={Building2}
              />

              <StatisticsCard
                title="کاربران"
                value="18,540"
                icon={Users}
              />

              <StatisticsCard
                title="رزروها"
                value="12,480"
                icon={CalendarDays}
              />

              <StatisticsCard
                title="درآمد"
                value="286M"
                icon={Wallet}
              />

            </div>

            <div className="grid gap-8 xl:grid-cols-3">

              <div className="xl:col-span-2">

                <RevenueChart />

              </div>

              <BookingChart />

            </div>

            <div className="grid gap-8 xl:grid-cols-3">

              <div className="xl:col-span-2">

                <RecentReservations />

              </div>

              <Notifications />

            </div>

            <div className="grid gap-8 xl:grid-cols-3">

              <CalendarWidget />

              <div className="xl:col-span-2">

                <ActivityTimeline />

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
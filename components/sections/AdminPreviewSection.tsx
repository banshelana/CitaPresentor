"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import AdminDashboardPreview from "@/components/dashboard/AdminDashboardPreview";

export default function AdminPreviewSection() {
  return (
    <section className="py-36">

      <div className="mx-auto max-w-[1700px] px-8">

        <SectionHeader
          badge="Enterprise Dashboard"
          title="پنل مدیریت سامانه"
          description="نمایی واقعی از داشبورد مدیریت سیستم"
        />

        <div className="mt-20">

          <AdminDashboardPreview />

        </div>

      </div>

    </section>
  );
}
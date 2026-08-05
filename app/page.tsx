import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import Features from "@/components/sections/Features";
import Footer from "@/components/layout/Footer";
import Stats from "@/components/sections/Stats";
import Architecture from "@/components/sections/Architecture";
import UserRoles from "@/components/sections/UserRoles";
import BookingFlow from "@/components/sections/BookingFlow";
import SystemModules from "@/components/sections/SystemModules";
import Security from "@/components/sections/Security";
import AdminDashboard from "@/components/sections/AdminDashboard";
import OwnerDashboard from "@/components/sections/OwnerDashboard";
import CustomerApp from "@/components/sections/CustomerApp";
import Analytics from "@/components/sections/Analytics";
import ApiArchitecture from "@/components/sections/ApiArchitecture";
import TechStack from "@/components/sections/TechStack";
import InteractiveMap from "@/components/sections/InteractiveMap";
import BookingCalendar from "@/components/sections/BookingCalendar";
import MobileShowcase from "@/components/sections/MobileShowcase";
import AdminPreviewSection from "@/components/sections/AdminPreviewSection";
import ReservationDemo from "@/components/reservation/ReservationDemo";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <Stats />

        <Introduction />

        <Features />

        <Architecture />

        <UserRoles />

        <BookingFlow />

        <SystemModules />

        <Security />

        <AdminDashboard />

        <OwnerDashboard />

        <CustomerApp />

        <Analytics />

        <AdminPreviewSection />

        <ApiArchitecture />

        <TechStack />

        <InteractiveMap />

        <BookingCalendar />

        <ReservationDemo />

        <MobileShowcase />

      </main>

      <Footer />
    </>
  );
}
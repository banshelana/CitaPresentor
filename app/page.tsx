import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import Features from "@/components/sections/Features";
import Footer from "@/components/layout/Footer";
import Stats from "@/components/sections/Stats";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <Stats />

        <Introduction />

        <Features />

      </main>

      <Footer />
    </>
  );
}
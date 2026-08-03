"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import Logo from "@/components/common/Logo";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">

          <button
            className="
              hidden
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              to-cyan-500
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              hover:scale-105
              md:block
            "
          >
            مشاهده دمو
          </button>

          <button className="rounded-lg p-2 text-white md:hidden">
            <Menu />
          </button>

        </div>

      </div>
    </header>
  );
}
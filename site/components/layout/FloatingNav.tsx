"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/lib/site-config";

const FLOATING_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/insurance", label: "Insurance" },
  { href: "/wellness-insights", label: "Wellness" },
  { href: "/contact", label: "Contact" },
];

const SCROLL_THRESHOLD_PX = 280;

export function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD_PX);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    setMounted(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed right-3 top-1/2 z-40 -translate-y-1/2 transition-all duration-300 ease-out md:right-4 ${
        visible
          ? "pointer-events-auto translate-x-0 opacity-100"
          : "pointer-events-none translate-x-full opacity-0"
      }`}
      aria-label="Quick navigation"
    >
      <nav
        className={`flex flex-col gap-0.5 rounded-xl border border-[#e1d9f3]/60 bg-white/92 py-2 pl-3 pr-2 shadow-lg shadow-[#5b4d9e]/8 backdrop-blur-md ${
          visible ? "ring-1 ring-[#ebe8f0]/80" : ""
        }`}
      >
        {FLOATING_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="whitespace-nowrap rounded-md px-2 py-1.5 text-xs font-medium text-[#4b5563] transition-colors hover:bg-[#f5f3f9] hover:text-[#5b4d9e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#5b4d9e] md:text-sm"
          >
            {label}
          </Link>
        ))}
        <div className="my-1 border-t border-[#ebe8f0]/60" />
        <a
          href={SITE_CONFIG.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md px-2 py-1.5 text-xs font-semibold text-[#5b4d9e] transition-colors hover:bg-[#f5f3f9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#5b4d9e] md:text-sm"
        >
          Book
        </a>
      </nav>
    </div>
  );
}

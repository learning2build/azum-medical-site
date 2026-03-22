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

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const s = window.scrollY > SCROLL_THRESHOLD_PX;
      setScrolled(s);
      if (!s) setPanelOpen(false);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    setMounted(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!panelOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPanelOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [panelOpen]);

  if (!mounted) return null;

  const showToggle = scrolled;

  return (
    <>
      {showToggle && panelOpen && (
        <div
          id="floating-nav-panel"
          role="dialog"
          aria-modal="false"
          aria-label="Quick navigation"
          className="fixed right-[calc(0.75rem+2.75rem+0.5rem)] top-1/2 z-[39] w-[min(calc(100vw-5.5rem),14rem)] -translate-y-1/2 transition-all duration-300 ease-out md:right-[calc(1rem+2.75rem+0.5rem)] md:w-auto"
        >
          <nav className="flex flex-col gap-0.5 rounded-xl border border-[#e1d9f3]/60 bg-white/92 py-2 pl-3 pr-2 shadow-lg shadow-[#5b4d9e]/8 ring-1 ring-[#ebe8f0]/80 backdrop-blur-md">
            <div className="mb-1 flex items-center justify-end border-b border-[#ebe8f0]/60 pb-1.5">
              <button
                type="button"
                onClick={() => setPanelOpen(false)}
                className="rounded-md p-1.5 text-[#6b7280] transition-colors hover:bg-[#f5f3f9] hover:text-[#1f2937] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#5b4d9e]"
                aria-label="Close quick navigation"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            </div>
            {FLOATING_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setPanelOpen(false)}
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
      )}

      {showToggle && (
        <button
          type="button"
          onClick={() => setPanelOpen((o) => !o)}
          aria-expanded={panelOpen}
          aria-controls="floating-nav-panel"
          aria-label={
            panelOpen ? "Close quick navigation" : "Open quick navigation"
          }
          className="fixed right-3 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#e1d9f3]/60 bg-white/92 text-[#5b4d9e] shadow-lg shadow-[#5b4d9e]/10 backdrop-blur-md transition-all duration-300 ease-out hover:bg-[#faf9ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4d9e] md:right-4"
        >
          {panelOpen ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      )}
    </>
  );
}

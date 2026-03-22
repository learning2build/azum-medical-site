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

  if (!scrolled) return null;

  return (
    <div className="pointer-events-none fixed right-2 top-1/2 z-40 -translate-y-1/2 md:right-3">
      {/* Shell stays on the same fixed anchor; grows left from the toggle edge */}
      <div
        className={`pointer-events-auto flex origin-right overflow-hidden border border-[#e1d9f3]/60 bg-white/92 shadow-md shadow-[#5b4d9e]/8 ring-1 ring-[#ebe8f0]/80 backdrop-blur-md ${
          panelOpen
            ? "w-max max-w-[calc(100vw-1.25rem)] flex-col rounded-lg py-1.5 pl-2 pr-1.5"
            : "h-9 w-9 items-center justify-center rounded-full p-0"
        }`}
      >
        {panelOpen ? (
          <nav
            id="floating-nav-panel"
            role="dialog"
            aria-modal="false"
            aria-label="Quick navigation"
            className="floating-nav-panel-in relative flex flex-col gap-px pr-0.5"
          >
            <div className="floating-nav-corner absolute right-0 top-0 z-10 flex h-9 w-10 items-start justify-end pt-px pr-px">
              <button
                type="button"
                onClick={() => setPanelOpen(false)}
                className="floating-nav-close-btn rounded p-0.5 text-[#6b7280] transition-[opacity,background-color,color] duration-200 hover:bg-[#f5f3f9] hover:text-[#1f2937] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#5b4d9e]"
                aria-label="Close quick navigation"
              >
                <CloseIcon className="h-3.5 w-3.5" />
              </button>
            </div>
            {FLOATING_LINKS.map(({ href, label }, index) => (
              <Link
                key={href}
                href={href}
                onClick={() => setPanelOpen(false)}
                className={`whitespace-nowrap rounded-md px-1.5 py-1 text-[11px] font-medium leading-snug text-[#4b5563] transition-colors duration-200 hover:bg-[#f5f3f9] hover:text-[#5b4d9e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#5b4d9e] md:text-xs ${
                  index === 0 ? "pr-7" : ""
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="my-0.5 border-t border-[#ebe8f0]/60" />
            <a
              href={SITE_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-1.5 py-1 text-[11px] font-semibold leading-snug text-[#5b4d9e] transition-colors duration-200 hover:bg-[#f5f3f9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#5b4d9e] md:text-xs"
            >
              Book
            </a>
          </nav>
        ) : (
          <button
            type="button"
            onClick={() => setPanelOpen(true)}
            aria-expanded={false}
            aria-haspopup="dialog"
            aria-label="Open quick navigation"
            className="flex h-full min-h-9 w-full min-w-9 items-center justify-center rounded-full text-[#5b4d9e] transition-[color,transform] duration-200 ease-out hover:bg-[#faf9ff]/90 hover:text-[#4a3d82] active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4d9e]"
          >
            <MenuIcon className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}

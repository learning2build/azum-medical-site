"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { SITE_CONFIG } from "@/lib/site-config";
import { SERVICES, isServiceComingSoon } from "@/lib/services-config";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/insurance", label: "Insurance" },
  { href: "/wellness-insights", label: "Wellness Insights" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const servicesTriggerRef = useRef<HTMLDivElement>(null);
  const servicesCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateDropdownPosition = () => {
    if (servicesTriggerRef.current) {
      const rect = servicesTriggerRef.current.getBoundingClientRect();
      setDropdownPosition({ top: rect.bottom, left: rect.left });
    }
  };

  const openServices = () => {
    if (servicesCloseTimerRef.current) {
      clearTimeout(servicesCloseTimerRef.current);
      servicesCloseTimerRef.current = null;
    }
    updateDropdownPosition();
    setServicesOpen(true);
  };
  const closeServices = () => {
    servicesCloseTimerRef.current = setTimeout(() => setServicesOpen(false), 120);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setServicesOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useLayoutEffect(() => {
    if (!servicesOpen) return;
    updateDropdownPosition();
    window.addEventListener("resize", updateDropdownPosition);
    return () => window.removeEventListener("resize", updateDropdownPosition);
  }, [servicesOpen]);

  return (
    <header
      className={`w-full overflow-visible border-b transition-all duration-200 ${
        isScrolled
          ? "border-[#e1d9f3]/80 bg-white/95 backdrop-blur-md shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
          : "border-[#ebe8f0]/60 bg-[#faf9f7]/95 backdrop-blur-sm"
      } ${servicesOpen ? "md:border-b-0" : ""}`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 ${
          isScrolled ? "py-0.5 sm:py-1" : "py-1 sm:py-1.5"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/site:azum-medical-logo.png"
            alt="AZUM Medical"
            width={267}
            height={116}
            className={`w-auto transition-all duration-200 ${
              isScrolled ? "h-40 sm:h-48" : "h-56 sm:h-64"
            }`}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/about"
            className="text-base font-medium text-[#4b5563] transition-colors duration-150 hover:text-[#5b4d9e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4d9e]"
          >
            About
          </Link>
          {/* Services dropdown trigger */}
          <div
            ref={servicesTriggerRef}
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-base font-medium text-[#4b5563] transition-colors duration-150 hover:text-[#5b4d9e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4d9e]"
            >
              Services
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
          {NAV_LINKS.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-[#4b5563] transition-colors duration-150 hover:text-[#5b4d9e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4d9e]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE_CONFIG.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] rounded-full bg-[#5b4d9e] px-5 py-2.5 text-base font-semibold text-white shadow-sm transition-all duration-150 ease-out hover:bg-[#4a3d82] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4d9e]"
          >
            Book Appointment
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 text-[#4b5563] transition-colors hover:bg-[#ebe8f0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4d9e] md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Services dropdown — portaled to body so it isn't clipped by header backdrop-blur */}
      {mounted && servicesOpen && createPortal(
          <div
            className="fixed z-[60] hidden min-w-[220px] -translate-y-px rounded-b-xl border border-t-0 border-[#ebe8f0]/80 bg-white py-2 shadow-lg shadow-[#5b4d9e]/10 md:block"
            style={{
              top: dropdownPosition.top,
              left: dropdownPosition.left,
            }}
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <Link
              href="/services"
              className="block px-4 py-2.5 text-sm font-medium text-[#1f2937] transition-colors hover:bg-[#f5f3f9] hover:text-[#5b4d9e]"
              onClick={() => setServicesOpen(false)}
            >
              All Services
            </Link>
            <div className="my-1 border-t border-[#ebe8f0]/60" />
            {SERVICES.map((s) =>
              isServiceComingSoon(s) ? (
                <div
                  key={s.slug}
                  className="block px-4 py-2.5 text-sm text-[#4b5563]"
                  aria-disabled
                >
                  {s.title}
                  <span className="ml-1.5 text-xs text-[#5b4d9e]">(Coming soon)</span>
                </div>
              ) : (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="block px-4 py-2.5 text-sm text-[#4b5563] transition-colors hover:bg-[#f5f3f9] hover:text-[#5b4d9e]"
                  onClick={() => setServicesOpen(false)}
                >
                  {s.title}
                </Link>
              )
            )}
          </div>,
          document.body
        )}

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[#ebe8f0] bg-white px-4 py-2 md:hidden">
          <nav className="flex flex-col gap-1">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] py-3 text-base font-medium text-[#4b5563] transition-colors hover:text-[#5b4d9e]"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] py-3 text-base font-medium text-[#4b5563] transition-colors hover:text-[#5b4d9e]"
            >
              Services
            </Link>
            <div className="ml-4 flex flex-col border-l-2 border-[#ebe8f0] pl-4">
              {SERVICES.map((s) =>
                isServiceComingSoon(s) ? (
                  <span
                    key={s.slug}
                    className="min-h-[40px] py-2.5 text-sm text-[#4b5563]"
                  >
                    {s.title}
                    <span className="ml-1.5 text-xs text-[#5b4d9e]">(Coming soon)</span>
                  </span>
                ) : (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[40px] py-2.5 text-sm text-[#4b5563] transition-colors hover:text-[#5b4d9e]"
                  >
                    {s.title}
                  </Link>
                )
              )}
            </div>
            {NAV_LINKS.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] py-3 text-base font-medium text-[#4b5563] transition-colors hover:text-[#5b4d9e]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={SITE_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] rounded-full bg-[#5b4d9e] px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-[#4a3d82]"
            >
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

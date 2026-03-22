import Link from "next/link";
import Image from "next/image";
import { FooterSocial } from "@/components/layout/FooterSocial";
import { SITE_CONFIG } from "@/lib/site-config";

const FOOTER_SECTION_TITLE = "text-sm font-semibold text-[#1f2937]";

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/wellness-insights", label: "Wellness Insights" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#ebe8f0] bg-[#f5f3f8]">
      <div className="mx-auto max-w-7xl px-4 pt-6 pb-8 sm:px-6 lg:px-8">
        {/* Top: three equal columns — full content width for symmetric margins */}
        <div className="grid grid-cols-1 items-start gap-x-6 gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-10">
            <div className="min-w-0">
              <h3 className={FOOTER_SECTION_TITLE}>Contact</h3>
              <div className="mt-2 flex flex-col gap-y-2 text-sm text-[#4b5563]">
                <p>
                  {SITE_CONFIG.address.line1}
                  <br />
                  {SITE_CONFIG.address.line2} {SITE_CONFIG.address.zip}
                </p>
                <a
                  href={SITE_CONFIG.phone.tollFreeTel}
                  className="block text-[#5b4d9e] hover:underline"
                >
                  {SITE_CONFIG.phone.tollFree}
                </a>
                <a
                  href={SITE_CONFIG.phone.localTel}
                  className="block text-[#5b4d9e] hover:underline"
                >
                  {SITE_CONFIG.phone.local}
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="block text-[#5b4d9e] hover:underline"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>

            <div className="min-w-0">
              <h3 className={FOOTER_SECTION_TITLE}>Office Hours</h3>
              <div className="mt-2 grid grid-cols-[auto_1fr] gap-x-2 gap-y-2 text-sm">
                <span className="font-medium text-[#1f2937]">
                  {SITE_CONFIG.hours.weekday.days}
                </span>
                <span className="font-normal text-[#4b5563]">
                  {SITE_CONFIG.hours.weekday.time}
                </span>
                <span className="font-medium text-[#1f2937]">
                  {SITE_CONFIG.hours.weekend.days}
                </span>
                <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-normal text-[#4b5563]">
                    {SITE_CONFIG.hours.weekend.status}
                  </span>
                  <span
                    className="inline-flex items-center rounded-full border border-[#dcd4ef]/90 bg-gradient-to-r from-[#faf9ff] to-[#f3effa] px-2.5 py-1 text-[11px] font-medium leading-none text-[#5b4d9e] shadow-sm ring-1 ring-white/90 md:text-xs"
                  >
                    {SITE_CONFIG.hours.weekend.note}
                  </span>
                </div>
              </div>
            </div>

            <div className="min-w-0">
              <h3 className={FOOTER_SECTION_TITLE}>Quick Links</h3>
              <div className="mt-2 flex w-full flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-10">
                <ul className="flex min-w-0 flex-col gap-y-2">
                  {FOOTER_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#4b5563] hover:text-[#5b4d9e] hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="w-full shrink-0 rounded-2xl border border-[#cfc4e8]/80 bg-gradient-to-b from-[#fcfbff] to-[#f3effa] p-5 shadow-[0_4px_24px_rgba(74,61,130,0.09)] md:w-auto md:min-w-[12.5rem] md:p-6">
                  <a
                    href={SITE_CONFIG.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#5b4d9e] px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(74,61,130,0.35)] transition-all duration-200 ease-out hover:-translate-y-px hover:bg-[#4a3d82] hover:shadow-[0_4px_16px_rgba(74,61,130,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4d9e] md:whitespace-nowrap"
                  >
                    Book Appointment
                    <svg
                      className="h-4 w-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        {/* Brand: divider above, then centered logo + tagline */}
        <div className="mt-4 border-t border-[#ebe8f0] pt-3 pb-5 lg:pt-4 lg:pb-6">
          <div className="flex flex-col items-center text-center">
            {/* Tight crop: scale inside overflow-hidden trims transparent padding in the PNG */}
            <Link
              href="/"
              className="relative mb-2.5 block h-[6.25rem] w-[13.5rem] max-w-[min(100%,13.5rem)] overflow-hidden sm:h-[6.75rem] sm:w-[14.5rem] sm:max-w-[14.5rem]"
            >
              <Image
                src="/site:azum-medical-logo.png"
                alt="AZUM Medical"
                fill
                sizes="(max-width: 640px) 240px, 260px"
                className="object-contain object-center scale-[1.14]"
              />
            </Link>
            <p className="max-w-lg text-sm leading-relaxed text-[#6b7280]">
              Personalized primary care focused on your long-term health and
              wellness.
            </p>
          </div>
        </div>

        <div className="border-t border-[#ebe8f0] pt-6">
          <FooterSocial />
          <p className="mt-5 text-center text-sm text-[#6b7280]">
            © {new Date().getFullYear()} AZUM Medical. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

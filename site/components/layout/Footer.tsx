import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/site-config";

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/wellness-insights", label: "Wellness Insights" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#ebe8f0] bg-[#f5f3f8]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-x-10 lg:grid-cols-4 lg:gap-x-12">
          {/* Column 1: Logo + tagline — block + leading-none so logo aligns with column headings */}
          <div className="max-w-sm leading-none">
            <Link href="/" className="block">
              <Image
                src="/site:azum-medical-logo.png"
                alt="AZUM Medical"
                width={178}
                height={77}
                className="block h-40 w-auto sm:h-48"
              />
            </Link>
            <p className="mt-2 text-sm leading-normal text-[#4b5563]">
              Personalized primary care focused on your long-term health and
              wellness.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="font-semibold text-[#1f2937]">Contact</h3>
            <div className="mt-3 space-y-2 text-sm text-[#4b5563]">
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

          {/* Column 3: Office hours */}
          <div>
            <h3 className="font-semibold text-[#1f2937]">Office Hours</h3>
            <div className="mt-3 space-y-1 text-sm text-[#4b5563]">
              <p>{SITE_CONFIG.hours.weekdays}</p>
              <p>{SITE_CONFIG.hours.weekends}</p>
            </div>
          </div>

          {/* Column 4: Quick links + booking */}
          <div>
            <h3 className="font-semibold text-[#1f2937]">Quick Links</h3>
            <ul className="mt-3 space-y-2">
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
            <div className="mt-4">
              <a
                href={SITE_CONFIG.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#5b4d9e] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#4a3d82] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4d9e]"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#ebe8f0] pt-8 text-center text-sm text-[#6b7280]">
          © {new Date().getFullYear()} AZUM Medical. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

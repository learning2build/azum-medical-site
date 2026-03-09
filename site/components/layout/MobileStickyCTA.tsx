"use client";

import { SITE_CONFIG } from "@/lib/site-config";

/**
 * Sticky CTA bar for mobile — always visible at bottom on small screens.
 * Improves conversion by keeping "Book" and "Call" one tap away.
 */
export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex gap-3 border-t border-[#ebe8f0] bg-white/95 p-4 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] backdrop-blur-sm md:hidden">
      <a
        href={SITE_CONFIG.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-[#5b4d9e] py-3 font-semibold text-white shadow-sm transition-colors hover:bg-[#4a3d82]"
      >
        Book Appointment
      </a>
      <a
        href={SITE_CONFIG.phone.tollFreeTel}
        className="flex min-h-[48px] min-w-[80px] items-center justify-center rounded-full border-2 border-[#5b4d9e] px-4 py-3 font-semibold text-[#5b4d9e] transition-colors hover:bg-[#5b4d9e]/5"
      >
        Call
      </a>
    </div>
  );
}

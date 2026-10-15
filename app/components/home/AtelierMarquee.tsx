"use client";

import React from "react";

const marqueeItems = [
  "HAUTE ARCHITECTURE • ATELIER 2025",
  "100% ORGANIC NORMANDY LINEN",
  "CRAFTED IN PARIS & FLORENCE",
  "TIMELESS FORM • ZERO SYNTHETICS",
  "SLOW LUXURY SANCTUARY",
  "PURE MULBERRY SILK & BIELLA WOOL",
  "SCULPTURAL WEARABLE ART",
  "MILANO • TOKYO • NEW YORK SALONS",
];

export default function AtelierMarquee() {
  return (
    <div className="w-full overflow-hidden border-y border-black/[0.08] bg-[#efeae3] py-3 sm:py-3.5 select-none relative z-20">
      <div className="flex w-max animate-marquee whitespace-nowrap gap-10 sm:gap-14 text-[9.5px] sm:text-[10.5px] tracking-[0.4em] uppercase font-light text-black/70 hover:[animation-play-state:paused]">
        {/* Set 1 */}
        {marqueeItems.map((item, index) => (
          <React.Fragment key={`set1-${index}`}>
            <span className="hover:text-black transition-colors">{item}</span>
            <span className="text-[#9e8365] text-xs">✦</span>
          </React.Fragment>
        ))}

        {/* Set 2 (for seamless loop) */}
        {marqueeItems.map((item, index) => (
          <React.Fragment key={`set2-${index}`}>
            <span className="hover:text-black transition-colors">{item}</span>
            <span className="text-[#9e8365] text-xs">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

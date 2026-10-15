"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckIcon,
  SparkleIcon,
  ShieldIcon,
  CompassIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  LeafIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../icons";

interface MaterialNode {
  id: string;
  name: string;
  origin: string;
  purity: string;
  metric: string;
}

const materials: MaterialNode[] = [
  {
    id: "flax",
    name: "Normandy Flax",
    origin: "Northern France",
    purity: "100% Organic Raw Linen",
    metric: "0% synthetic irrigation",
  },
  {
    id: "silk",
    name: "Mulberry Silk",
    origin: "Lake Como, Italy",
    purity: "Hand-reeled Bombyx Mori",
    metric: "22 Momme natural weight",
  },
  {
    id: "wool",
    name: "Virgin Biella Wool",
    origin: "Piedmont, Italy",
    purity: "Super 140s Unspun",
    metric: "Biodegradable natural sheen",
  },
  {
    id: "horn",
    name: "Natural Horn Buttons",
    origin: "Florence Atelier",
    purity: "Carved Organic Keratin",
    metric: "Zero plastic resin",
  },
];

export default function AtelierDistinction() {
  const [activeMaterial, setActiveMaterial] = useState<string>("flax");
  const [activeTab, setActiveTab] = useState<"tailored" | "provenance" | "ethics">("tailored");
  const [conciergeActive, setConciergeActive] = useState(true);

  const selectedMat = materials.find((m) => m.id === activeMaterial) || materials[0];

  return (
    <section className="relative w-full bg-[#f6f3ee] text-[#1a1a1a] py-24 sm:py-28 md:py-36 overflow-hidden border-t border-black/[0.06]">
      {/* Ambient Lighting & Texture subtle aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1300px] h-[600px] bg-radial from-amber-500/[0.04] via-stone-400/[0.02] to-transparent pointer-events-none blur-3xl" />
      <div className="absolute -bottom-24 right-0 w-[500px] h-[500px] bg-emerald-500/[0.025] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 relative z-10">
        
        {/* ============================================================
            1. SECTION HEADER (Blended from Image 1 & Image 2)
            "What Sets Us Apart?" + "Unveiling Our Vision and Mission"
            ============================================================ */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9e8365] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase font-semibold text-black/70">
              ATELIER MANIFESTO • ESSENCE &amp; VISION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[#0a0a0a] tracking-tight leading-[1.08] mb-5">
            What Sets VEYRA Apart
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-black/65 font-light leading-relaxed max-w-2xl mx-auto tracking-wide">
            A synthesis of classical architectural silhouettes and uncompromised botanical purity.
            We reject transient fashion cycles to construct enduring wearable monuments.
          </p>
        </div>

        {/* ============================================================
            2. THE SIGNATURE BENTO GRID (Mixing Image 1 + Image 2)
            ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Bento Cell 1: Large Editorial Atelier Craft Photo (Image 2 - Top Left) */}
          <div className="md:col-span-12 lg:col-span-5 group relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] bg-stone-900 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-black/10 flex flex-col justify-between p-6 sm:p-8">
            <Image
              src="/images/atelier_craft_table.jpg"
              alt="Paris Atelier Cutting Table"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.88]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />

            {/* Top Tag */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] tracking-[0.24em] uppercase text-white font-medium">
                PARIS ATELIER • RUE SAINT-HONORÉ
              </span>
              <span className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90">
                <SparkleIcon size={14} />
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="relative z-10 space-y-2.5">
              <span className="text-[10px] tracking-[0.3em] uppercase text-amber-200/80 font-medium">
                01 / PROVENANCE OF THE CUT
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-medium text-white tracking-tight leading-snug">
                Hand-Drafted Continuous Silhouette
              </h3>
              <p className="text-xs text-white/75 font-light leading-relaxed max-w-sm">
                Every panel is hand-chalked and cut with forged brass shears from organic French flax.
                Zero industrial mass-stamping.
              </p>
            </div>
          </div>

          {/* Bento Cell 2: 100% Zero Synthetics Dark Card (Image 2 - Center Top) */}
          <div className="md:col-span-6 lg:col-span-4 rounded-3xl bg-[#0e0e0e] text-[#f5f2ee] p-7 sm:p-8 flex flex-col justify-between border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative overflow-hidden group">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-white/[0.03] rounded-full blur-2xl group-hover:bg-white/[0.06] transition-colors duration-500" />
            
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] tracking-[0.28em] uppercase text-white/50 font-medium">
                  ATELIER PLEDGE
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/10 text-emerald-400 text-[10px] tracking-wider font-mono">
                  VERIFIED 100%
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-6xl sm:text-7xl font-display font-bold text-white tracking-tighter inline-block">
                  100%
                </span>
                <h4 className="text-lg sm:text-xl font-display font-medium text-white tracking-tight">
                  Zero Synthetic Noble Fibers
                </h4>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 space-y-2">
              <p className="text-xs text-white/60 font-light leading-relaxed">
                Zero polyester, elastane, or micro-plastics. Every single thread, lining, and button will naturally return to the soil.
              </p>
              <div className="flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-white/40 pt-1">
                <LeafIcon size={12} className="text-emerald-400" />
                <span>100% BIODEGRADABLE COUTURE</span>
              </div>
            </div>
          </div>

          {/* Bento Cell 3: Dual Mission & Creativity Metrics (Image 2 - Top Right) */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col gap-5 sm:gap-6">
            
            {/* Top sub-card: 1 Guiding Philosophy */}
            <div className="flex-1 rounded-3xl bg-white p-6 sm:p-7 border border-black/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between group hover:border-black/20 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-4xl sm:text-5xl font-display font-bold text-black tracking-tight">
                  1
                </span>
                <span className="w-8 h-8 rounded-full bg-black/[0.04] flex items-center justify-center text-black/60 group-hover:text-black transition-colors">
                  <CompassIcon size={15} />
                </span>
              </div>
              <div className="mt-4">
                <p className="text-[11px] tracking-[0.22em] uppercase font-semibold text-black">
                  Guiding Philosophy
                </p>
                <p className="text-xs text-black/60 font-light leading-relaxed mt-1">
                  Architecture over fleeting micro-trends. Every garment is an heirloom.
                </p>
              </div>
            </div>

            {/* Bottom sub-card: 120h Crafting */}
            <div className="flex-1 rounded-3xl bg-white p-6 sm:p-7 border border-black/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between group hover:border-black/20 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-4xl sm:text-5xl font-display font-bold text-black tracking-tight">
                  120<span className="text-2xl text-black/40">h</span>
                </span>
                <span className="w-8 h-8 rounded-full bg-black/[0.04] flex items-center justify-center text-black/60 group-hover:text-black transition-colors">
                  <ShieldIcon size={15} />
                </span>
              </div>
              <div className="mt-4">
                <p className="text-[11px] tracking-[0.22em] uppercase font-semibold text-black">
                  Artisanal Handwork
                </p>
                <p className="text-xs text-black/60 font-light leading-relaxed mt-1">
                  Average master tailoring &amp; steam shaping per tailored coat silhouette.
                </p>
              </div>
            </div>

          </div>

          {/* Bento Cell 4: Interactive Provenance Radar Hub (Image 1 - "Optimize" Circular Radar) */}
          <div className="md:col-span-12 lg:col-span-6 rounded-3xl bg-white p-7 sm:p-9 border border-black/[0.08] shadow-[0_15px_40px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-black/45 font-medium">
                  TRACEABILITY RADAR
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-medium text-black tracking-tight mt-0.5">
                  Ecosystem of Noble Matter
                </h3>
              </div>
              <span className="text-xs text-black/40 font-mono tracking-wider">
                EUR-PROVENANCE
              </span>
            </div>

            {/* Visual Radar Center with Interactive Orbiting Satellite Nodes */}
            <div className="relative my-4 py-8 flex items-center justify-center">
              {/* Radar concentric rings */}
              <div className="absolute w-64 h-64 rounded-full border border-black/[0.05] pointer-events-none animate-pulse" />
              <div className="absolute w-44 h-44 rounded-full border border-black/[0.08] pointer-events-none" />
              <div className="absolute w-24 h-24 rounded-full border border-black/[0.12] pointer-events-none" />

              {/* Central Maison Node */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center shadow-lg shadow-black/20 ring-4 ring-black/5">
                <span className="font-display font-bold text-xl tracking-wider text-[#ece7e1]">
                  V
                </span>
              </div>

              {/* Orbiting Interactive Material Pills */}
              <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
                <div className="pointer-events-auto flex flex-col gap-2">
                  {materials.slice(0, 2).map((mat) => {
                    const isSelected = activeMaterial === mat.id;
                    return (
                      <button
                        key={mat.id}
                        onClick={() => setActiveMaterial(mat.id)}
                        className={`text-left px-3.5 py-2 rounded-2xl border text-xs transition-all duration-300 backdrop-blur-sm cursor-pointer ${
                          isSelected
                            ? "bg-[#0a0a0a] text-white border-black shadow-md scale-105"
                            : "bg-[#f9f8f6] hover:bg-white text-black/70 border-black/10 hover:border-black/30"
                        }`}
                      >
                        <p className="font-medium text-[11px] tracking-wide">{mat.name}</p>
                        <p className={`text-[9.5px] ${isSelected ? "text-white/60" : "text-black/40"}`}>
                          {mat.origin}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <div className="pointer-events-auto flex flex-col gap-2">
                  {materials.slice(2, 4).map((mat) => {
                    const isSelected = activeMaterial === mat.id;
                    return (
                      <button
                        key={mat.id}
                        onClick={() => setActiveMaterial(mat.id)}
                        className={`text-left px-3.5 py-2 rounded-2xl border text-xs transition-all duration-300 backdrop-blur-sm cursor-pointer ${
                          isSelected
                            ? "bg-[#0a0a0a] text-white border-black shadow-md scale-105"
                            : "bg-[#f9f8f6] hover:bg-white text-black/70 border-black/10 hover:border-black/30"
                        }`}
                      >
                        <p className="font-medium text-[11px] tracking-wide">{mat.name}</p>
                        <p className={`text-[9.5px] ${isSelected ? "text-white/60" : "text-black/40"}`}>
                          {mat.origin}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Selected Material Info Card */}
            <div className="mt-4 p-4 rounded-2xl bg-[#f6f3ee] border border-black/[0.06] flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] tracking-[0.22em] uppercase font-semibold text-black/70">
                  {selectedMat.name} • {selectedMat.origin}
                </p>
                <p className="text-xs text-black/80 font-medium mt-0.5">
                  {selectedMat.purity}
                </p>
              </div>
              <span className="text-[11px] font-mono text-emerald-700 bg-emerald-500/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                {selectedMat.metric}
              </span>
            </div>
          </div>

          {/* Bento Cell 5: Tailored Architectural Checklist Stack (Image 1 - "Tailored" / "Maximize") */}
          <div className="md:col-span-12 lg:col-span-6 rounded-3xl bg-white p-7 sm:p-9 border border-black/[0.08] shadow-[0_15px_40px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] tracking-[0.3em] uppercase text-black/45 font-medium">
                  ATELIER VERIFICATION
                </span>
                <span className="text-xs text-emerald-700 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  0 SYNTHETICS
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-medium text-black tracking-tight mb-2">
                Sculptural Construction Standards
              </h3>
              <p className="text-xs sm:text-[13px] text-black/60 font-light leading-relaxed mb-6">
                Constructed like stone architecture. No fusible glued interfacings, no shortcuts.
              </p>
            </div>

            {/* Interactive Stacked Inspection Pills */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-[#faf9f6] border border-black/[0.06] flex items-center justify-between group hover:border-black/20 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckIcon size={14} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-black">French Seams &amp; Bound Edges</p>
                    <p className="text-[11px] text-black/50 font-light">Zero rough synthetic overlock stitching inside</p>
                  </div>
                </div>
                <span className="text-[10px] tracking-widest text-black/40 font-mono hidden sm:inline">
                  PASSED
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#faf9f6] border border-black/[0.06] flex items-center justify-between group hover:border-black/20 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckIcon size={14} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-black">Mulberry Raw Silk Internal Bindings</p>
                    <p className="text-[11px] text-black/50 font-light">Breathable natural friction-free garment contact</p>
                  </div>
                </div>
                <span className="text-[10px] tracking-widest text-black/40 font-mono hidden sm:inline">
                  PASSED
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#faf9f6] border border-black/[0.06] flex items-center justify-between group hover:border-black/20 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckIcon size={14} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-black">Steamed on Italian Beechwood Busts</p>
                    <p className="text-[11px] text-black/50 font-light">Permanent memory curve tailored without chemical sprays</p>
                  </div>
                </div>
                <span className="text-[10px] tracking-widest text-black/40 font-mono hidden sm:inline">
                  PASSED
                </span>
              </div>
            </div>
          </div>

          {/* Bento Cell 6: Accent Color Salons Card (Image 2 - Lime Accent / Salons counter) */}
          <div className="md:col-span-6 lg:col-span-4 rounded-3xl bg-[#e3d8c8] text-[#1c1a17] p-7 sm:p-8 flex flex-col justify-between border border-black/[0.08] shadow-[0_15px_35px_rgba(0,0,0,0.03)] relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] tracking-[0.26em] uppercase font-semibold text-black/60">
                GLOBAL FOOTPRINT
              </span>
              <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-black">
                <GlobeIcon size={16} />
              </span>
            </div>

            <div className="my-6">
              <span className="text-6xl sm:text-7xl font-display font-bold text-black tracking-tight inline-block">
                4
              </span>
              <h4 className="text-xl font-display font-medium text-black mt-1">
                Private City Salons
              </h4>
              <p className="text-xs text-black/70 font-light mt-1">
                Paris • Milano • Tokyo • New York
              </p>
            </div>

            <div className="pt-4 border-t border-black/15 flex items-center justify-between">
              <span className="text-[11px] font-medium tracking-wide">
                By Invitation &amp; Appointment
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-black hover:opacity-75 transition-opacity"
              >
                <span>VISIT</span>
                <ArrowRightIcon size={12} strokeWidth={2} />
              </Link>
            </div>
          </div>

          {/* Bento Cell 7: Wide Editorial Studio Photo (Image 2 - Bottom Wide Photo with Quote) */}
          <div className="md:col-span-6 lg:col-span-8 group relative rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[360px] bg-stone-900 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-black/10 flex flex-col justify-between p-6 sm:p-8">
            <Image
              src="/images/atelier_model_editorial.jpg"
              alt="Florence Architectural Salon"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.88]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20 pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] tracking-[0.24em] uppercase text-white font-medium">
                FLORENCE ATELIER • DUOMO VISTA
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:scale-110 transition-transform"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={14} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:scale-110 transition-transform"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon size={14} />
                </a>
              </div>
            </div>

            <div className="relative z-10 max-w-lg space-y-2">
              <p className="text-sm sm:text-base md:text-lg font-display italic text-white/95 leading-snug">
                “True luxury is never defined by excess or flash, but by the quiet absence of compromise in material and form.”
              </p>
              <p className="text-[10px] tracking-[0.28em] uppercase text-amber-200/80 font-medium">
                MAISON ARCHITECTURAL DIARY • VOL. IV
              </p>
            </div>
          </div>

        </div>

        {/* ============================================================
            3. TWO-COLUMN EDITORIAL NARRATIVE (From Image 2 Bottom)
            "Curiosity & Creativity" / "Leading the Way..."
            ============================================================ */}
        <div className="mt-24 sm:mt-32 pt-16 sm:pt-20 border-t border-black/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Architectural Headings */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-[10px] tracking-[0.35em] uppercase text-black/45 font-medium block mb-2">
                  OUR VALUES
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-black tracking-tight leading-tight">
                  Curiosity &amp; Architectural Rigor
                </h3>
              </div>

              <div>
                <span className="text-[10px] tracking-[0.35em] uppercase text-black/45 font-medium block mb-2">
                  OUR MISSION
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-black tracking-tight leading-tight">
                  Restoring Garment Permanence
                </h3>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-black group"
                >
                  <span className="border-b border-black pb-0.5 group-hover:border-black/50 transition-colors">
                    READ THE FULL MAISON PROVENANCE ESSAY
                  </span>
                  <ArrowUpRightIcon size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Editorial Paragraphs */}
            <div className="lg:col-span-7 space-y-6 text-xs sm:text-[13.5px] text-black/70 font-light leading-relaxed">
              <p>
                We believe that garments are the most intimate form of personal architecture. Just as classical European masonry is defined by proportion, unadulterated stone, and natural illumination, VEYRA silhouettes are sculpted around the human form using solely organic, noble plant and animal fibers.
              </p>
              <p>
                By strictly banishing micro-synthetics, polyester interfacings, and accelerated chemical washes, we deliberately embrace the contemplative rhythm of traditional atelier tailoring. Each raw bolt of flax from Normandy and reeled silk from Como is given time to rest, breathe, and adapt before being shaped by our master tailors.
              </p>
              <p>
                The result is not simply sustainable clothing—it is an enduring sanctuary. Garments that age with grace, soften with every wear, and transcend the ephemeral noise of fast fashion seasons.
              </p>

              {/* Atelier Director Sign-off */}
              <div className="pt-4 flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-black/[0.06] flex items-center justify-center font-display font-bold text-xs text-black">
                  VA
                </div>
                <div>
                  <p className="text-[11px] font-medium tracking-wider uppercase text-black">
                    VEYRA ATELIER DIRECTORS
                  </p>
                  <p className="text-[10px] text-black/45 tracking-wide">
                    PARIS • FLORENCE • MILANO
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================
            4. "FEATURED ON" / ACCLAIMED PRESS MARQUEE (From Image 1 Bottom)
            "Featured On: Recognized by Prominent Platforms..."
            ============================================================ */}
        <div className="mt-24 sm:mt-28 pt-12 border-t border-black/[0.08] text-center">
          <p className="text-[10px] tracking-[0.35em] uppercase font-semibold text-black/40 mb-2">
            ACCLAIMED BY ARCHITECTS OF STYLE
          </p>
          <p className="text-xs text-black/60 font-light mb-8">
            Featured and reviewed across international luxury and design chronicles
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-20 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm sm:text-base font-serif tracking-[0.25em] font-semibold text-black">
              VOGUE
            </span>
            <span className="text-sm sm:text-base font-serif tracking-[0.2em] font-medium text-black">
              L&apos;OFFICIEL
            </span>
            <span className="text-sm sm:text-base font-serif tracking-[0.18em] font-medium text-black">
              HARPER&apos;S BAZAAR
            </span>
            <span className="text-sm sm:text-base font-serif tracking-[0.22em] font-semibold text-black">
              MONOCLE
            </span>
            <span className="text-sm sm:text-base font-serif tracking-[0.18em] font-medium text-black">
              ELLE DÉCOR
            </span>
            <span className="text-sm sm:text-base font-serif tracking-[0.16em] font-medium text-black">
              GQ ARCHIVE
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

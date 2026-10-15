"use client";

import { useState } from "react";
import Link from "next/link";
import {
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
  TwitterIcon,
  PinterestIcon,
  ArrowRightIcon,
} from "../icons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0a0a0a] text-[#ece7e1] relative overflow-hidden select-none border-t border-white/10">
      {/* Ambient Atmospheric Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] h-64 bg-radial from-white/[0.04] via-transparent to-transparent pointer-events-none blur-3xl" />

      {/* Top Banner: Atelier Guarantee & Values */}
      <div className="border-b border-white/[0.08] py-8 px-6 sm:px-10 md:px-16">
        <div className="max-w-[1500px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-semibold text-white">
              EUROPEAN ATELIER
            </p>
            <p className="text-xs text-white/50 font-light">
              Crafted in Paris & Florence
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-semibold text-white">
              PURE BOTANICALS
            </p>
            <p className="text-xs text-white/50 font-light">
              100% Organic Raw Flax & Silk
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-semibold text-white">
              COMPLIMENTARY SHIPPING
            </p>
            <p className="text-xs text-white/50 font-light">
              On all global maison orders
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-semibold text-white">
              PRIVATE CONCIERGE
            </p>
            <p className="text-xs text-white/50 font-light">
              Dedicated styling assistance
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Newsletter Column (Span 5 on large) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/45 font-medium">
                THE MAISON CORRESPONDENCE
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight leading-snug">
                Join the Private Atelier Dispatch
              </h3>
              <p className="text-xs sm:text-[13px] text-white/60 font-light leading-relaxed max-w-md">
                Receive private seasonal previews, architectural silhouette lookbooks, and invitation-only atelier capsule notifications.
              </p>
            </div>

            {/* Newsletter Subscription Form */}
            <form onSubmit={handleSubscribe} className="max-w-md space-y-3">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-white/[0.05] border border-white/15 focus:border-white/50 rounded-full py-3.5 pl-5 pr-32 text-xs text-white placeholder-white/35 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-white/90 text-[11px] font-medium tracking-[0.18em] uppercase transition-all duration-300 flex items-center gap-1.5"
                >
                  <span>JOIN</span>
                  <ArrowRightIcon size={12} strokeWidth={2} />
                </button>
              </div>

              {subscribed && (
                <p className="text-[11px] tracking-wide text-emerald-400 font-light pl-2 animate-fade-in">
                  ✓ Welcome to the VEYRA correspondence.
                </p>
              )}

              <p className="text-[10px] text-white/35 font-light leading-tight pl-2">
                By subscribing, you agree to our Privacy Policy. Correspondence is sent with utmost discretion.
              </p>
            </form>

            {/* Social Icons Ribbon */}
            <div className="pt-4 flex items-center gap-3">
              <span className="text-[10px] tracking-[0.25em] uppercase text-white/40 font-medium mr-2">
                FOLLOW:
              </span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-pink-500 hover:scale-110 transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-blue-500 hover:scale-110 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={17} />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-green-500 hover:scale-110 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={17} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-red-500 hover:scale-110 transition-all duration-200"
                aria-label="Pinterest"
              >
                <PinterestIcon size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:scale-110 transition-all duration-200"
                aria-label="Twitter / X"
              >
                <TwitterIcon size={16} />
              </a>
            </div>
          </div>

          {/* Navigation Columns (Span 7 on large) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
            {/* Col 1: Silhouettes */}
            <div className="space-y-4">
              <h4 className="text-[11px] tracking-[0.25em] uppercase font-semibold text-white">
                SILHOUETTES
              </h4>
              <ul className="space-y-2.5 text-xs text-white/60 font-light">
                <li>
                  <Link href="/casual" className="hover:text-white transition-colors duration-200">
                    Pure Normandy Linen
                  </Link>
                </li>
                <li>
                  <Link href="/formal" className="hover:text-white transition-colors duration-200">
                    Architectural Tailoring
                  </Link>
                </li>
                <li>
                  <Link href="/linen" className="hover:text-white transition-colors duration-200">
                    Mulberry Raw Silk
                  </Link>
                </li>
                <li>
                  <Link href="/oversized" className="hover:text-white transition-colors duration-200">
                    Atelier Outerwear
                  </Link>
                </li>
                <li>
                  <Link href="/lookbook" className="hover:text-white transition-colors duration-200">
                    Spring / Summer 2025
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-white transition-colors duration-200">
                    Archival Capsule
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2: The Maison */}
            <div className="space-y-4">
              <h4 className="text-[11px] tracking-[0.25em] uppercase font-semibold text-white">
                THE MAISON
              </h4>
              <ul className="space-y-2.5 text-xs text-white/60 font-light">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors duration-200">
                    Atelier Philosophy
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-white transition-colors duration-200">
                    Journal & Essays
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors duration-200">
                    Raw Material Provenance
                  </Link>
                </li>
                <li>
                  <Link href="/lookbook" className="hover:text-white transition-colors duration-200">
                    Seasonal Editorial
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors duration-200">
                    Zero Synthetic Mission
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors duration-200">
                    Press & Exhibitions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Concierge */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h4 className="text-[11px] tracking-[0.25em] uppercase font-semibold text-white">
                CONCIERGE
              </h4>
              <ul className="space-y-2.5 text-xs text-white/60 font-light">
                <li>
                  <Link href="/concierge" className="hover:text-white transition-colors duration-200">
                    Private Styling Service
                  </Link>
                </li>
                <li>
                  <Link href="/concierge" className="hover:text-white transition-colors duration-200">
                    Made-to-Measure Orders
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:text-white transition-colors duration-200">
                    Global Delivery & Duties
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-white transition-colors duration-200">
                    Complimentary Returns
                  </Link>
                </li>
                <li>
                  <Link href="/care" className="hover:text-white transition-colors duration-200">
                    Linen & Silk Garment Care
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors duration-200">
                    Direct Client Care
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Global Salons & Flagships */}
        <div className="mt-16 pt-10 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-white/50 font-light">
          <div>
            <p className="text-white text-[11px] font-medium tracking-[0.2em] uppercase mb-1">
              PARIS SALON
            </p>
            <p className="leading-relaxed">24 Rue Saint-Honoré, 75001 Paris</p>
            <p className="text-white/35 text-[11px] mt-0.5">+33 (0)1 42 68 00</p>
          </div>
          <div>
            <p className="text-white text-[11px] font-medium tracking-[0.2em] uppercase mb-1">
              MILANO ATELIER
            </p>
            <p className="leading-relaxed">Via Montenapoleone 8, 20121 Milano</p>
            <p className="text-white/35 text-[11px] mt-0.5">+39 02 7600 12</p>
          </div>
          <div>
            <p className="text-white text-[11px] font-medium tracking-[0.2em] uppercase mb-1">
              TOKYO SALON
            </p>
            <p className="leading-relaxed">Ginza Six 4F, Chuo City, Tokyo</p>
            <p className="text-white/35 text-[11px] mt-0.5">+81 3 3571 88</p>
          </div>
          <div>
            <p className="text-white text-[11px] font-medium tracking-[0.2em] uppercase mb-1">
              NEW YORK STUDIO
            </p>
            <p className="leading-relaxed">76 Mercer St, SoHo, NY 10012</p>
            <p className="text-white/35 text-[11px] mt-0.5">+1 (212) 925 40</p>
          </div>
        </div>

        {/* Monumental Watermark Brand Name */}
        <div className="mt-14 py-8 sm:py-10 md:py-12 border-y border-white/[0.08] text-center pointer-events-none select-none overflow-hidden flex items-center justify-center">
          <span
            className="font-display font-bold uppercase tracking-[0.16em] sm:tracking-[0.22em] text-[18vw] sm:text-[19vw] md:text-[20vw] leading-none text-transparent inline-block will-change-transform translate-y-[10%]"
            style={{
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.09)",
            }}
          >
            VEYRA
          </span>
        </div>

        {/* Bottom Utility Bar: Copyright, Country, Legal, Back to top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-white/45 font-light">
          {/* Copyright */}
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} VEYRA HAUTE ARCHITECTURE.</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="hidden sm:inline">ALL RIGHTS RESERVED.</span>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 tracking-wider uppercase text-[10px] text-white/50">
            <Link href="/privacy" className="hover:text-white transition-colors">
              PRIVACY POLICY
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              TERMS OF SERVICE
            </Link>
            <Link href="/legal" className="hover:text-white transition-colors">
              LEGAL NOTICE
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              COOKIE SETTINGS
            </Link>
          </div>

          {/* Location & Back To Top */}
          <div className="flex items-center gap-6">
            <span className="text-[10px] tracking-widest text-white/60">
              GLOBAL (USD $)
            </span>
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase font-medium text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5">
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

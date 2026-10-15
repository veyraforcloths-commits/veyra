"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  WhatsAppIcon,
  InstagramIcon,
  LinkedInIcon,
} from "../icons";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [targetMouse, setTargetMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Smooth 60fps lerp animation loop for 3D parallax
  useEffect(() => {
    let animId: number;
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const tick = () => {
      setMouse((prev) => ({
        x: lerp(prev.x, targetMouse.x, 0.08),
        y: lerp(prev.y, targetMouse.y, 0.08),
      }));
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [targetMouse]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setTargetMouse({ x, y });
  };

  const handleMouseLeave = () => {
    setTargetMouse({ x: 0, y: 0 });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen h-[100dvh] w-full bg-[var(--color-cream)] overflow-hidden select-none"
    >
      {/* 3D Ambient Studio Lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] h-[75vw] max-w-[950px] max-h-[950px] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.85)_0%,_rgba(242,237,230,0.5)_45%,_rgba(236,231,225,0)_75%)] pointer-events-none blur-3xl transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `translate(calc(-50% + ${mouse.x * 35}px), calc(-50% + ${mouse.y * 35}px))`,
        }}
      />

      {/* Decorative 3D Floating Geometry / Light Rings */}
      <div
        className="absolute top-28 left-[18%] w-72 h-72 rounded-full border border-black/[0.09] pointer-events-none transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(${mouse.x * -15}px, ${mouse.y * -15}px, 0)`,
        }}
      />
      <div
        className="absolute bottom-24 right-[25%] w-96 h-96 rounded-full border border-black/[0.08] pointer-events-none transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(${mouse.x * 20}px, ${mouse.y * 20}px, 0)`,
        }}
      />

      {/* Centered Background Outlined Brand Typography (Reference: VedaFusion style) */}
      <div
        data-scroll
        data-scroll-speed="-0.15"
        className="absolute inset-x-0 top-[42%] sm:top-[40%] -translate-y-1/2 w-full text-center pointer-events-none select-none z-[2] transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `translate3d(${mouse.x * -24}px, ${mouse.y * -16}px, 0)`,
        }}
      >
        <span
          className="font-display font-bold uppercase select-none whitespace-nowrap text-[19vw] sm:text-[20vw] md:text-[19vw] lg:text-[18vw] xl:text-[17vw] leading-none tracking-[0.08em] sm:tracking-[0.10em] text-transparent inline-block"
          style={{
            WebkitTextStroke: "1.8px rgba(10, 10, 10, 0.22)",
            textShadow: "0 15px 35px rgba(0, 0, 0, 0.02)",
          }}
        >
          VEYRA
        </span>
      </div>


      {/* Foreground Left Editorial Content (Positioned in yellow marked mid-left area) */}
      <div
        data-scroll
        data-scroll-speed="-0.08"
        className="absolute bottom-36 sm:bottom-40 md:bottom-44 lg:bottom-56 left-6 sm:left-10 md:left-14 lg:left-40 z-20 max-w-[300px] sm:max-w-md pointer-events-auto select-none"
        style={{
          transform: `translate3d(${mouse.x * 12}px, ${mouse.y * 10}px, 0)`,
        }}
      >
        {/* Editorial Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[50px] font-display font-medium text-[var(--color-black)] leading-[1.08] tracking-tight mb-2.5 sm:mb-3.5">
          Haute Architecture
        </h1>

        {/* Supporting Editorial Description */}
        <p className="text-xs sm:text-[13px] md:text-sm font-light text-black/65 leading-relaxed tracking-wide max-w-xs sm:max-w-sm">
          Curated silhouettes tailored for effortless elegance, fluid movement, and timeless modern luxury.
        </p>
      </div>

      {/* Right-Edge Fixed Social Links (Compact & Fixed) */}
      <aside
        aria-label="Social media links"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 pointer-events-auto"
      >
        <div className="px-2 sm:px-2.5 py-3 sm:py-3.5 flex flex-col items-center space-y-2.5 sm:space-y-3 bg-transparent hover:bg-white backdrop-blur-md rounded-l-xl sm:rounded-l-2xl border-l border-y border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300">
          {/* Instagram */}
          <div className="relative inline-flex">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center p-1"
              aria-label="Follow on Instagram"
            >
              <InstagramIcon
                size={20}
                className="w-5 h-5 text-pink-600 hover:scale-115 active:scale-95 transition-transform duration-200 cursor-pointer"
              />
              {/* Tooltip */}
              <span className="absolute right-full mr-3 px-2 py-0.5 text-[10px] font-medium tracking-wide bg-black text-white rounded opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none transition-all duration-200 whitespace-nowrap shadow-md z-50">
                Instagram
              </span>
            </a>
          </div>

          {/* LinkedIn */}
          <div className="relative inline-flex">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center p-1"
              aria-label="Connect on LinkedIn"
            >
              <LinkedInIcon
                size={20}
                className="w-5 h-5 text-blue-700 hover:scale-115 active:scale-95 transition-transform duration-200 cursor-pointer"
              />
              {/* Tooltip */}
              <span className="absolute right-full mr-3 px-2 py-0.5 text-[10px] font-medium tracking-wide bg-black text-white rounded opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none transition-all duration-200 whitespace-nowrap shadow-md z-50">
                LinkedIn
              </span>
            </a>
          </div>

          {/* WhatsApp */}
          <div className="relative inline-flex">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center p-1"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon
                size={20}
                className="w-5 h-5 text-green-500 hover:scale-115 active:scale-95 transition-transform duration-200 cursor-pointer"
              />
              {/* Tooltip */}
              <span className="absolute right-full mr-3 px-2 py-0.5 text-[10px] font-medium tracking-wide bg-black text-white rounded opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none transition-all duration-200 whitespace-nowrap shadow-md z-50">
                WhatsApp
              </span>
            </a>
          </div>
        </div>
      </aside>

      {/* Center Model Image - Enriched, Enchanced & Magnified */}
      <div
        data-scroll
        data-scroll-speed="0.08"
        className="absolute inset-0 flex items-end justify-center pointer-events-none z-10 opacity-100 translate-y-0"
      >
        <div
          className="relative w-[76%] sm:w-[62%] md:w-[48%] lg:w-[40%] xl:w-[35%] 2xl:w-[31%] h-[78%] sm:h-[81%] md:h-[84%] lg:h-[87%] transition-transform duration-200 ease-out will-change-transform"
          style={{
            transform: `perspective(1200px) rotateY(${mouse.x * 7}deg) rotateX(${-mouse.y * 5}deg) translate3d(${mouse.x * 16}px, ${mouse.y * 10}px, 30px)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Realistic 3D Floor Shadow */}
          <div className="absolute bottom-1 md:bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-8 bg-black/20 rounded-[100%] blur-xl pointer-events-none" />

          <Image
            src="/images/4k_iamge_transparent.png"
            alt="VEYRA - Premium men's shirt collection"
            fill
            className="object-contain object-bottom select-none pointer-events-none drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)] drop-shadow-[0_8px_15px_rgba(0,0,0,0.08)]"
            priority
            sizes="(max-width: 640px) 76vw, (max-width: 1024px) 48vw, 35vw"
          />
        </div>
      </div>

      {/* Minimalist Editorial Action Links (Bottom-Left) */}
      <div
        className="absolute left-6 sm:left-10 md:left-14 lg:left-20 bottom-5 sm:bottom-7 md:bottom-9 z-20 flex flex-wrap items-center gap-5 sm:gap-7 opacity-100 translate-y-0"
        style={{
          transform: `translate3d(${mouse.x * 10}px, ${mouse.y * 8}px, 0)`,
        }}
      >
        {/* Primary Editorial Action */}
        <Link
          href="/shop"
          className="group relative inline-flex items-center gap-3 text-xs md:text-[13px] tracking-[0.26em] font-medium text-black uppercase transition-colors duration-300 py-1"
        >
          <span>SHOP COLLECTION</span>
          <span className="w-7 h-7 rounded-full border border-black/35 flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:border-black group-hover:text-white text-black text-xs">
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </span>
          <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-[calc(100%-2.5rem)]" />
        </Link>

        {/* Minimalist Hairline Divider */}
        <span className="hidden sm:inline-block w-[1px] h-4 bg-black/25" />

        {/* Secondary Editorial Action */}
        <Link
          href="/shop/new"
          className="group relative inline-flex items-center gap-2 text-xs md:text-[13px] tracking-[0.26em] font-light text-black/75 hover:text-black uppercase transition-colors duration-300 py-1"
        >
          <span>EXPLORE LOOKBOOK</span>
          <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
          <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-black/70 transition-all duration-300 group-hover:w-full" />
        </Link>
      </div>

      {/* Right Bottom Content - Rotating 3D Haute Couture Seal */}
      <div
        className="absolute right-6 sm:right-10 md:right-14 lg:left-auto lg:right-20 bottom-5 sm:bottom-7 md:bottom-9 z-20 flex flex-col items-end opacity-100 translate-y-0"
        style={{
          transform: `translate3d(${mouse.x * 12}px, ${mouse.y * 10}px, 0)`,
        }}
      >
        {/* Rotating Circular Luxury Seal */}
        <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-2 pointer-events-none">
          <svg
            className="w-full h-full animate-[spin_24s_linear_infinite]"
            viewBox="0 0 100 100"
          >
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="text-[7.5px] uppercase tracking-[0.26em] fill-black/65 font-medium">
              <textPath href="#circlePath" startOffset="0%">
                ★ VEYRA ATELIER ★ HAUTE LUXE ★ PARIS 2025
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-white/70 backdrop-blur-sm border border-black/10 flex items-center justify-center shadow-sm">
            <span className="font-display font-bold text-xs tracking-wider text-black">V</span>
          </div>
        </div>

        <div className="text-right">
          <p className="text-[10px] md:text-[11px] tracking-[0.28em] font-light leading-snug text-[var(--color-charcoal)]">
            NEW ARRIVALS
            <br />
            <span className="font-medium text-black">SPRING / SUMMER '25</span>
          </p>
          <div className="w-10 h-[1.5px] bg-black mt-2 ml-auto" />
        </div>
      </div>

      {/* Minimal Scroll Pill Indicator */}
      <div
        className={`absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1 transition-all duration-[1.8s] delay-[1.2s] pointer-events-none ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-[7.5px] tracking-[0.3em] font-light text-black/40 uppercase">
          SCROLL
        </span>
        <div className="w-[1px] h-4 bg-black/20 animate-pulse" />
      </div>
    </section>
  );
}

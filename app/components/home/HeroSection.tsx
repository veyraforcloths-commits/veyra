"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
  PinterestIcon,
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

      {/* Top-Left Giant VEYRA Editorial Typography (Expanded to fill designated area) */}
      <div
        data-scroll
        data-scroll-speed="-0.12"
        className="absolute top-28 sm:top-20 md:top-32 lg:top-42 left-6 sm:left-10 md:left-14 lg:left-20 pointer-events-none select-none z-[1] transition-transform duration-300 ease-out will-change-transform w-auto max-w-[960px]"
        style={{
          transform: `translate3d(${mouse.x * -24}px, ${mouse.y * -16}px, 0)`,
        }}
      >
        <p className="text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.38em] font-medium uppercase text-black/60 mb-4 sm:mb-3">
          MAISON DE MODE • ATELIER 2025
        </p>

        <h1
          className="text-[21vw] sm:text-[17vw] md:text-[14vw] lg:text-[12.5vw] xl:text-[12vw] font-display font-medium leading-[0.84] tracking-[0.06em] text-[var(--color-black)] opacity-100 translate-y-0 whitespace-nowrap"
          style={{
            textShadow:
              "0 12px 28px rgba(0, 0, 0, 0.22), 0 25px 60px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.10)",
          }}
        >
          VEYRA
        </h1>

        <div className="flex items-center gap-3 pl-43 opacity-60">
          <span className="text-[9px]  sm:text-[10px] tracking-[0.65em] font-light text-black uppercase">
            Haute Architecture
          </span>
        </div>
      </div>

      {/* Top-Right Random Floating 3D Bubble Social Cluster */}
      <div
        data-scroll
        data-scroll-speed="0.18"
        className="absolute top-18 sm:top-20 md:top-22 lg:top-24 right-6 sm:right-10 md:right-14 lg:right-20 z-30 pointer-events-none w-64 sm:w-72 md:w-80 h-44 sm:h-52"
        style={{
          transform: `perspective(800px) rotateY(${mouse.x * 12}deg) rotateX(${-mouse.y * 12}deg) translate3d(${mouse.x * 16}px, ${mouse.y * 12}px, 20px)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* WhatsApp (Top-Left of cluster - Official Green Circle) */}
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 left-4 sm:left-6 pointer-events-auto group/bubble w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white shadow-[0_10px_24px_rgba(37,211,102,0.4),_0_2px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_35px_rgba(37,211,102,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 animate-bubble-1"
          aria-label="Connect on WhatsApp"
        >
          <WhatsAppIcon size={20} />
          {/* Tooltip */}
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/bubble:opacity-100 pointer-events-none transition-all duration-200 text-[9px] tracking-wider uppercase font-semibold bg-black text-white px-2 py-0.5 rounded whitespace-nowrap shadow-lg z-50">
            WhatsApp
          </span>
        </a>

        {/* Instagram (Top-Right of cluster - Official Gradient Squircle Shape) */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-0 right-4 sm:right-8 pointer-events-auto group/bubble w-12 h-12 sm:w-14 sm:h-14 rounded-[16px] sm:rounded-[18px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-[0_12px_28px_rgba(220,39,67,0.42),_0_2px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_36px_rgba(220,39,67,0.62)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 animate-bubble-2"
          aria-label="Follow on Instagram"
        >
          <InstagramIcon size={24} />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/bubble:opacity-100 pointer-events-none transition-all duration-200 text-[9px] tracking-wider uppercase font-semibold bg-black text-white px-2 py-0.5 rounded whitespace-nowrap shadow-lg z-50">
            Instagram
          </span>
        </a>

        {/* Facebook (Bottom-Left of cluster - Official Blue Circle) */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-24 left-10 sm:left-14 pointer-events-auto group/bubble w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1877F2] text-white shadow-[0_10px_24px_rgba(24,119,242,0.4),_0_2px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_35px_rgba(24,119,242,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 animate-bubble-3"
          aria-label="Follow on Facebook"
        >
          <FacebookIcon size={19} />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/bubble:opacity-100 pointer-events-none transition-all duration-200 text-[9px] tracking-wider uppercase font-semibold bg-black text-white px-2 py-0.5 rounded whitespace-nowrap shadow-lg z-50">
            Facebook
          </span>
        </a>

        {/* Pinterest (Bottom-Right of cluster - Official Red Circle) */}
        <a
          href="https://pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-20 right-0 sm:right-2 pointer-events-auto group/bubble w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#E60023] text-white shadow-[0_10px_24px_rgba(230,0,35,0.4),_0_2px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_35px_rgba(230,0,35,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 animate-bubble-4"
          aria-label="Discover on Pinterest"
        >
          <PinterestIcon size={19} />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/bubble:opacity-100 pointer-events-none transition-all duration-200 text-[9px] tracking-wider uppercase font-semibold bg-black text-white px-2 py-0.5 rounded whitespace-nowrap shadow-lg z-50">
            Pinterest
          </span>
        </a>

        {/* Decorative Floating Glass Micro-Bubbles */}
        <div className="absolute top-16 left-0 w-3.5 h-3.5 rounded-full bg-white/70 border transparent border-white/90 shadow-sm animate-bubble-3 pointer-events-none" />
        <div className="absolute top-10 right-0 w-2.5 h-2.5 rounded-full bg-white/60 border transparent border-white/80 shadow-sm animate-bubble-1 pointer-events-none" />
        <div className="absolute bottom-2 right-16 w-3 h-3 rounded-full bg-white/60 border transparent border-white/80 shadow-sm animate-bubble-2 pointer-events-none" />
        <div className="absolute bottom-1 left-6 w-2 h-2 rounded-full bg-white/50 border transparent border-white/70 shadow-sm animate-bubble-4 pointer-events-none" />
      </div>

      {/* Center Model Image - Enriched, Enchanced & Magnified */}
      <div
        data-scroll
        data-scroll-speed="0.08"
        className="absolute inset-0 flex items-end justify-center pointer-events-none z-10 opacity-100 translate-y-0"
      >
        <div
          className="relative w-[85%] sm:w-[68%] md:w-[56%] lg:w-[48%] xl:w-[44%] 2xl:w-[40%] h-[86%] sm:h-[89%] md:h-[92%] lg:h-[95%] transition-transform duration-200 ease-out will-change-transform"
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
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 56vw, 44vw"
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

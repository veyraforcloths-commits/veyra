"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeartIcon } from "../icons";

interface Product {
  id: string;
  name: string;
  category: "linen" | "tailored" | "silk" | "outerwear";
  subtitle: string;
  price: string;
  tag: string;
  image: string;
  colors: string[];
}

const products: Product[] = [
  {
    id: "prod-1",
    name: "ATELIER RELAXED LINEN SHIRT",
    category: "linen",
    subtitle: "Raw Normandy Flax • Ivory Crease",
    price: "$280",
    tag: "NEW ARRIVAL",
    image: "/images/linen_shirt.jpg",
    colors: ["#ece7e1", "#d6cec2", "#2a2a2a"],
  },
  {
    id: "prod-2",
    name: "ARCHITECTURAL SAND BLAZER",
    category: "tailored",
    subtitle: "Structured Virgin Wool • Sand Drape",
    price: "$620",
    tag: "ATELIER EDITION",
    image: "/images/oversized_blazer.jpg",
    colors: ["#d2bba0", "#1a1a1a", "#4a473f"],
  },
  {
    id: "prod-3",
    name: "MEDITERRANEAN SILK CAMP SHIRT",
    category: "silk",
    subtitle: "Hand-Woven Raw Silk • Sage Olive",
    price: "$340",
    tag: "SPRING '25",
    image: "/images/silk_shirt.jpg",
    colors: ["#6b7d60", "#ece7e1", "#8a7d65"],
  },
  {
    id: "prod-4",
    name: "FLUID DRAPE ATELIER TRENCH",
    category: "outerwear",
    subtitle: "Tailored Wool Blend • Obsidian",
    price: "$890",
    tag: "SIGNATURE PIECE",
    image: "/images/tailored_coat.jpg",
    colors: ["#0a0a0a", "#2f3336", "#8c8275"],
  },
];

const categories = [
  { key: "all", label: "ALL SILHOUETTES" },
  { key: "linen", label: "PURE LINEN" },
  { key: "tailored", label: "TAILORED" },
  { key: "silk", label: "RAW SILK" },
  { key: "outerwear", label: "OUTERWEAR" },
] as const;

export default function FeaturedCollection() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const [selectedColor, setSelectedColor] = useState<Record<string, number>>({});
  const [addedId, setAddedId] = useState<string | null>(null);

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleQuickAdd = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAddedId(id);
    setTimeout(() => setAddedId(null), 1800);
  };

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <section className="relative w-full bg-[var(--color-cream)] pt-12 pb-24 border-t border-black/[0.06] overflow-hidden">
      {/* 1. Atelier Marquee Ribbon Ticker */}
      <div className="w-full overflow-hidden border-b border-black/[0.06] pb-4 mb-16 select-none opacity-85">
        <div className="flex w-max animate-marquee whitespace-nowrap gap-12 text-[10px] md:text-[11px] tracking-[0.42em] uppercase font-light text-black/70">
          <span>HAUTE ARCHITECTURE • ATELIER 2025</span>
          <span>✦</span>
          <span>100% ORGANIC NORMANDY LINEN</span>
          <span>✦</span>
          <span>CRAFTED IN PARIS &amp; FLORENCE</span>
          <span>✦</span>
          <span>TIMELESS FORM • ZERO SYNTHETICS</span>
          <span>✦</span>
          <span>HAUTE ARCHITECTURE • ATELIER 2025</span>
          <span>✦</span>
          <span>100% ORGANIC NORMANDY LINEN</span>
          <span>✦</span>
          <span>CRAFTED IN PARIS &amp; FLORENCE</span>
          <span>✦</span>
          <span>TIMELESS FORM • ZERO SYNTHETICS</span>
          <span>✦</span>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
        {/* 2. Section Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-black/40" />
              <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-medium text-black/60">
                COLLECTION 01 • SPRING / SUMMER 2025
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[var(--color-black)] tracking-tight leading-[1.05]">
              CURATED SILHOUETTES
            </h2>
            <p className="mt-2 text-xs md:text-sm text-black/60 font-light max-w-md tracking-wide">
              Architectural cuts sculpted from breathable Normandy linen, raw mulberry silk, and structured virgin wool.
            </p>
          </div>

          {/* Minimalist Filter Navigation */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {categories.map((cat) => {
              const isActive = activeTab === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveTab(cat.key)}
                  className={`text-[10px] sm:text-[11px] tracking-[0.24em] uppercase px-3.5 py-1.5 rounded-full transition-all duration-300 font-medium ${
                    isActive
                      ? "bg-black text-white shadow-sm"
                      : "bg-black/[0.04] text-black/70 hover:bg-black/[0.08] hover:text-black"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. 4-Column Editorial Garment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {filteredProducts.map((product, index) => {
            const isWishlisted = !!wishlist[product.id];
            const isAdded = addedId === product.id;
            const activeColorIdx = selectedColor[product.id] || 0;
            const scrollSpeed = index % 2 === 1 ? "0.08" : "0.03";

            return (
              <div
                key={product.id}
                data-scroll
                data-scroll-speed={scrollSpeed}
                className="group relative flex flex-col bg-[var(--color-cream-light)]/60 rounded-[18px] p-3 border border-black/[0.05] transition-all duration-500 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1"
              >
                {/* Image Container with Luxury Aspect Ratio */}
                <div className="relative w-full aspect-[3/4] rounded-[14px] overflow-hidden bg-[#e5dfd7]">
                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[8.5px] font-semibold tracking-[0.2em] uppercase bg-white/90 backdrop-blur-md text-black px-2.5 py-1 rounded-full shadow-sm">
                      {product.tag}
                    </span>
                  </div>

                  {/* Wishlist Heart Button */}
                  <button
                    onClick={(e) => toggleWishlist(product.id, e)}
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-90 shadow-sm"
                    aria-label="Save to Wishlist"
                  >
                    <HeartIcon
                      size={15}
                      className={`transition-colors duration-300 ${
                        isWishlisted
                          ? "fill-[#dc2743] stroke-[#dc2743] text-[#dc2743]"
                          : "text-black/80 hover:text-black"
                      }`}
                    />
                  </button>

                  {/* Editorial Photo */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106 select-none"
                  />

                  {/* Quick Add To Bag Slide-Up Bar */}
                  <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <button
                      onClick={(e) => handleQuickAdd(product.id, e)}
                      className={`w-full py-2.5 rounded-xl text-[10px] tracking-[0.24em] uppercase font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2 ${
                        isAdded
                          ? "bg-[#25D366] text-white"
                          : "bg-black text-white hover:bg-neutral-800"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <span>✓ ADDED TO BAG</span>
                        </>
                      ) : (
                        <>
                          <span>+ QUICK ADD</span>
                          <span className="opacity-60">•</span>
                          <span>{product.price}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Product Metadata Details */}
                <div className="pt-4 pb-2 px-1 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-display font-medium text-sm md:text-[15px] tracking-wide text-black group-hover:text-black/80 transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-xs md:text-sm font-semibold tracking-wider text-black">
                        {product.price}
                      </span>
                    </div>

                    <p className="text-[11px] text-black/55 font-light tracking-wide mb-3">
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Color Palette Swatches */}
                  <div className="flex items-center justify-between pt-1 border-t border-black/[0.04]">
                    <div className="flex items-center gap-1.5">
                      {product.colors.map((color, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedColor((prev) => ({
                              ...prev,
                              [product.id]: idx,
                            }));
                          }}
                          className={`w-3.5 h-3.5 rounded-full border transition-all duration-200 ${
                            activeColorIdx === idx
                              ? "scale-115 border-black ring-1 ring-black/30"
                              : "border-black/20 hover:scale-105"
                          }`}
                          style={{ backgroundColor: color }}
                          aria-label={`Select color option ${idx + 1}`}
                        />
                      ))}
                    </div>

                    <Link
                      href={`/shop/${product.id}`}
                      className="text-[10px] tracking-[0.2em] font-medium text-black/60 hover:text-black uppercase transition-colors"
                    >
                      DETAILS →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Atelier Manifesto Split Banner */}
        <div
          data-scroll
          data-scroll-speed="-0.04"
          className="relative rounded-[24px] bg-[#141414] text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl"
        >
          {/* Subtle Ambient Radial Light */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/[0.06] blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block text-[9.5px] tracking-[0.4em] uppercase font-semibold text-white/50 mb-4">
                THE ATELIER PHILOSOPHY
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight leading-[1.15] text-[#f7f5f2]">
                "WE DO NOT FOLLOW FLEETING SEASONS. WE SCULPT PERMANENCE."
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-white/60 font-light max-w-xl leading-relaxed tracking-wide">
                Every VEYRA silhouette begins in our Parisian workshop as an architectural study. We source only harvest-certified European flax and unweighted silks, finished with hand-carved horn closures.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black text-xs tracking-[0.24em] font-semibold uppercase hover:bg-neutral-200 transition-all duration-300"
                >
                  <span>DISCOVER THE ATELIER</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/lookbook"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/50 text-xs tracking-[0.24em] font-light uppercase transition-all duration-300"
                >
                  <span>EXPLORE ARCHIVE '24</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>

            {/* 3 Metrics / Craftsmanship Pillars */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10">
              <div>
                <p className="text-2xl md:text-3xl font-display font-bold text-white tracking-wider">
                  100%
                </p>
                <p className="text-[10px] tracking-[0.26em] uppercase font-medium text-white/40 mt-1">
                  NORMANDY ORGANIC FLAX
                </p>
                <p className="text-xs text-white/60 font-light mt-1">
                  Naturally cooled, moisture-adaptive fiber.
                </p>
              </div>

              <div>
                <p className="text-2xl md:text-3xl font-display font-bold text-white tracking-wider">
                  0.0%
                </p>
                <p className="text-[10px] tracking-[0.26em] uppercase font-medium text-white/40 mt-1">
                  SYNTHETIC PLASTICS
                </p>
                <p className="text-xs text-white/60 font-light mt-1">
                  Pure biodegradable garments and horn buttons.
                </p>
              </div>

              <div>
                <p className="text-2xl md:text-3xl font-display font-bold text-white tracking-wider">
                  1 : 1
                </p>
                <p className="text-[10px] tracking-[0.26em] uppercase font-medium text-white/40 mt-1">
                  SINGLE TAILOR FINISH
                </p>
                <p className="text-xs text-white/60 font-light mt-1">
                  Each piece constructed end-to-end by one artisan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Minimalist Editorial Footer & Newsletter */}
        <footer className="mt-20 pt-12 border-t border-black/[0.08] flex flex-col md:flex-row items-center justify-between gap-8 text-black/60 text-xs select-none">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-lg tracking-wider text-black">
              VEYRA
            </span>
            <span className="text-black/30">|</span>
            <span className="text-[10px] tracking-[0.28em] uppercase font-light text-black/70">
              ATELIER PARIS • 2025
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] tracking-[0.2em] uppercase font-medium text-black/70">
            <Link href="/shop" className="hover:text-black transition-colors">
              COLLECTIONS
            </Link>
            <Link href="/about" className="hover:text-black transition-colors">
              ATELIER
            </Link>
            <Link href="/lookbook" className="hover:text-black transition-colors">
              LOOKBOOK
            </Link>
            <Link href="/stores" className="hover:text-black transition-colors">
              BOUTIQUES
            </Link>
            <Link href="/concierge" className="hover:text-black transition-colors">
              CONCIERGE
            </Link>
          </div>

          <p className="text-[10px] tracking-widest text-black/40 uppercase">
            © 2025 VEYRA. ALL RIGHTS RESERVED.
          </p>
        </footer>
      </div>
    </section>
  );
}

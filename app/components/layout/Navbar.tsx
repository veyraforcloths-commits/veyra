"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SearchIcon, MenuIcon, CloseIcon } from "../icons";

const navLinks = [
  { label: "CASUAL", href: "/casual" },
  { label: "FORMAL", href: "/formal" },
  { label: "LINEN", href: "/linen" },
  { label: "OVERSIZED", href: "/oversized" },
];

const rightLinks = [
  { label: "BLOGS", href: "/blogs" },
  { label: "LOOKBOOK", href: "/lookbook" },
  { label: "ABOUT", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled background styling threshold
      setScrolled(currentScrollY > 40);

      // Always show at top of page
      if (currentScrollY < 60) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Delta threshold to ignore minor vibrations / elastic bounce
      const diff = currentScrollY - lastScrollY.current;
      if (Math.abs(diff) > 6) {
        if (diff > 0 && currentScrollY > 80) {
          // Scrolling down -> hide navbar
          setVisible(false);
        } else if (diff < 0) {
          // Scrolling up -> show navbar
          setVisible(true);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 py-2 md:py-2.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-md will-change-transform ${
          visible || mobileOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"
        } ${
          scrolled
            ? "bg-[var(--color-cream)]/85 border-b border-black/[0.06] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)]"
            : "bg-[var(--color-cream)]/60 border-b border-black/[0.04]"
        }`}
      >
        <nav className="relative w-full max-w-[1600px] mx-auto flex items-center justify-between px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 h-10 md:h-12">
          {/* Left Nav */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[11px] lg:text-xs font-medium tracking-[0.2em] text-[var(--color-charcoal)] hover:text-black transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex items-center justify-center w-10 h-10 -ml-2"
            aria-label="Open menu"
          >
            <MenuIcon size={22} strokeWidth={1.2} />
          </button>

          {/* Center Brand Logo / Name */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center group py-1 select-none"
            aria-label="VEYRA Homepage"
          >
            <span className="text-lg sm:text-xl md:text-2xl font-display font-bold tracking-[0.24em] text-[var(--color-black)] transition-transform duration-300 group-hover:scale-[1.02]">
              VEYRA
            </span>
          </Link>

          {/* Right Links (Editorial & Search) */}
          <div className="flex items-center gap-5 lg:gap-7">
            {rightLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hidden md:inline-block text-[11px] lg:text-xs font-medium tracking-[0.2em] text-[var(--color-charcoal)] hover:text-black transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* Search - accessible on desktop with text, on mobile as icon */}
            <Link
              href="/search"
              className="flex items-center gap-1.5 text-[11px] lg:text-xs font-medium tracking-[0.2em] text-[var(--color-charcoal)] hover:text-black transition-colors duration-300 relative group"
              aria-label="Search"
            >
              <SearchIcon size={16} strokeWidth={1.3} />
              <span className="hidden md:inline">SEARCH</span>
              <span className="hidden md:inline absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-[var(--color-cream)] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between px-6 h-14">
          <span className="text-2xl tracking-[0.15em] font-display font-bold">VEYRA</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-10 h-10 flex items-center justify-center"
            aria-label="Close menu"
          >
            <CloseIcon size={22} strokeWidth={1.2} />
          </button>
        </div>

        <nav className="px-6 pt-8">
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-light tracking-[0.1em] text-black hover:opacity-60 transition-opacity duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 pt-8 border-t border-black/10 space-y-5">
            {rightLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm tracking-[0.2em] text-[var(--color-charcoal)] hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/search"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2.5 text-sm tracking-[0.2em] text-[var(--color-charcoal)] hover:text-black transition-colors"
            >
              <SearchIcon size={18} />
              <span>SEARCH</span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

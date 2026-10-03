"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SearchIcon, UserIcon, HeartIcon, CartIcon, MenuIcon, CloseIcon } from "../icons";

const navLinks = [
  { label: "CASUAL", href: "/casual" },
  { label: "FORMAL", href: "/formal" },
  { label: "LINEN", href: "/linen" },
  { label: "OVERSIZED", href: "/oversized" },
];

const actionLinks = [
  { label: "SEARCH", icon: SearchIcon, href: "/search" },
  { label: "LOGIN", icon: UserIcon, href: "/login" },
  { label: "WISHLIST", icon: HeartIcon, href: "/wishlist" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
        className={`fixed top-0 inset-x-0 z-50 py-2 md:py-2.5 transition-all duration-300 backdrop-blur-md ${
          scrolled
            ? "bg-[var(--color-cream)]/80 border-b border-black/[0.06] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)]"
            : "bg-[var(--color-cream)]/60 border-b border-black/[0.04]"
        }`}
      >
        <nav className="w-full max-w-[1600px] mx-auto flex items-center justify-between px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 h-10 md:h-12">
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



          {/* Right Actions */}
          <div className="flex items-center gap-4 lg:gap-6">
            {actionLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hidden md:flex items-center gap-1.5 text-[11px] font-medium tracking-[0.15em] text-[var(--color-charcoal)] hover:text-black transition-colors duration-300 group"
              >
                <item.icon size={16} strokeWidth={1.3} />
                <span>{item.label}</span>
              </Link>
            ))}

            {/* Cart - always visible */}
            <Link
              href="/cart"
              className="flex items-center gap-1.5 text-[11px] font-medium tracking-[0.15em] text-[var(--color-charcoal)] hover:text-black transition-colors duration-300"
            >
              <CartIcon size={16} strokeWidth={1.3} />
              <span className="hidden md:inline">CART</span>
              <span className="text-[10px]">(0)</span>
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
            {actionLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 text-sm tracking-[0.15em] text-[var(--color-charcoal)]"
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/areas", label: "Areas" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#141B2D]/95 backdrop-blur-md shadow-lg shadow-[#141B2D]/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#C84B31] transition-transform group-hover:scale-105">
              <span className="font-[var(--font-heading)] text-xl font-bold text-white">
                T&T
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="font-[var(--font-heading)] text-lg leading-tight text-white">
                T & T Construction
              </p>
              <p className="text-xs font-[var(--font-body)] tracking-widest uppercase text-[#E07A5F]">
                & Plumbing
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[var(--font-body)] text-sm font-medium tracking-wide text-[#B8C0D2] transition-colors hover:text-[#E07A5F] uppercase"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+17177767319"
              className="ml-2 inline-flex items-center gap-2 rounded-lg bg-[#C84B31] px-5 py-2.5 font-[var(--font-body)] text-sm font-semibold text-white transition-all hover:bg-[#E07A5F] pulse-copper"
            >
              <PhoneIcon />
              (717) 776-7319
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="tel:+17177767319"
              className="inline-flex items-center justify-center rounded-lg bg-[#C84B31] p-2.5 text-white"
              aria-label="Call us"
            >
              <PhoneIcon />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-[#141B2D]/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-4 py-3 font-[var(--font-body)] text-base font-medium text-[#D8DCE8] hover:bg-white/5 hover:text-[#E07A5F] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <a
                href="tel:+17177767319"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#C84B31] px-5 py-3 font-[var(--font-body)] text-base font-semibold text-white"
              >
                <PhoneIcon />
                Call (717) 776-7319
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

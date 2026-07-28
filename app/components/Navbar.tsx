"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "LADIES & KIDS", href: "/services" },
  { label: "GALLERY", href: "/gallery" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Track which hrefs have already been claimed as active
  // so only the FIRST matching item per route gets the active style
  const claimedActiveHrefs = new Set<string>();

  return (
    <>
      <header className="absolute top-0 left-0 z-50 w-full bg-gradient-to-b from-[#0A0807]/90 to-transparent">
        <div className="mx-auto flex h-32 max-w-[1440px] items-center justify-between px-6 sm:px-12 lg:px-20">
          {/* Logo Image */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/assets/noor_al_zahraa_logo.png"
              alt="Al Zahraa Ladies & Kids Dress Boutique"
              width={400}
              height={150}
              className="w-[160px] sm:w-[240px] h-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="ml-auto hidden items-center lg:flex">
            <nav className="flex items-center gap-8 xl:gap-10">
              {navItems.map((item) => {
                const matchesRoute = pathname === item.href;
                const active = matchesRoute && !claimedActiveHrefs.has(item.href);
                if (matchesRoute) claimedActiveHrefs.add(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`group relative pb-2 font-manrope text-[12px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${active
                        ? "text-[#C5A880]"
                        : "text-white/90 hover:text-[#C5A880]"
                      }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-[4px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#C5A880] transition-all duration-300 ${active ? "w-5" : "w-0 group-hover:w-5"
                        }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/contact"
              className="ml-10 rounded-md border border-[#C5A880]/60 px-6 py-2.5 font-manrope text-[12px] font-semibold uppercase tracking-widest text-[#C5A880] hover:bg-[#C5A880] hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              GET IN TOUCH <span className="text-[10px]">✦</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="ml-auto flex h-10 w-10 items-center justify-center text-white lg:hidden"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Mobile Drawer */}
      <nav
        id="mobile-menu"
        className={`fixed right-0 top-0 z-50 h-full w-[80vw] max-w-[320px] bg-[#0E0D0B] flex flex-col transform transition-transform duration-300 ease-in-out lg:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="flex h-24 items-center justify-between border-b border-[#C5A880]/15 px-6">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
              <circle cx="50" cy="50" r="44" stroke="#C5A880" strokeWidth="2" />
              <path d="M50 14 L53 23 L62 25 L55 31 L58 40 L50 35 L42 40 L45 31 L38 25 L47 23 Z" fill="#C5A880" />
              <text x="50" y="70" fill="#C5A880" fontSize="32" fontWeight="bold" fontFamily="Cormorant Garamond" textAnchor="middle">AZ</text>
            </svg>
            <div className="flex flex-col">
              <span className="font-cormorant text-md font-bold tracking-[0.05em] text-[#C5A880] leading-none">
                AL ZAHRAA
              </span>
            </div>
          </Link>
          <button
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5A880]/20 text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col gap-1 px-4 pt-6 pb-4 flex-1 overflow-y-auto">
          {(() => {
            const claimedMobile = new Set<string>();
            return navItems.map((item) => {
              const matchesRoute = pathname === item.href;
              const active = matchesRoute && !claimedMobile.has(item.href);
              if (matchesRoute) claimedMobile.add(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-xl px-5 py-4 font-manrope text-[13px] font-semibold uppercase tracking-[0.2em] transition-colors duration-200 ${active
                      ? "bg-[#C5A880]/10 text-[#C5A880]"
                      : "text-white/80 hover:bg-white/5 hover:text-[#C5A880]"
                    }`}
                >
                  {item.label}
                </Link>
              );
            });
          })()}
        </div>

        {/* Drawer CTA */}
        <div className="border-t border-[#C5A880]/15 px-6 py-6">
          <Link
            href="/contact"
            className="block w-full rounded-md border border-[#C5A880] py-3.5 text-center font-manrope text-[13px] font-semibold uppercase tracking-widest text-[#C5A880] transition-all duration-300 hover:bg-[#C5A880] hover:text-black"
          >
            GET IN TOUCH ✦
          </Link>
        </div>
      </nav>
    </>
  );
}
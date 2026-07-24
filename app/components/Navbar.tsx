"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "ABOUT US", href: "/about" },
  { label: "GALLERY", href: "/gallery" },
  { label: "OFFERS", href: "/offers" },
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

  return (
    <>
      <header className="absolute top-0 left-0 z-50 w-full">
        <div className="mx-auto flex h-20 sm:h-24 max-w-[1440px] items-center px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/assets/noor_al_zahraa_logo.png"
              alt="Noor Al Zahraa"
              width={220}
              height={80}
              priority
              className="h-auto w-[140px] sm:w-[170px] lg:w-[220px]"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="ml-auto hidden items-center lg:flex">
            <nav className="flex items-center gap-8 xl:gap-10">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative pb-2 font-manrope text-[13px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                      active
                        ? "text-[#E6C27A]"
                        : "text-white hover:text-[#E6C27A]"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-[6px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#E6C27A] transition-all duration-300 ${
                        active ? "w-5" : "w-0 group-hover:w-5"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/contact"
              className="ml-10 rounded-full bg-[#E6C27A] px-8 py-3 font-manrope text-[13px] font-semibold uppercase tracking-wide text-black transition-all duration-300 hover:scale-105 hover:bg-[#D8AF62]"
            >
              BOOK APPOINTMENT
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
              /* X icon */
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger icon */
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
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Drawer */}
      <nav
        id="mobile-menu"
        className={`fixed right-0 top-0 z-50 h-full w-[80vw] max-w-[320px] bg-[#0f0d0b] flex flex-col transform transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <Image
            src="/assets/noor_al_zahraa_logo.png"
            alt="Noor Al Zahraa"
            width={140}
            height={50}
            className="h-auto w-[120px]"
          />
          <button
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col gap-1 px-4 pt-6 pb-4 flex-1 overflow-y-auto">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-5 py-4 font-manrope text-[13px] font-semibold uppercase tracking-[0.2em] transition-colors duration-200 ${
                  active
                    ? "bg-[#E6C27A]/10 text-[#E6C27A]"
                    : "text-white/80 hover:bg-white/5 hover:text-[#E6C27A]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Drawer CTA */}
        <div className="border-t border-white/10 px-6 py-6">
          <Link
            href="/contact"
            className="block w-full rounded-full bg-[#E6C27A] py-3.5 text-center font-manrope text-[13px] font-semibold uppercase tracking-wide text-black transition-all duration-300 hover:bg-[#D8AF62]"
          >
            BOOK APPOINTMENT
          </Link>
        </div>
      </nav>
    </>
  );
}
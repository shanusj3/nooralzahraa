"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "SERVICES",
    href: "/services",
  },
  {
    label: "ABOUT US",
    href: "/about",
  },
  {
    label: "GALLERY",
    href: "/gallery",
  },
  {
    label: "OFFERS",
    href: "/offers",
  },
  {
    label: "CONTACT",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex h-24 max-w-[1440px] items-center px-8 lg:px-12">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/noor_al_zahraa_logo.png"
            alt="Noor Al Zahraa"
            width={220}
            height={80}
            priority
            className="h-auto w-[170px] lg:w-[220px]"
          />
        </Link>

        {/* Right Section */}
        <div className="ml-auto hidden items-center lg:flex">
          {/* Navigation */}
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

          {/* CTA */}
          <Link
            href="/contact"
            className="ml-10 rounded-full bg-[#E6C27A] px-8 py-3 font-manrope text-[13px] font-semibold uppercase tracking-wide text-black transition-all duration-300 hover:scale-105 hover:bg-[#D8AF62]"
          >
            BOOK APPOINTMENT
          </Link>
        </div>

        {/* Mobile Menu */}
        <button className="ml-auto flex h-10 w-10 items-center justify-center text-white lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
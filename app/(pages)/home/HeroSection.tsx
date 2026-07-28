import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#0A0807] flex items-center">
      {/* Background Mother-Daughter Image */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <Image
          src="/assets/hero_portrait.png"
          alt="Al Zahraa Mother and Daughter"
          fill
          priority
          className="object-cover object-[75%_center] md:object-[82%_center] select-none"
        />
      </div>

      {/* Dark gradient overlay for desktop */}
      <div
        className="absolute inset-0 z-15 pointer-events-none hidden md:block"
        style={{
          background: `linear-gradient(
            90deg,
            #0A0807 0%,
            #0A0807 35%,
            rgba(10, 8, 7, 0.98) 45%,
            rgba(10, 8, 7, 0.8) 55%,
            rgba(10, 8, 7, 0.4) 68%,
            rgba(10, 8, 7, 0.1) 82%,
            rgba(10, 8, 7, 0) 100%
          )`,
        }}
      />

      {/* Dark gradient overlay for mobile */}
      <div
        className="absolute inset-0 z-15 pointer-events-none md:hidden"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(10, 8, 7, 0.1) 0%,
            rgba(10, 8, 7, 0.3) 40%,
            rgba(10, 8, 7, 0.7) 70%,
            #0A0807 100%
          )`,
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-[80px] pointer-events-none z-15 bg-gradient-to-t from-[#0A0807] to-transparent" />

      {/* Content Container */}
      <div className="mx-auto max-w-[1440px] w-full px-6 sm:px-12 lg:px-20 pt-32 pb-24 relative z-20">
        <div className="max-w-[580px] flex flex-col items-center text-center md:items-start md:text-left">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[4px] text-[#C5A880] flex items-center gap-2">
            TIMELESS ELEGANCE <span className="text-[10px]">✦</span>
          </p>

          <h1 className="font-cormorant font-medium text-[#F7EFE6] text-[40px] sm:text-[52px] lg:text-[62px] leading-[1.08]">
            Elegance for
            <br />
            Every Woman.
          </h1>

          <h2 className="mt-3 font-allura italic text-[#C5A880] text-[34px] sm:text-[44px] lg:text-[52px] leading-none">
            Perfection for Every Little Princess.
          </h2>

          <div className="my-6 w-24 h-[1px] bg-[#C5A880]/30" />

          <p className="max-w-[460px] text-[15px] sm:text-[16px] leading-7 sm:leading-8 text-[#C9C1BA] mb-8">
            At Al Zahraa, we believe style is a reflection of confidence and grace. Designed for every special moment in your life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="rounded-md px-8 py-3.5 text-xs font-bold tracking-widest text-[#1A120D] text-center transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #DFBA8C, #C5A880)",
              }}
            >
              DISCOVER LADIES →
            </Link>

            <Link
              href="/services"
              className="rounded-md border border-[#C5A880] px-8 py-3.5 text-xs font-bold tracking-widest text-[#C5A880] text-center transition-all duration-300 hover:bg-[#C5A880]/10"
            >
              DISCOVER KIDS →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#090706] flex items-center justify-center">
      {/* Background Image */}
      {/* Desktop image position — face is ~65% from left */}
      <Image
        src="/assets/hero_section_image.webp"
        alt="Hero"
        fill
        priority
        className="object-cover object-[65%_25%] md:object-[76%_center] select-none"
      />

      {/* Gradient Overlay — darkens more on mobile for readability */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            90deg,
            rgba(9,7,6,.98) 0%,
            rgba(9,7,6,.95) 25%,
            rgba(9,7,6,.85) 45%,
            rgba(9,7,6,.65) 60%,
            rgba(9,7,6,.40) 75%,
            rgba(9,7,6,0)  100%
          )`,
        }}
      />
      {/* Mobile overlay — darken bottom half so text is readable, keep top (face) clearer */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(9,7,6,0.10) 0%,
            rgba(9,7,6,0.25) 35%,
            rgba(9,7,6,0.75) 60%,
            rgba(9,7,6,0.92) 100%
          )`,
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-[120px] pointer-events-none"
        style={{
          background: `linear-gradient(to top, #090706 0%, rgba(9,7,6,.9) 30%, transparent 100%)`,
        }}
      />

      {/* ── CONTENT ── */}
      {/* Mobile: full-width centered column | Desktop: left-aligned inside max-w container */}
      <div className="relative z-20 w-full">

        {/* Mobile layout — visible only below md */}
        <div className="flex flex-col items-center text-center px-6 pt-28 pb-40 md:hidden">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[6px] text-[#B99866]">
            EXPERT CARE. STUNNING YOU.
          </p>

          <h1 className="font-cormorant font-semibold text-[#F7EFE6] text-[40px] sm:text-[48px] leading-[1.05]">
            Hair, Beauty &amp;
            <br />
            Confidence
          </h1>

          <h2 className="mt-2 font-allura italic text-[#D6A69C] text-[30px] sm:text-[36px] leading-none">
            All in One Place
          </h2>

          <div className="my-5 flex items-center justify-center">
            <Image
              src="/assets/section_line.png"
              alt="Divider"
              width={300}
              height={28}
              className="h-auto w-[200px] sm:w-[240px]"
            />
          </div>

          <p className="max-w-[340px] sm:max-w-[400px] text-[15px] leading-7 text-[#C9C1BA]">
            From trendy haircuts to radiant skin, we bring out your best —
            every visit is a luxurious experience designed to make you feel
            confident, beautiful and unforgettable.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 w-full max-w-[320px]">
            <Link
              href="/contact"
              className="w-full rounded-full px-8 py-3.5 text-sm font-semibold text-center text-[#1A120D] transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg,#F6DF9E,#E6C27A,#D7B06A,#B98C52)",
                boxShadow: "0 12px 30px rgba(230,194,122,.25)",
              }}
            >
              BOOK APPOINTMENT →
            </Link>

            <Link
              href="/services"
              className="w-full rounded-full border border-[#B98C52] px-8 py-3.5 text-sm font-semibold text-center text-[#E6C27A] transition-all duration-300 hover:bg-[#E6C27A] hover:text-black"
            >
              EXPLORE SERVICES
            </Link>
          </div>
        </div>

        {/* Desktop layout — hidden below md */}
        <div className="hidden md:block mx-auto max-w-[1440px] px-12 lg:px-20 pt-[155px] pb-36">
          <div className="max-w-[560px]">
            <p className="mb-5 text-xs font-medium uppercase tracking-[8px] text-[#B99866]">
              EXPERT CARE. STUNNING YOU.
            </p>

            <h1 className="font-cormorant font-semibold text-[#F7EFE6] text-[50px] lg:text-[58px] xl:text-[64px] leading-[1.02]">
              Hair, Beauty &amp;
              <br />
              Confidence
            </h1>

            <h2 className="mt-1 font-allura italic text-[#D6A69C] text-[36px] lg:text-[44px] xl:text-[58px] leading-none">
              All in One Place
            </h2>

            <div className="my-4">
              <Image
                src="/assets/section_line.png"
                alt="Section Divider"
                width={300}
                height={28}
                className="h-auto w-[300px]"
              />
            </div>

            <p className="max-w-[470px] text-[17px] leading-8 text-[#C9C1BA]">
              From trendy haircuts to radiant skin, we bring out your best —
              every visit is a luxurious experience designed to make you
              feel confident, beautiful and unforgettable.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/contact"
                className="rounded-full px-8 py-3.5 font-semibold text-[#1A120D] transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg,#F6DF9E,#E6C27A,#D7B06A,#B98C52)",
                  boxShadow: "0 15px 35px rgba(230,194,122,.25)",
                }}
              >
                BOOK APPOINTMENT →
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-[#B98C52] px-8 py-3.5 font-semibold text-[#E6C27A] transition-all duration-300 hover:bg-[#E6C27A] hover:text-black"
              >
                EXPLORE SERVICES
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
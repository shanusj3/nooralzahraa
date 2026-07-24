import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[92vh] min-h-[780px] overflow-hidden bg-[#090706]">
      {/* Background Image */}
      <Image
        src="/assets/hero_section_image.png"
        alt="Hero"
        fill
        priority
        className="object-cover object-[76%_center] select-none"
      />

      {/* Left Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(9,7,6,.96) 0%,
              rgba(9,7,6,.94) 15%,
              rgba(9,7,6,.82) 28%,
              rgba(9,7,6,.60) 40%,
              rgba(9,7,6,.35) 52%,
              rgba(9,7,6,.12) 64%,
              rgba(9,7,6,0) 76%
            )
          `,
        }}
      />

      {/* Bottom Gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-[120px]"
        style={{
          background: `
            linear-gradient(
              to top,
              #090706 0%,
              rgba(9,7,6,.98) 18%,
              rgba(9,7,6,.90) 38%,
              rgba(9,7,6,.70) 58%,
              rgba(9,7,6,.35) 80%,
              transparent 100%
            )
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-20 mx-auto h-full max-w-[1440px] px-20">
        <div className="max-w-[560px] pt-[155px]">
          {/* Tagline */}
          <p className="mb-5 text-xs font-medium uppercase tracking-[8px] text-[#B99866]">
            EXPERT CARE. STUNNING YOU.
          </p>

          {/* Main Heading */}
          <h1
            className="
              font-cormorant
              font-semibold
              text-[#F7EFE6]
              text-[50px]
              lg:text-[58px]
              xl:text-[64px]
              leading-[1.02]
            "
          >
            Hair, Beauty &
            <br />
            Confidence
          </h1>

          {/* Script Heading */}
          <h2
            className="
              mt-1
              font-allura
              italic
              text-[#D6A69C]
              text-[36px]
              lg:text-[44px]
              xl:text-[58px]
              leading-none
            "
          >
            All in One Place
          </h2>

          {/* Divider */}
          <div className="my-4">
            <Image
              src="/assets/section_line.png"
              alt="Section Divider"
              width={300}
              height={28}
              className="h-auto w-[300px]"
            />
          </div>

          {/* Description */}
          <p className="max-w-[470px] text-[17px] leading-8 text-[#C9C1BA]">
            From trendy haircuts to radiant skin, we bring out your best —
            every visit is a luxurious experience designed to make you
            feel confident, beautiful and unforgettable.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4">
            <Link
              href="/contact"
              className="
                rounded-full
                px-8
                py-3.5
                font-semibold
                text-[#1A120D]
                transition-all
                duration-300
                hover:scale-105
              "
              style={{
                background:
                  "linear-gradient(135deg,#F6DF9E,#E6C27A,#D7B06A,#B98C52)",
                boxShadow:
                  "0 15px 35px rgba(230,194,122,.25)",
              }}
            >
              BOOK APPOINTMENT →
            </Link>

            <button
              className="
                rounded-full
                border
                border-[#B98C52]
                px-8
                py-3.5
                font-semibold
                text-[#E6C27A]
                transition-all
                duration-300
                hover:bg-[#E6C27A]
                hover:text-black
              "
            >
              EXPLORE SERVICES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
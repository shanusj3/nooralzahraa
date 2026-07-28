import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 py-20 bg-[#FBF9F6] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40" />

      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-[#B99866] flex items-center gap-1.5">
            OUR STORY <span className="text-[10px]">✦</span>
          </p>

          <h2 className="font-cormorant font-semibold text-[#241B14] text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.1] mb-6">
            Where Tradition
            <br />
            Meets Modern Elegance
          </h2>

          <p className="max-w-[480px] text-[15px] sm:text-[16px] leading-7 sm:leading-8 text-[#5C4F44] mb-8">
            Al Zahraa is more than a name—it's a promise of quality, femininity and timeless beauty. We bring you thoughtfully crafted designs for women and children, inspired by modesty, culture and contemporary fashion.
          </p>

          <Link
            href="/about"
            className="rounded-md border border-[#B99866] px-8 py-3.5 text-xs font-bold tracking-widest text-[#B99866] hover:bg-[#B99866] hover:text-white transition-all duration-300"
          >
            READ OUR STORY →
          </Link>
        </div>

        {/* Right Column: Arched Image with Decorative Line Art */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          {/* Left Leaf Ornament (SVG line art) */}
          <div className="absolute left-4 lg:left-12 top-1/4 w-24 h-48 pointer-events-none opacity-60">
            <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-[#B99866]/40" strokeWidth="1">
              <path d="M10 190 C 30 150, 40 100, 35 40 M35 40 C 45 60, 50 80, 45 100 M35 40 C 20 60, 15 80, 25 100 M35 70 C 55 90, 60 110, 50 130 M35 70 C 15 90, 10 110, 20 130 M35 110 C 50 130, 55 150, 45 170 M35 110 C 20 130, 15 150, 25 170" />
            </svg>
          </div>

          {/* Right Dot Grid Accent */}
          <div className="absolute right-4 lg:right-12 bottom-10 w-[70px] h-[120px] pointer-events-none opacity-40 flex flex-wrap gap-2.5 content-start">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#B99866]" />
            ))}
          </div>

          {/* Arched Image Wrapper */}
          <div className="relative w-[280px] h-[370px] sm:w-[320px] sm:h-[420px] rounded-t-full overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] border-4 border-white">
            <Image
              src="/assets/about_hijab_arched.jpg"
              alt="Al Zahraa Model in Elegant Hijab"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
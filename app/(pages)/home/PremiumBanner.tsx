import Image from 'next/image';
import Link from 'next/link';

export default function PremiumBanner() {
  return (
    <section className="w-full px-4 py-8 md:py-12 bg-[#F5ECE1]">
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row relative overflow-hidden rounded-[20px] bg-[#1a1714] min-h-[320px] sm:min-h-[360px] md:min-h-[400px]">

        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src="/images/premium_banner.png"
              alt="Luxury Salon"
              fill
              className="object-cover object-center md:object-right"
            />
            {/* Gradient: full overlay on mobile, left-fade on desktop */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1714]/80 via-[#1a1714]/60 to-[#1a1714]/85 md:bg-none" />
            <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#1a1714] via-[#1a1714]/80 to-transparent" />
          </div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex w-full flex-col justify-center items-center md:items-start text-center md:text-left px-6 py-12 sm:px-8 sm:py-14 md:w-1/2 md:px-12 lg:py-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-[4px] text-[#B99866]">
            BECAUSE YOU DESERVE IT
          </p>

          <h2 className="mb-2 font-cormorant text-[36px] sm:text-[42px] font-medium leading-tight text-white md:text-[50px] lg:text-[56px]">
            Premium Services.
          </h2>

          <h3 className="mb-8 sm:mb-10 font-allura text-[36px] sm:text-[42px] leading-none text-[#B99866] md:text-[50px] lg:text-[60px]">
            Unforgettable You.
          </h3>

          <Link
            href="/contact"
            className="
              rounded-full
              bg-[#B99866]
              px-8
              py-3.5
              text-sm
              font-semibold
              tracking-wide
              text-white
              transition-all
              duration-300
              hover:bg-[#8A6738]
            "
          >
            BOOK YOUR APPOINTMENT →
          </Link>
        </div>

      </div>
    </section>
  );
}

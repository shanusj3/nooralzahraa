import React from 'react';
import AnimateOnScroll from '@/app/components/AnimateOnScroll';

export default function ServicesHero() {
  return (
    <section className="relative w-full bg-[#1a1714] pt-40 pb-24 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#B99866]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[#B99866]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center text-center">
        <AnimateOnScroll className="flex flex-col items-center text-center" threshold={0.05}>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#B99866]">
            LUXURY EXPERIENCES
          </p>

          <h1 className="mb-6 font-cormorant text-[44px] font-medium leading-tight text-white md:text-[60px] lg:text-[72px]">
            Our Services
          </h1>

          <h2 className="font-allura text-[36px] text-[#B99866] md:text-[50px]">
            Tailored to Your Elegance
          </h2>

          <div className="my-10 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#B99866]/40" />
            <span className="text-[#B99866]">✦</span>
            <span className="h-px w-16 bg-[#B99866]/40" />
          </div>

          <p className="max-w-[600px] text-[16px] leading-relaxed text-gray-300">
            Discover our comprehensive range of premium beauty treatments. Each service is
            meticulously designed to enhance your natural beauty and provide an unforgettable
            experience of relaxation and luxury.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

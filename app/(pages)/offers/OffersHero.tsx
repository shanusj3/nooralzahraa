import React from 'react';

export default function OffersHero() {
  return (
    <section className="relative w-full bg-[#1a1714] pt-40 pb-24 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-1/3 h-full bg-[#B99866]/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#B99866]">
          EXQUISITE DESIGNS
        </p>
        
        <h1 className="mb-6 font-cormorant text-[50px] font-medium leading-tight text-white md:text-[60px] lg:text-[72px]">
          Exclusive Offers
        </h1>
        
        <div className="my-6 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-[#B99866]/40" />
          <span className="text-[#B99866]">✦</span>
          <span className="h-px w-16 bg-[#B99866]/40" />
        </div>
        
        <p className="max-w-[600px] text-[16px] leading-relaxed text-gray-300">
          Discover our thoughtfully curated fashion packages and seasonal design specials. Treat yourself or your children to custom tailored outfits and styling consultations at an exceptional value.
        </p>
      </div>
    </section>
  );
}

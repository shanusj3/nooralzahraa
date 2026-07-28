import React from 'react';

export default function AboutHero() {
  return (
    <section className="relative w-full bg-[#1a1714] pt-40 pb-24 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[#B99866]/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-[#B99866]/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#B99866]">
          THE NOOR AL ZAHRAA BOUTIQUE
        </p>
        
        <h1 className="mb-6 font-cormorant text-[50px] font-medium leading-tight text-white md:text-[60px] lg:text-[72px]">
          Our Story
        </h1>
        
        <h2 className="font-allura text-[40px] text-[#B99866] md:text-[50px]">
          Where Fashion Meets Elegance
        </h2>
        
        <div className="my-10 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-[#B99866]/40" />
          <span className="text-[#B99866]">✦</span>
          <span className="h-px w-16 bg-[#B99866]/40" />
        </div>
        
        <p className="max-w-[650px] text-[16px] leading-relaxed text-gray-300">
          Founded on a passion for bespoke fashion, premium tailoring, and exceptional design, Noor Al Zahraa Ladies & Kids Boutique has become a premier destination for women seeking unique, custom-made clothing and beautiful kids collections. We believe that fine tailoring is an art form, and we craft every piece with precision, love, and expertise.
        </p>
      </div>
    </section>
  );
}

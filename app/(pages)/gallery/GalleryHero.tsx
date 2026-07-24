import React from 'react';

export default function GalleryHero() {
  return (
    <section className="relative w-full bg-[#1a1714] pt-40 pb-24 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-1/4 w-1/3 h-full bg-[#B99866]/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#B99866]">
          MASTERPIECES OF BEAUTY
        </p>
        
        <h1 className="mb-6 font-cormorant text-[50px] font-medium leading-tight text-white md:text-[60px] lg:text-[72px]">
          Our Portfolio
        </h1>
        
        <div className="my-6 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-[#B99866]/40" />
          <span className="text-[#B99866]">✦</span>
          <span className="h-px w-16 bg-[#B99866]/40" />
        </div>
        
        <p className="max-w-[600px] text-[16px] leading-relaxed text-gray-300">
          Explore a curated collection of our finest work. From transformative color treatments to flawless bridal makeup, our portfolio is a testament to the artistry and dedication of the Noor Al Zahraa team.
        </p>
      </div>
    </section>
  );
}

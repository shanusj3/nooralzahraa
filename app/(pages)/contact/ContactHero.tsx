import React from 'react';

export default function ContactHero() {
  return (
    <section className="relative w-full bg-[#1a1714] pt-40 pb-24 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#B99866]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-[#B99866]/5 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#B99866]">
          WE ARE HERE FOR YOU
        </p>
        
        <h1 className="mb-6 font-cormorant text-[50px] font-medium leading-tight text-white md:text-[60px] lg:text-[72px]">
          Get in Touch
        </h1>
        
        <div className="my-6 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-[#B99866]/40" />
          <span className="text-[#B99866]">✦</span>
          <span className="h-px w-16 bg-[#B99866]/40" />
        </div>
        
        <p className="max-w-[600px] text-[16px] leading-relaxed text-gray-300">
          Whether you want to book an appointment, inquire about our bridal packages, or simply have a question about our services, our team is ready to assist you.
        </p>
      </div>
    </section>
  );
}

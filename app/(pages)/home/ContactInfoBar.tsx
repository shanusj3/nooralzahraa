import React from 'react';

export default function ContactInfoBar() {
  return (
    <section className="w-full bg-[#F5ECE1] py-12 px-4 border-t border-[#EADFCF]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 md:flex-row md:gap-16 lg:gap-28">
        
        {/* Item 1: Phone */}
        <div className="flex items-center gap-4">
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-[1.5px] border-[#B99866] text-[#B99866]">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <div>
            <p className="text-[17px] font-semibold text-[#241B14]">
              056 372 8991
            </p>
            <p className="text-[13px] text-[#5C4F44] mt-0.5">
              Call us for appointments
            </p>
          </div>
        </div>

        {/* Item 2: Location */}
        <div className="flex items-center gap-4">
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-[1.5px] border-[#B99866] text-[#B99866]">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div>
            <p className="text-[17px] font-semibold text-[#241B14]">
              Sharjah, United Arab Emirates
            </p>
            <p className="text-[13px] text-[#5C4F44] mt-0.5">
              We can't wait to welcome you
            </p>
          </div>
        </div>

        {/* Item 3: Hours */}
        <div className="flex items-center gap-4">
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-[1.5px] border-[#B99866] text-[#B99866]">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <div>
            <p className="text-[17px] font-semibold text-[#241B14]">
              10:00 AM - 10:00 PM
            </p>
            <p className="text-[13px] text-[#5C4F44] mt-0.5">
              Saturday to Thursday
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

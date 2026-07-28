import React from 'react';

export default function ContactInfoBar() {
  return (
    <section className="w-full bg-[#F5ECE1] py-12 px-4 border-t border-[#EADFCF]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 md:flex-row md:gap-16 lg:gap-28">
        
        {/* Item 1: Phone & WhatsApp */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-2">
             <div className="flex items-center gap-3">
              <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#B99866] text-[#B99866]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <a href="tel:+971558813966" className="text-[15px] font-semibold text-[#241B14] hover:text-[#B99866] transition-colors">055 881 3966</a>
                <a href="tel:+971563728991" className="text-[15px] font-semibold text-[#241B14] hover:text-[#B99866] transition-colors">+971 56 372 8991</a>
              </div>
            </div>
            
            <a 
              href="https://wa.me/971563728991" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-1 flex items-center gap-2 text-[14px] font-semibold text-[#25D366] hover:opacity-80 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
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

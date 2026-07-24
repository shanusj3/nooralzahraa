import Image from 'next/image';
import Link from 'next/link';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About Us', href: '/about' },
  { label: 'Offers', href: '/offers' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#F5ECE1] pt-16 pb-8 px-4 text-[#5C4F44] overflow-hidden">
      <div className="mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-[#EADFCF] pb-12 relative z-10">
          
          {/* Left: Logo */}
          <div className="flex w-full justify-center md:justify-start items-center">
            <Image
              src="/assets/noor_al_zahraa_logo.png"
              alt="Noor Al Zahraa Logo"
              width={300}
              height={120}
              className="h-auto w-[250px] lg:w-[280px]"
            />
          </div>

          {/* Middle: Quick Links */}
          <div className="flex w-full flex-col items-center md:items-center md:border-l border-[#EADFCF]">
            <div className="flex flex-col items-start">
              <h4 className="mb-6 text-[13px] font-bold uppercase tracking-[0.15em] text-[#241B14]">
                QUICK LINKS
              </h4>
              <div className="grid grid-cols-2 gap-x-16 gap-y-4">
                {quickLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="text-sm font-medium transition-colors hover:text-[#B99866]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Follow Us */}
          <div className="flex w-full flex-col items-center md:items-end md:border-l border-[#EADFCF] md:pr-4">
            <div className="flex flex-col items-start md:items-end">
              <h4 className="mb-6 text-[13px] font-bold uppercase tracking-[0.15em] text-[#241B14]">
                FOLLOW US
              </h4>
              <div className="flex gap-4">
                {/* Instagram */}
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EADFCF] text-[#B99866] transition-colors hover:bg-[#B99866] hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                {/* Facebook */}
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EADFCF] text-[#B99866] transition-colors hover:bg-[#B99866] hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                {/* TikTok (simple icon) */}
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EADFCF] text-[#B99866] transition-colors hover:bg-[#B99866] hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                </a>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-8 flex flex-col items-center justify-center text-center relative z-10">
          <div className="mb-4 text-[#B99866]">
            {/* Small decorative ornament */}
            <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5L15 0L17.5 5L15 10L20 5ZM20 5L25 0L22.5 5L25 10L20 5Z" fill="#B99866" />
                <line x1="0" y1="5" x2="15" y2="5" stroke="#B99866" strokeWidth="0.5"/>
                <line x1="25" y1="5" x2="40" y2="5" stroke="#B99866" strokeWidth="0.5"/>
            </svg>
          </div>
          <p className="text-[13px]">
            © 2024 Noor Al Zahraa Ladies Salon. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

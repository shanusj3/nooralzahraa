import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Home",        href: "/"        },
  { label: "About Us",    href: "/about"   },
  { label: "Ladies & Kids", href: "/services" },
  { label: "Gallery",     href: "/gallery" },
  { label: "Contact",     href: "/contact" },
];

const helpLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "FAQ", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0E0D0B] pt-16 pb-8 px-6 sm:px-12 text-[#DDD6CB] border-t border-[#C5A880]/15">
      <div className="mx-auto max-w-7xl">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-[#C5A880]/10 pb-12">
          
          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col items-start lg:col-span-1">
            <Link href="/" className="mb-6 block">
              <Image
                src="/assets/noor_al_zahraa_logo.png"
                alt="Al Zahraa Ladies & Kids Dress Boutique"
                width={500}
                height={180}
                className="w-[220px] sm:w-[320px] h-auto object-contain"
                style={{ mixBlendMode: "screen" }}
              />
            </Link>
            <p className="text-xs text-[#C9C1BA]/80 leading-relaxed max-w-[220px]">
              Celebrating femininity and childhood with modest, elegant and premium quality fashion.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start">
            <h4 className="mb-6 text-[12px] font-bold uppercase tracking-[0.15em] text-[#C5A880]">
              QUICK LINKS
            </h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-xs hover:text-[#C5A880] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Help Links */}
          <div className="flex flex-col items-start">
            <h4 className="mb-6 text-[12px] font-bold uppercase tracking-[0.15em] text-[#C5A880]">
              HELP
            </h4>
            <div className="flex flex-col gap-3">
              {helpLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-xs hover:text-[#C5A880] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col items-start">
            <h4 className="mb-6 text-[12px] font-bold uppercase tracking-[0.15em] text-[#C5A880]">
              CONTACT US
            </h4>
            <div className="flex flex-col gap-4 text-xs">
              <div className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <div className="flex flex-col gap-1">
                  <a href="tel:+971558813966" className="hover:text-[#C5A880] transition-colors">055 881 3966</a>
                  <a href="tel:+971563728991" className="hover:text-[#C5A880] transition-colors">+971 56 372 8991</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>info@alzahraa.ae</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Sharjah, UAE</span>
              </div>
            </div>
          </div>

          {/* Column 5: Follow Us */}
          <div className="flex flex-col items-start lg:items-end">
            <div className="flex flex-col items-start">
              <h4 className="mb-6 text-[12px] font-bold uppercase tracking-[0.15em] text-[#C5A880]">
                FOLLOW US
              </h4>
              <div className="flex gap-4">
                {/* Facebook */}
                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C5A880]/10 text-[#C5A880] transition-colors hover:bg-[#C5A880] hover:text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                {/* Instagram */}
                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C5A880]/10 text-[#C5A880] transition-colors hover:bg-[#C5A880] hover:text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                {/* TikTok */}
                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C5A880]/10 text-[#C5A880] transition-colors hover:bg-[#C5A880] hover:text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                </a>
                {/* WhatsApp */}
                <a href="https://wa.me/971563728991" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C5A880]/10 text-[#C5A880] transition-colors hover:bg-[#C5A880] hover:text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="mt-8 flex flex-col items-center justify-center text-center">
          <p className="text-[11px] text-[#DDD6CB]/50">
            © 2026 Al Zahraa. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

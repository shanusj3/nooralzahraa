import Image from "next/image";
import type { Metadata } from "next";
import ShareButton from "./ShareButton";

export const metadata: Metadata = {
  title: "Noor Al Zahraa Boutique | Digital Profile Card",
  description:
    "Connect with Noor Al Zahraa Boutique, Sharjah. Save our contact, message us on WhatsApp, and follow us on social media.",
};

const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Phone = () => (
  <svg {...iconProps}><rect width="14" height="20" x="5" y="2" rx="2" /><path d="M12 18h.01" /></svg>
);
const WhatsApp = () => (
  <svg {...iconProps}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
);
const Mail = () => (
  <svg {...iconProps}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);
const Pin = () => (
  <svg {...iconProps}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);
const Facebook = () => (
  <svg {...iconProps}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const Instagram = () => (
  <svg {...iconProps}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);
const TikTok = () => (
  <svg {...iconProps}><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
);
const Chevron = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
);

const socials = [
  { label: "WhatsApp", href: "https://wa.me/971563728991", icon: <WhatsApp /> },
  { label: "Facebook", href: "https://www.facebook.com/share/1CT4goKSa4/", icon: <Facebook /> },
  { label: "Instagram", href: "https://www.instagram.com/alzahraa_boutique.ae", icon: <Instagram /> },
  { label: "TikTok", href: "https://www.tiktok.com/@al.zahraa547?_r=1&_t=ZS-9AZqkwqGrob", icon: <TikTok /> },
];

const contacts = [
  { label: "055 881 3966", href: "tel:+971558813966", icon: <Phone /> },
  { label: "+971 56 372 8991", href: "tel:+971563728991", icon: <Phone /> },
  { label: "Connect On WhatsApp", href: "https://wa.me/971563728991", icon: <WhatsApp /> },
  { label: "contact.alzahraa@gmail.com", href: "mailto:contact.alzahraa@gmail.com", icon: <Mail /> },
  { label: "Sharjah, United Arab Emirates", href: "https://maps.google.com/?q=Sharjah+United+Arab+Emirates", icon: <Pin /> },
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-black sm:py-8">
      <div className="mx-auto min-h-screen w-full max-w-[480px] overflow-hidden bg-[#0A0807] pb-10 font-manrope text-[#F5ECE1] sm:min-h-0 sm:rounded-3xl sm:border sm:border-[#C5A880]/30 sm:shadow-[0_0_60px_rgba(197,168,128,0.15)]">
        {/* Banner */}
        <div className="relative h-52 w-full">
          <Image
            src="/images/premium_banner.png"
            alt="Noor Al Zahraa Boutique collection"
            fill
            priority
            sizes="480px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0807] via-transparent to-transparent" />
        </div>

        {/* Profile card */}
        <section className="relative z-10 -mt-24 px-4">
          <div className="grid h-52 grid-cols-2 overflow-hidden rounded-[28px] border border-[#C5A880]/60 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-center bg-black p-4">
              <Image
                src="/assets/noor_al_zahraa_logo.png"
                alt="Noor Al Zahraa logo"
                width={180}
                height={180}
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center border-l border-[#C5A880]/40 bg-gradient-to-br from-[#1A1511] to-[#0E0907] p-5">
              <h1 className="text-[22px] font-extrabold uppercase leading-tight text-[#C5A880]">
                Noor Al Zahraa Boutique
              </h1>
              <p className="mt-3 flex items-center gap-1.5 text-sm text-[#F5ECE1]">
                <span className="scale-75 text-[#C5A880]"><Pin /></span> Sharjah, UAE
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-5 flex gap-3">
            <a
              id="profile-save-contact"
              href="/noor-al-zahraa.vcf"
              download
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C5A880] to-[#B99866] py-3.5 text-[15px] font-semibold text-black transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              <svg {...iconProps} width={20} height={20}><rect width="20" height="14" x="2" y="5" rx="2" /><circle cx="8" cy="11" r="2" /><path d="M14 10h4M14 14h4M5 17c.5-1.5 1.5-2 3-2s2.5.5 3 2" /></svg>
              Save Contact
            </a>
            <ShareButton />
          </div>
        </section>

        <div className="px-5">
          {/* Social */}
          <h2 className="mt-8 text-[15px] font-bold text-[#C5A880]">Social Networks</h2>
          <div className="mt-4 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C5A880]/40 bg-[#14100D] text-[#C5A880] transition-all hover:-translate-y-1 hover:bg-[#C5A880] hover:text-black"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Contact info */}
          <h2 className="mt-8 text-[15px] font-bold text-[#C5A880]">Contact info.</h2>
          <ul className="mt-2">
            {contacts.map((c) => (
              <li key={c.label} className="border-b border-[#C5A880]/20 last:border-0">
                <a
                  href={c.href}
                  className="group flex items-center gap-4 py-4 transition-colors hover:text-[#C5A880]"
                >
                  <span className="text-[#C5A880]">{c.icon}</span>
                  <span className="flex-1 break-all text-[15px] font-bold">{c.label}</span>
                  <span className="text-[#C5A880]/60 transition-transform group-hover:translate-x-1"><Chevron /></span>
                </a>
              </li>
            ))}
          </ul>

          {/* About */}
          <h2 className="mt-8 text-[15px] font-bold uppercase text-[#C5A880]">About Us</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#CFC3B4]">
            Noor Al Zahraa is a premium boutique in Sharjah offering ladies designer wear,
            kids festive collections, bridal couture and custom tailoring.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-[#CFC3B4]">
            From elegant abayas to professional alterations, every piece is crafted with
            care, so you can step out feeling radiant for every occasion.
          </p>
        </div>
      </div>
    </main>
  );
}

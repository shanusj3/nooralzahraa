import React from "react";

const features = [
  {
    title: "PREMIUM QUALITY",
    description: "Finest fabrics and attention to every detail",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
        <path d="M3 16h18" />
        <path d="M12 16v4" />
        <path d="M8 20h8" />
      </svg>
    ),
  },
  {
    title: "ELEGANT DESIGNS",
    description: "Thoughtfully designed for every occasion",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 10h6l-1 8h-4z" />
        <path d="M12 2v8" />
        <path d="M9 4a3 3 0 0 1 6 0" />
        <path d="M12 18v4" />
        <path d="M10 22h4" />
      </svg>
    ),
  },
  {
    title: "EXPERT CRAFTSMANSHIP",
    description: "Perfect stitching with a personal touch",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18h18" />
        <path d="M7 18V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12" />
        <path d="M15 8h4" />
        <circle cx="12" cy="11" r="2" />
        <path d="M12 13v5" />
      </svg>
    ),
  },
  {
    title: "MADE WITH LOVE",
    description: "Crafted for comfort, made to make you shine",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
];

export default function ServicesBar() {
  return (
    <section className="w-full bg-[#0E0D0B] text-white py-12 px-6 sm:px-12 border-y border-[#C5A880]/15">
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
        {features.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center px-6 lg:border-r border-[#C5A880]/15 last:border-0`}
          >
            {/* ICON wrapper */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#C5A880]/5 text-[#C5A880]">
              {item.icon}
            </div>

            <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#C5A880] mb-2">
              {item.title}
            </h3>

            <p className="text-xs text-[#DDD6CB] max-w-[200px] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
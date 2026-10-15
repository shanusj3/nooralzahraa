"use client";

import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    const data = { title: "Noor Al Zahraa Boutique", url };
    if (navigator.share) {
      try {
        await navigator.share(data);
        return;
      } catch {
        /* user cancelled */
        return;
      }
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      id="profile-share"
      onClick={handleShare}
      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#C5A880] bg-black py-3.5 text-[15px] font-semibold text-[#C5A880] transition-all hover:-translate-y-0.5 hover:bg-[#C5A880] hover:text-black"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
      </svg>
      {copied ? "Link Copied!" : "Share"}
    </button>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function GalleryPreviewSection() {
  return (
    <section className="w-full bg-[#0A0807] py-20 px-6 sm:px-12 lg:px-20 text-white">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-[#C5A880]">
            ✦ OUR COLLECTIONS ✦
          </p>
          <h2 className="font-cormorant text-[36px] sm:text-[44px] font-medium leading-tight text-white">
            Curated Just For You
          </h2>
          <div className="my-5 flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-[#C5A880]/30" />
            <span className="text-[#C5A880] text-xs">✦</span>
            <span className="h-[1px] w-12 bg-[#C5A880]/30" />
          </div>
        </div>

        {/* Collections Grid (Two Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Ladies Collection */}
          <div className="group relative w-full aspect-[264/134] sm:aspect-[1.8/1] overflow-hidden rounded-2xl border border-[#C5A880]/15 shadow-2xl">
            <Image
              src="/assets/collection_ladies.jpg"
              alt="Ladies Collection"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0807]/90 via-[#0A0807]/40 to-transparent" />
            
            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-end items-start text-left p-6 sm:p-8">
              <h3 className="font-cormorant text-[28px] sm:text-[36px] lg:text-[42px] font-bold uppercase leading-[1.05] text-white mb-2">
                LADIES<br />COLLECTION
              </h3>
              <p className="font-allura italic text-[#C5A880] text-lg sm:text-xl mb-5">
                Graceful. Timeless. You.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-sm border border-white/60 bg-black/30 backdrop-blur-sm px-6 py-2.5 text-[11px] font-bold tracking-[3px] text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                EXPLORE NOW <span className="text-base">→</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Kids Collection */}
          <div className="group relative w-full aspect-[264/134] sm:aspect-[1.8/1] overflow-hidden rounded-2xl border border-[#C5A880]/15 shadow-2xl">
            <Image
              src="/assets/collection_kids.jpg"
              alt="Kids Collection"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0807]/90 via-[#0A0807]/40 to-transparent" />
            
            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-end items-start text-left p-6 sm:p-8">
              <h3 className="font-cormorant text-[28px] sm:text-[36px] lg:text-[42px] font-bold uppercase leading-[1.05] text-white mb-2">
                KIDS<br />COLLECTION
              </h3>
              <p className="font-allura italic text-[#C5A880] text-lg sm:text-xl mb-5">
                Little Styles. Big Dreams.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-sm border border-white/60 bg-black/30 backdrop-blur-sm px-6 py-2.5 text-[11px] font-bold tracking-[3px] text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                EXPLORE NOW <span className="text-base">→</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

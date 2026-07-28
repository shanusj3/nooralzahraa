import Image from 'next/image';

const allImages = [
  { src: '/images/gallery_bridal_1_1785247795685.png', alt: 'Luxury Bridal Lehenga', category: 'Bridal Wear' },
  { src: '/images/gallery_ladies_1_1785247816751.png', alt: 'Emerald Silk Evening Gown', category: 'Ladies Wear' },
  { src: '/images/gallery_accessories_1_1785247836272.png', alt: 'Designer Bridal Clutch', category: 'Accessories' },
  { src: '/assets/about_hijab_arched.jpg', alt: 'Elegant Hijab Dress', category: 'Ladies Wear' },
  { src: '/images/premium_banner.png', alt: 'Intricate Dress Embroidery', category: 'Bridal Wear' },
  { src: '/images/gallery_hair.png', alt: 'Bespoke Evening Gown Fitting', category: 'Ladies Wear' },
  { src: '/images/gallery_nails.png', alt: 'Festive Wear details', category: 'Accessories' },
  { src: '/images/gallery_spa.png', alt: 'Kids Designer Wear', category: 'Kids Wear' },
  { src: '/images/gallery_makeup.png', alt: 'Elegant Salwar Kameez', category: 'Ladies Wear' },
];

export default function GalleryGrid() {
  return (
    <section className="w-full bg-[#F5ECE1] py-24 px-4">
      <div className="mx-auto max-w-7xl">
        
        {/* Simple Filter placeholder (UI only for now) */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['ALL', 'LADIES WEAR', 'KIDS WEAR', 'BRIDAL WEAR', 'ACCESSORIES'].map((filter, i) => (
            <button 
              key={i}
              className={`px-6 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${i === 0 ? 'bg-[#241B14] text-white' : 'bg-transparent text-[#5C4F44] border border-[#EADFCF] hover:border-[#B99866] hover:text-[#B99866]'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {allImages.map((img, idx) => (
            <div key={idx} className="group relative w-full aspect-square overflow-hidden rounded-2xl bg-gray-200 cursor-pointer">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <span className="text-white text-sm font-semibold tracking-widest uppercase">{img.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
            <button className="rounded-full border border-[#B99866] bg-transparent px-10 py-4 text-sm font-semibold tracking-widest text-[#B99866] uppercase transition-colors duration-300 hover:bg-[#B99866] hover:text-white">
              Load More
            </button>
        </div>

      </div>
    </section>
  );
}

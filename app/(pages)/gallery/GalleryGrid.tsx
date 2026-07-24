import Image from 'next/image';

const allImages = [
  { src: '/images/gallery_hair.png', alt: 'Hair Styling', category: 'Hair' },
  { src: '/images/gallery_makeup.png', alt: 'Makeup Artistry', category: 'Makeup' },
  { src: '/images/gallery_nails.png', alt: 'Nail Art', category: 'Nails' },
  { src: '/images/gallery_spa.png', alt: 'Spa Treatment', category: 'Spa' },
  { src: '/images/gallery1.png', alt: 'Haircuts', category: 'Hair' },
  { src: '/images/gallery2.png', alt: 'Hair Color', category: 'Hair' },
  { src: '/images/gallery3.png', alt: 'Hair Spa', category: 'Spa' },
  { src: '/images/gallery4.png', alt: 'Facials', category: 'Spa' },
  { src: '/images/gallery5.png', alt: 'Nail Art 2', category: 'Nails' },
];

export default function GalleryGrid() {
  return (
    <section className="w-full bg-[#F5ECE1] py-24 px-4">
      <div className="mx-auto max-w-7xl">
        
        {/* Simple Filter placeholder (UI only for now) */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['ALL', 'HAIR', 'MAKEUP', 'NAILS', 'SPA'].map((filter, i) => (
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

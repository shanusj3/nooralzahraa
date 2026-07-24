import Image from 'next/image';
import Link from 'next/link';

const galleryItems = [
  { src: '/images/gallery_hair.png', alt: 'Luxurious Hair Styling' },
  { src: '/images/gallery_makeup.png', alt: 'Elegant Makeup' },
  { src: '/images/gallery_nails.png', alt: 'Minimalist Nail Art' },
  { src: '/images/gallery_spa.png', alt: 'Relaxing Spa Treatment' },
];

export default function GalleryPreviewSection() {
  return (
    <section className="w-full bg-[#1a1714] py-20 px-4">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <p className="mb-4 text-xs font-medium uppercase tracking-[4px] text-[#B99866]">
            OUR WORK
          </p>
          <h2 className="font-cormorant text-[40px] font-medium leading-tight text-white md:text-[50px]">
            Follow Us On Instagram
          </h2>
          <div className="my-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#B99866]/60" />
            <span className="text-[#B99866]">✦</span>
            <span className="h-px w-10 bg-[#B99866]/60" />
          </div>
          <p className="max-w-[500px] text-[15px] leading-relaxed text-gray-400">
            Get inspired by our latest transformations. Follow our journey and discover the artistry behind every look we create.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-900 aspect-square cursor-pointer">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="#"
            className="rounded-full border border-[#B99866] bg-transparent px-8 py-3.5 text-sm font-semibold tracking-wide text-[#B99866] transition-colors duration-300 hover:bg-[#B99866] hover:text-white"
          >
            @NOORALZAHRAA
          </Link>
        </div>

      </div>
    </section>
  );
}

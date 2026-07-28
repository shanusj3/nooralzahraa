import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Ladies Designer Couture',
    description: 'Transform your wardrobe with our bespoke ladies designer wear. From elegant evening gowns and traditional ethnic wear to modern chic ensembles, we tailor every dress to complement your style and provide the perfect fit.',
    features: ['Custom Tailoring & Stitching', 'Premium Bridal Collections', 'Designer Salwar Suits & Sarees', 'Bespoke Evening Gowns'],
    image: '/images/gallery_makeup.png',
    reverse: false,
  },
  {
    title: 'Kids Festive & Casual Wear',
    description: 'Dress your little ones in comfort and style. Our kids collection features premium fabrics, adorable designs, and comfortable fits for boys and girls, perfect for daily wear, festive celebrations, and special occasions.',
    features: ['Festive & Eid Outfits', 'Comfortable Daily Wear', 'Custom Sizing & Fits', 'Premium Soft Fabrics'],
    image: '/images/gallery_spa.png',
    reverse: true,
  },
  {
    title: 'Bridal & Occasion Couture',
    description: 'Make your special day unforgettable with our custom bridal and festive wear. We design intricate lehengas, heavy anarkalis, and stunning gowns, handcrafted with beautiful embroidery, beadwork, and premium embellishments.',
    features: ['Custom Bridal Lehenga', 'Handcrafted Embroidery & Zardozi', 'Festive Anarkalis & Gowns', 'Personalized Design Consultations'],
    image: '/images/gallery_hair.png',
    reverse: false,
  },
  {
    title: 'Accessories & Custom Fittings',
    description: 'Complete your outfit with our handpicked collection of matching clutches, jewelry, and luxury stoles. We also provide precise alteration services to ensure that any of your outfits fit you like a dream.',
    features: ['Luxury Clutches & Handbags', 'Matching Hijabs & Stoles', 'Bespoke Alteration Services', 'Curated Statement Jewelry'],
    image: '/images/gallery_nails.png',
    reverse: true,
  }
];

export default function ServiceList() {
  return (
    <section className="w-full bg-[#F5ECE1] py-24 px-4">
      <div className="mx-auto max-w-7xl flex flex-col gap-24 lg:gap-32">
        
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`flex flex-col gap-12 lg:gap-20 items-center ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
          >
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-[4/5] max-h-[600px] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xl font-allura text-[#B99866]">0{index + 1}</span>
                <span className="h-px w-12 bg-[#B99866]" />
              </div>
              
              <h3 className="font-cormorant text-[36px] font-semibold text-[#241B14] mb-6 md:text-[42px] leading-tight">
                {service.title}
              </h3>
              
              <p className="text-[16px] leading-relaxed text-[#5C4F44] mb-8">
                {service.description}
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#241B14] font-medium text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B99866" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div>
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-[#241B14] px-8 py-4 text-xs font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:bg-[#B99866]"
                >
                  Inquire / Book Consultation
                </Link>
              </div>
            </div>
            
          </div>
        ))}
        
      </div>
    </section>
  );
}

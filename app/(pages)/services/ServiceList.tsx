import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Hair Care & Styling',
    description: 'Transform your look with our expert hair stylists. From precision cuts and vibrant color treatments to luxurious blowouts and restorative spa therapies, we tailor every service to complement your personal style and enhance your natural beauty.',
    features: ['Precision Haircuts', 'Custom Coloring & Highlights', 'Luxurious Blowouts', 'Restorative Hair Spa'],
    image: '/images/gallery_hair.png',
    reverse: false,
  },
  {
    title: 'The Nail Bar',
    description: 'Experience the ultimate pampering for your hands and feet. Our nail bar offers meticulous manicures and pedicures, intricate nail art, and durable gel and acrylic enhancements, ensuring your nails always make a statement.',
    features: ['Classic & Spa Manicures', 'Luxury Pedicures', 'Gel & Acrylic Enhancements', 'Custom Nail Art'],
    image: '/images/gallery_nails.png',
    reverse: true,
  },
  {
    title: 'Makeup & Bridal Artistry',
    description: 'Whether it is for a special evening, a professional photoshoot, or your wedding day, our makeup artists create flawless, glowing looks. We specialize in enhancing your features with premium products for a finish that lasts all day and night.',
    features: ['Event & Evening Makeup', 'Complete Bridal Packages', 'Contour & Highlighting', 'Lash Enhancements'],
    image: '/images/gallery_makeup.png',
    reverse: false,
  },
  {
    title: 'Spa & Skin Rejuvenation',
    description: 'Step into a world of tranquility. Our spa treatments and facials are designed to rejuvenate your skin and relax your mind. Let our aestheticians assess your skin and deliver customized treatments that leave you glowing from within.',
    features: ['Deep Cleansing Facials', 'Anti-Aging Treatments', 'Relaxing Massages', 'Skin Rejuvenation Therapy'],
    image: '/images/gallery_spa.png',
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
                  Book This Service
                </Link>
              </div>
            </div>
            
          </div>
        ))}
        
      </div>
    </section>
  );
}

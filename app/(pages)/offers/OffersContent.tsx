import Image from 'next/image';

const offers = [
  {
    title: 'The Bridal Glow Package',
    description: 'Prepare for your special day with our ultimate bridal package. Includes a full hair spa, premium facial, elegant bridal makeup trial, and a classic manicure & pedicure.',
    price: '$299',
    originalPrice: '$450',
    image: '/images/gallery_makeup.png',
  },
  {
    title: 'Weekday Spa Retreat',
    description: 'Escape the weekday stress. Book any 60-minute relaxing massage and receive a complimentary deep-cleansing express facial.',
    price: '$120',
    originalPrice: '$180',
    image: '/images/gallery_spa.png',
  },
  {
    title: 'Color & Cut Transformation',
    description: 'Ready for a new look? Enjoy a full balayage or color treatment, complete with a precision haircut and a luxurious blowout.',
    price: '$180',
    originalPrice: '$240',
    image: '/images/gallery_hair.png',
  }
];

export default function OffersContent() {
  return (
    <section className="w-full bg-[#F5ECE1] py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {offers.map((offer, idx) => (
            <div key={idx} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-[#EADFCF]/50 group">
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-[#B99866] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  Special Offer
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-cormorant text-[28px] font-semibold text-[#241B14] mb-3 leading-tight">
                  {offer.title}
                </h3>
                
                <p className="text-[#5C4F44] text-[15px] leading-relaxed mb-8 flex-grow">
                  {offer.description}
                </p>
                
                <div className="flex items-end justify-between mt-auto pt-6 border-t border-[#EADFCF]/50">
                  <div className="flex flex-col">
                    <span className="text-gray-400 line-through text-sm font-medium">{offer.originalPrice}</span>
                    <span className="text-[#241B14] font-bold text-2xl">{offer.price}</span>
                  </div>
                  
                  <button className="rounded-full bg-[#241B14] px-6 py-2.5 text-xs font-semibold tracking-widest text-white uppercase transition-colors duration-300 hover:bg-[#B99866]">
                    Claim Offer
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

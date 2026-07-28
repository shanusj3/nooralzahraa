import AnimateOnScroll from '@/app/components/AnimateOnScroll';

export default function TestimonialSection() {
  const testimonials = [
    {
      name: 'Sarah M.',
      service: 'Custom Tailored Gown',
      review: '"Absolutely amazing experience! The dress fits perfectly and the embroidery details are breathtaking. Noor Al Zahraa Boutique is my absolute favorite place now."',
      rating: 5,
    },
    {
      name: 'Aisha K.',
      service: 'Kids Festive Outfits',
      review: '"I bought matching outfits for my children for Eid. The fabrics are incredibly soft, comfortable, and the design details are absolutely beautiful. Highly recommend!"',
      rating: 5,
    },
    {
      name: 'Fatima R.',
      service: 'Bridal Lehenga Couture',
      review: '"They made my dream wedding outfit a reality. The fit was flawless, the zardozi handwork was stunning, and the process was so personal and stress-free. Thank you!"',
      rating: 5,
    }
  ];

  return (
    <section className="w-full bg-[#F5ECE1] py-24 px-4">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <AnimateOnScroll className="flex flex-col items-center text-center mb-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-[4px] text-[#B99866]">
            TESTIMONIALS
          </p>
          <h2 className="font-cormorant text-[40px] font-medium leading-tight text-[#241B14] md:text-[50px]">
            What Our Clients Say
          </h2>
          <div className="my-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#B99866]/60" />
            <span className="text-[#B99866]">✦</span>
            <span className="h-px w-10 bg-[#B99866]/60" />
          </div>
        </AnimateOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <AnimateOnScroll key={idx} delay={`delay-${(idx + 1) * 100}` as any} className="flex flex-col items-center text-center bg-white rounded-2xl p-10 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-[#EADFCF]/50">
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#B99866" stroke="#B99866" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-[#5C4F44] text-[15px] italic leading-relaxed mb-8">
                {item.review}
              </p>
              
              {/* Client Info */}
              <div className="mt-auto">
                <h4 className="font-semibold text-[#241B14] text-[16px]">{item.name}</h4>
                <p className="text-xs text-[#B99866] mt-1 uppercase tracking-widest">{item.service}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}

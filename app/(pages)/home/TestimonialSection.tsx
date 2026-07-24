export default function TestimonialSection() {
  const testimonials = [
    {
      name: 'Sarah M.',
      service: 'Hair Styling & Color',
      review: '"Absolutely amazing experience! The staff was incredibly welcoming, and my hair has never looked better. The attention to detail is truly unmatched."',
      rating: 5,
    },
    {
      name: 'Aisha K.',
      service: 'Bridal Makeup',
      review: '"They made my special day even more perfect. The makeup was flawless and lasted all night. Highly recommend for any bride-to-be!"',
      rating: 5,
    },
    {
      name: 'Fatima R.',
      service: 'Luxury Spa Day',
      review: '"The most relaxing spa day I have ever had. The ambiance is so luxurious and calming. I left feeling completely rejuvenated."',
      rating: 5,
    }
  ];

  return (
    <section className="w-full bg-[#F5ECE1] py-24 px-4">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
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
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center bg-white rounded-2xl p-10 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-[#EADFCF]/50">
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

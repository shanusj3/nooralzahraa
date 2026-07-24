import Image from 'next/image';

export default function AboutContent() {
  const coreValues = [
    {
      title: 'Expertise & Artistry',
      description: 'Our team comprises highly trained professionals dedicated to mastering the latest trends and timeless techniques in beauty.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B99866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      )
    },
    {
      title: 'Premium Products',
      description: 'We believe that exceptional results require exceptional tools. We use only the finest, carefully curated luxury beauty products.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B99866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"/><path d="M15 7h6v6"/></svg>
      )
    },
    {
      title: 'Luxurious Sanctuary',
      description: 'Step into a world designed for your relaxation. Our salon is a calm, elegant space where you can unwind and be pampered.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B99866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      )
    }
  ];

  return (
    <section className="w-full bg-[#F5ECE1] py-24 px-4">
      <div className="mx-auto max-w-7xl flex flex-col gap-32">
        
        {/* Story Section - Split Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/5] max-h-[600px] overflow-hidden rounded-2xl shadow-2xl">
              {/* Reusing the spa image as a beautiful mood setter */}
              <Image
                src="/images/gallery_spa.png"
                alt="Luxurious Salon Experience"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 border-[8px] border-white/20 rounded-2xl m-4 pointer-events-none" />
            </div>
          </div>
          
          {/* Text Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="font-cormorant text-[40px] font-semibold text-[#241B14] mb-8 md:text-[48px] leading-tight">
              A Legacy of <span className="font-allura text-[#B99866] font-normal text-[50px] md:text-[60px] inline-block ml-2">Beauty</span>
            </h3>
            
            <p className="text-[16px] leading-relaxed text-[#5C4F44] mb-6">
              At Noor Al Zahraa Ladies Salon, we believe that beauty is deeply personal. What started as an intimate studio dedicated to excellence has blossomed into one of the city's most sought-after luxury beauty destinations.
            </p>
            
            <p className="text-[16px] leading-relaxed text-[#5C4F44] mb-10">
              Our vision was simple: to create a space where women could step away from the demands of daily life and immerse themselves in an environment of total luxury and care. Every detail of our salon, from the lighting to the treatments, has been meticulously crafted to provide an unparalleled experience of elegance and rejuvenation.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#B99866]">
                 {/* Reusing makeup image for founder/stylist vibe */}
                <Image src="/images/gallery_makeup.png" alt="Founder" fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-semibold text-[#241B14] text-[18px]">Noor Al Zahraa</h4>
                <p className="text-[#B99866] text-sm uppercase tracking-widest mt-1">Founder & Lead Stylist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="flex flex-col items-center">
          <div className="text-center mb-16">
             <h3 className="font-cormorant text-[36px] font-semibold text-[#241B14] md:text-[42px]">
              Our Core Values
            </h3>
            <div className="my-6 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#B99866]/60" />
              <span className="text-[#B99866]">✦</span>
              <span className="h-px w-10 bg-[#B99866]/60" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {coreValues.map((val, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-8 bg-white/50 rounded-2xl border border-[#EADFCF] transition-all hover:bg-white hover:shadow-xl">
                <div className="w-16 h-16 rounded-full bg-[#EADFCF] text-[#B99866] flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h4 className="font-semibold text-[#241B14] text-[20px] mb-4">{val.title}</h4>
                <p className="text-[#5C4F44] text-[15px] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

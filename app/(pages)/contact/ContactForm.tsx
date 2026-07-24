import React from 'react';

export default function ContactForm() {
  return (
    <section className="w-full bg-[#F5ECE1] py-24 px-4">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Contact Information */}
        <div className="w-full lg:w-5/12 flex flex-col">
          <h2 className="font-cormorant text-[40px] font-semibold text-[#241B14] mb-8 leading-tight">
            Contact Information
          </h2>
          <p className="text-[#5C4F44] text-[16px] leading-relaxed mb-12">
            Visit our luxurious salon in the heart of the city, or reach out to us via phone or email. We look forward to welcoming you.
          </p>
          
          <div className="flex flex-col gap-8">
            {/* Address */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-white border border-[#EADFCF] flex items-center justify-center flex-shrink-0 text-[#B99866]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <h4 className="font-bold text-[#241B14] mb-1">Our Location</h4>
                <p className="text-[#5C4F44]">Sharjah, United Arab Emirates</p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-white border border-[#EADFCF] flex items-center justify-center flex-shrink-0 text-[#B99866]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-[#241B14] mb-1">Call Us</h4>
                <p className="text-[#5C4F44]">+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-white border border-[#EADFCF] flex items-center justify-center flex-shrink-0 text-[#B99866]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <h4 className="font-bold text-[#241B14] mb-1">Email Us</h4>
                <p className="text-[#5C4F44]">bookings@nooralzahraa.com<br/>info@nooralzahraa.com</p>
              </div>
            </div>
          </div>
          
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-7/12">
          <div className="bg-white p-10 md:p-12 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-[#EADFCF]/50">
            <h3 className="font-cormorant text-[32px] font-semibold text-[#241B14] mb-8">Send Us a Message</h3>
            
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[#241B14]">Your Name</label>
                  <input type="text" className="w-full border-b border-[#EADFCF] bg-transparent py-3 text-[#5C4F44] focus:outline-none focus:border-[#B99866] transition-colors" placeholder="Jane Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[#241B14]">Your Email</label>
                  <input type="email" className="w-full border-b border-[#EADFCF] bg-transparent py-3 text-[#5C4F44] focus:outline-none focus:border-[#B99866] transition-colors" placeholder="jane@example.com" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#241B14]">Service Requested (Optional)</label>
                <select className="w-full border-b border-[#EADFCF] bg-transparent py-3 text-[#5C4F44] focus:outline-none focus:border-[#B99866] transition-colors appearance-none">
                  <option>Hair Styling & Color</option>
                  <option>Bridal Makeup</option>
                  <option>Nail Art & Care</option>
                  <option>Spa & Facial</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#241B14]">Your Message</label>
                <textarea rows={4} className="w-full border-b border-[#EADFCF] bg-transparent py-3 text-[#5C4F44] focus:outline-none focus:border-[#B99866] transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="button" className="mt-4 rounded-full bg-[#241B14] px-10 py-4 text-xs font-semibold tracking-widest text-white uppercase transition-colors duration-300 hover:bg-[#B99866] self-start">
                Send Message
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </section>
  );
}

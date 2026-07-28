import Image from "next/image";

export default function PremiumBanner() {
  return (
    <section className="w-full bg-[#F5EFE6] border-t border-b border-[#B99866]/20 overflow-hidden">
      <div className="flex flex-row items-stretch min-h-[180px] sm:min-h-[220px]">

        {/* Left Image — Shopping Bag */}
        <div className="relative w-[28%] sm:w-[30%] flex-shrink-0 hidden sm:block">
          <Image
            src="/assets/promo_bag_premium.png"
            alt="Al Zahraa Shopping Bag"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Center: Text */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-10 py-10 sm:py-12">
          <h2 className="font-cormorant text-[26px] sm:text-[34px] lg:text-[40px] font-semibold text-[#241B14] leading-[1.2] mb-3">
            For Every Occasion.
            <br />
            For Every You.
          </h2>

          <p className="max-w-[380px] text-[13px] sm:text-[14px] text-[#5C4F44] leading-relaxed mb-5">
            From everyday elegance to life&apos;s most special moments,
            we&apos;re here to make every outfit unforgettable.
          </p>

          <div className="flex items-center gap-3">
            <span className="h-[0.5px] w-10 bg-[#B99866]/60" />
            <span className="text-[#B99866] text-[12px]">✦</span>
            <span className="h-[0.5px] w-10 bg-[#B99866]/60" />
          </div>
        </div>

        {/* Right Image — Price Tag on Silk */}
        <div className="relative w-[28%] sm:w-[30%] flex-shrink-0 hidden sm:block">
          <Image
            src="/assets/promo_tag_premium.png"
            alt="Al Zahraa Brand Tag"
            fill
            className="object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
}

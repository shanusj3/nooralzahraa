import Image from "next/image";

const gallery = [
  { src: "/images/gallery1.png", label: "HAIRCUTS" },
  { src: "/images/gallery2.png", label: "HAIR COLOR" },
  { src: "/images/gallery3.png", label: "HAIR SPA" },
  { src: "/images/gallery4.png", label: "FACIALS" },
  { src: "/images/gallery5.png", label: "NAIL ART" },
];

export default function AboutServices() {
  return (
    <section className="w-full px-4 py-20 bg-[#F5ECE1]">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-14 lg:flex-row lg:items-start lg:gap-10">
        {/* LEFT: TEXT */}
        <div className="flex w-full flex-col items-center text-center lg:w-1/2">
          <p className="mb-5 text-xs font-medium uppercase tracking-[8px] text-[#B99866]">
            BEAUTY TAILORED FOR YOU
          </p>

          {/* Main Heading */}
          <h1
            className="
              font-cormorant
              font-semibold
              text-[#241B14]
              text-[42px]
              lg:text-[50px]
              xl:text-[56px]
              leading-[1.05]
            "
          >
            Your Style, Your Glow,
          </h1>

          {/* Script Heading */}
          <h2
            className="
              mt-1
              font-allura
              italic
              text-[#B99866]
              text-[40px]
              lg:text-[50px]
              xl:text-[60px]
              leading-none
            "
          >
            Our Expertise
          </h2>

          {/* Divider */}
          <div className="my-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#B99866]/60" />
            <span className="text-[#B99866]">✦</span>
            <span className="h-px w-10 bg-[#B99866]/60" />
          </div>

          {/* Description */}
          <p className="max-w-[470px] text-[16px] leading-8 text-[#5C4F44]">
            From trendy haircuts to radiant skin, we bring out your best —
            every visit is a luxurious experience designed to make you
            feel confident, beautiful and unforgettable.
          </p>

          {/* CTA Button */}
          <div className="mt-9">
            <button
              className="
                rounded-full
                border
                border-[#B99866]
                px-8
                py-3.5
                text-sm
                font-semibold
                tracking-wide
                text-[#8A6738]
                transition-all
                duration-300
                hover:bg-[#B99866]
                hover:text-white
              "
            >
              EXPLORE ALL SERVICES →
            </button>
          </div>
        </div>

        {/* RIGHT: IMAGE GALLERY */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-start justify-center gap-3 sm:gap-4">
            {gallery.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div
                  className="
                    relative
                    w-[70px]
                    h-[260px]
                    overflow-hidden
                    rounded-none
                    bg-[#EADFCF]
                    shadow-[0_15px_30px_rgba(0,0,0,.12)]
                    sm:w-[90px]
                    sm:h-[300px]
                    lg:w-[100px]
                    lg:h-[320px]
                  "
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#8A6738] whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";

const services = [
  {
    title: "HAIRCUT &\nSTYLING",
    subtitle: "Look your best",
    image: "/assets/haircut_and_styling.png",
  },
  {
    title: "HAIR\nCOLORING",
    subtitle: "Refresh your look",
    image: "/assets/hair_coloring.png",
  },
  {
    title: "HAIR\nTREATMENTS",
    subtitle: "Nourish & Repair",
    image: "/assets/HAIR_TREATMENTS.png",
  },
  {
    title: "SKIN\nCARE",
    subtitle: "Glow naturally",
    image: "/assets/SKIN_CARE.png",
  },
  {
    title: "NAIL\nART",
    subtitle: "Beautiful details",
    image: "/assets/NAIL_ART.png",
  },
  {
    title: "BRIDAL\nSERVICES",
    subtitle: "For your big day",
    image: "/assets/BRIDAL_SERVICES.png",
  },
];

export default function ServicesBar() {
  return (
    <section className="w-full flex justify-center px-4 py-10 mt-[-8%]">
      {/* GOLDEN GRADIENT BORDER WRAPPER */}
      <div
        className="
          w-full
          max-w-6xl
          rounded-[28px]
          p-[1.5px]
          bg-[linear-gradient(135deg,#F4E2B8_0%,#C9963E_25%,#8A6738_50%,#E6C17B_75%,#F4E2B8_100%)]
          shadow-[0_20px_60px_rgba(0,0,0,.45)]
        "
      >
        <div
          className="
            relative
            w-full
            overflow-hidden
            rounded-[27px]
            bg-[#171411]

            before:absolute
            before:inset-0
            before:bg-[radial-gradient(circle_at_bottom,rgba(166,118,56,.18),transparent_60%)]
            before:pointer-events-none

            after:absolute
            after:bottom-0
            after:left-0
            after:right-0
            after:h-32
            after:bg-gradient-to-t
            after:from-[#8C6030]/20
            after:via-[#5C3F20]/10
            after:to-transparent
            after:pointer-events-none
          "
        >
          {/* Extra soft corner glows */}
          <div className="absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-[#D9A55A]/10 blur-[120px]" />
          <div className="absolute -right-28 top-0 h-72 w-72 rounded-full bg-[#D9A55A]/10 blur-[120px]" />

          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center justify-center px-6 py-8 text-center ${
                  index !== services.length - 1
                    ? "border-r border-[#8A6738]/25"
                    : ""
                }`}
              >
                {/* IMAGE PLACEHOLDER */}
                <div className="mb-5 flex h-16 w-24 items-center justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={96}
                    height={64}
                    className="object-contain"
                  />
                </div>

                <h3 className="whitespace-pre-line text-[18px] font-medium uppercase tracking-[0.08em] leading-6 text-[#E6C17B]">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-[#DDD6CB]">
                  {service.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
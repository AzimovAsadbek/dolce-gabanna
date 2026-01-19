import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroBannerKirish({
  title = "Denim Collection",
  description = "An enigmatic and contemporary collection that exalts nautical style through meticulous fabrics, prints, and precise forms.",
  image = "/denim.jpg",
  primaryAction = { label: "View Collection", href: "#" },
  secondaryAction = { label: "Buy Now", href: "#" },
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#F2F2F2] flex flex-col md:h-[885px]">
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center pt-20 pb-12 px-6 text-center md:absolute md:inset-0 md:items-end md:justify-end md:text-left md:pb-32 md:px-24 md:max-w-[1440px] md:mx-auto">
        <div className="w-full md:w-1/2 lg:w-3/12">
          <h2 className="text-[40px] leading-[1.1] font-medium text-black mb-6 md:text-6xl lg:text-7xl tracking-tight">
            {title}
          </h2>

          <p className="text-base text-black/70 mb-10 max-w-[300px] mx-auto leading-relaxed md:text-xl md:max-w-sm md:mx-0">
            {description}
          </p>

          <div className="flex flex-col gap-6 items-center w-full md:flex-row md:gap-8 md:justify-start">
            <Link href={primaryAction.href} className="w-full md:w-auto">
              <Button className="w-full bg-[#1A1A1A] text-white hover:bg-black rounded-lg px-10 py-7 text-lg md:rounded-sm max-w-[180px]">
                {primaryAction.label}
              </Button>
            </Link>

            {secondaryAction && (
              <Link href={secondaryAction.href}>
                <span className="text-lg text-black hover:underline underline-offset-4">
                  {secondaryAction.label}
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="relative w-full h-[450px] md:absolute md:inset-0 md:h-full">
        <div className="relative w-full h-full md:w-[75%]">
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 75vw"
            quality={75}
            className="object-cover object-top"
          />

          {/* MOBILE GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F2F2F2] via-transparent to-transparent md:hidden" />

          {/* DESKTOP GRADIENT */}
          <div
            className="hidden md:block absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(242,242,242,0) 0%, rgba(242,242,242,0) 65%, #F2F2F2 90%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
export default HeroBannerKirish;

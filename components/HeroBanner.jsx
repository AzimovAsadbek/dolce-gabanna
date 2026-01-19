import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroBanner({
  title,
  description,
  image,
  imagePosition = "right",
  primaryAction,
  secondaryAction,
}) {
  return (
    <section className="w-full overflow-hidden bg-background">
      <div className="mx-auto  max-w-[1440px] px-6  pt-[86px] pb-[100px] md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] md:min-h-[700px] gap-10 md:gap-24 lg:gap-32 items-center">
          {/* Image side */}
          <div
            className={`w-full ${
              imagePosition === "right" ? "order-2" : "order-1"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={700}
              height={700}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto max-h-[700px] object-cover"
              quality={70}
            />
          </div>

          {/* Content side */}
          <div
            className={`${
              imagePosition === "right" ? "order-1" : "order-2"
            } flex flex-col justify-center`}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              {title}
            </h2>

            <p className="text-base md:text-lg text-foreground/60 mb-10 leading-relaxed max-w-md">
              {description}
            </p>

            <div className="flex gap-4 md:gap-6 items-center flex-wrap">
              <Link href={primaryAction.href}>
                <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-3 text-base font-medium">
                  {primaryAction.label}
                </Button>
              </Link>

              {secondaryAction && (
                <Link href={secondaryAction.href}>
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-3 text-base font-medium border-2 border-foreground"
                  >
                    {secondaryAction.label}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

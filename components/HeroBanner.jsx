import Link from "next/link";
import { Button } from "@/components/ui/button";

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
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] md:min-h-[700px] gap-[150px]">
          {/* Image side */}
          <div className={imagePosition === "right" ? "order-2" : "order-1"}>
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content side */}
          <div
            className={`${
              imagePosition === "right" ? "order-1" : "order-2"
            } flex flex-col justify-center   `}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
              {title}
            </h2>
            <p className="text-base md:text-lg text-foreground/60 mb-10 leading-relaxed text-balance max-w-md">
              {description}
            </p>
            <div className="flex gap-6 items-center">
              <Link href={primaryAction.href}>
                <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-3 text-base font-medium transition-all">
                  {primaryAction.label}
                </Button>
              </Link>
              {secondaryAction && (
                <Link href={secondaryAction.href}>
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-3 text-base font-medium border-2 border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent transition-all"
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

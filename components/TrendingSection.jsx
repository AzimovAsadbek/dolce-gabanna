import Image from "next/image";
import Link from "next/link";

export function TrendingSection({ title, items }) {
  return (
    <section className="w-full md:py-20 bg-background">
      <div className="mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8 md:mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              prefetch={false}
              className="group flex flex-col"
            >
              <div className="relative overflow-hidden bg-[#F6F6F6] rounded-sm aspect-square mb-4">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={70}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="text-lg md:text-xl font-medium text-foreground line-clamp-2 group-hover:opacity-70 transition-opacity">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingSection;

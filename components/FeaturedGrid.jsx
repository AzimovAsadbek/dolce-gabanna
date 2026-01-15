import Link from "next/link";

export function FeaturedGrid({ items }) {
  return (
    <section className="w-full py-12 md:py-20 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-foreground/70 transition-colors">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

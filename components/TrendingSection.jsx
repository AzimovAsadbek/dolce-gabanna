import Link from "next/link";

export function TrendingSection({ title, items }) {
  return (
    <section className="w-full md:py-20 bg-background">
      <div className="mx-auto   ">
        {/* Sarlavha mobil qurilmada markazda bo'lishi ixtiyoriy, 
            lekin Nike uslubida u chapda qolgani ma'qul */}
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8 md:mb-12">
          {title}
        </h2>

        {/* grid-cols-1: Telefonlarda 1ta ustun
           sm:grid-cols-2: Kichik planshetlarda 2ta
           lg:grid-cols-3: Kompyuterda 3ta
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col"
            >
              <div className="relative overflow-hidden bg-[#F6F6F6] rounded-sm aspect-square mb-4">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-foreground group-hover:opacity-70 transition-opacity">
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

import { ProductCard } from "@/components/ProductCard";

export function ProductGrid({ products, title }) {
  return (
    <section className="w-full">
      {title && <h2 className="text-3xl font-medium mb-10">{title}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">
        {products?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}

import { ProductGallery } from "@/components/ProductGallery";
import { ProductDetails } from "@/components/ProductDetails";
import { ProductCard } from "@/components/ProductCard";
import { mockProducts, productData } from "@/mock/data";

export default function ProductDetailPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Gallery */}
          <ProductGallery
            images={productData.images}
            title={productData.title}
          />

          {/* Details */}
          <ProductDetails
            title={productData.title}
            price={productData.price}
            originalPrice={productData.originalPrice}
            rating={productData.rating}
            reviews={productData.reviews}
            colors={productData.colors}
            sizes={productData.sizes}
            description={productData.description}
            inStock={productData.inStock}
          />
        </div>

        {/* Related Products Section */}
        <div className="mt-20 border-t border-border pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            You Might Also Like
          </h2>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {mockProducts?.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

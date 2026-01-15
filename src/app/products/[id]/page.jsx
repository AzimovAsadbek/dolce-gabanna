import { ProductGallery } from "@/components/ProductGallery";
import { ProductDetails } from "@/components/ProductDetails";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductCard } from "@/components/ProductCard";

export default function ProductDetailPage({ params }) {
  const mockProducts = [
    {
      id: "1",
      title: "Nike Tech Fleece Windrunner",
      price: 145,
      image: "/fleece-jacket-athletic-wear.jpg",
      badge: "Just In",
      // colors: ["#B0C4DE", "#E8E8E8", "#808080"],
      colors: [
        "/fleece-jacket-athletic-wear.jpg",
        "/fleece-jacket-athletic-wear.jpg",
        "/fleece-jacket-athletic-wear.jpg",
        "/fleece-jacket-athletic-wear.jpg",
      ],
    },
    {
      id: "2",
      title: "Nike Tech Fleece Windrunner",
      price: 145,
      image: "/fleece-jacket-athletic-wear.jpg",
      badge: "Just In",
      badgeColor: "green",
      // colors: ["#B0C4DE", "#E8E8E8", "#808080"],
      colors: [
        "/fleece-jacket-athletic-wear.jpg",
        "/fleece-jacket-athletic-wear.jpg",
        "/fleece-jacket-athletic-wear.jpg",
        "/fleece-jacket-athletic-wear.jpg",
      ],
    },
    {
      id: "3",
      title: "Nike Tech Fleece Windrunner",
      price: 145,
      image: "/fleece-jacket-athletic-wear.jpg",
      badge: "Extra 20% Off SPRING",
      badgeColor: "green",
      // colors: ["#B0C4DE", "#E8E8E8"],
      colors: [
        "/fleece-jacket-athletic-wear.jpg",
        "/fleece-jacket-athletic-wear.jpg",
        "/fleece-jacket-athletic-wear.jpg",
        "/fleece-jacket-athletic-wear.jpg",
      ],
    },
    {
      id: "4",
      title: "Nike Tech Fleece Windrunner",
      price: 145,
      image: "/fleece-jacket-athletic-wear.jpg",
      badge: "Just In",
      // colors: ["#B0C4DE", "#E8E8E8"],
      colors: [
        "/fleece-jacket-athletic-wear.jpg",
        "/fleece-jacket-athletic-wear.jpg",
        "/fleece-jacket-athletic-wear.jpg",
        "/fleece-jacket-athletic-wear.jpg",
      ],
    },
  ];
  const productData = {
    id: params.id,
    title: "Nike Tech Fleece Windrunner",
    price: 145,
    originalPrice: 180,
    rating: 4.5,
    reviews: 284,
    images: [
      "/fleece-jacket-athletic-wear.jpg",
      "/premium-clothing-fashion.jpg",
      "/casual-clothing-travel-wear.jpg",
      "/elegant-denim-suits-casual-fashion-collection.jpg",
    ],
    colors: [
      { name: "Slate Blue", value: "#708090" },
      { name: "White", value: "#E8E8E8" },
      { name: "Black", value: "#1a1a1a" },
      { name: "Olive", value: "#808000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "Experience superior comfort with the Nike Tech Fleece Windrunner. Engineered with premium materials, this jacket features a windproof outer layer and soft fleece interior for all-weather protection. The modern silhouette combines athletic functionality with casual style, perfect for training or everyday wear.",
    inStock: true,
  };

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

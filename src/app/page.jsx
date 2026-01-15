import { HeroBanner } from "@/components/HeroBanner";
import { CategorySection } from "@/components/CategorySection";
import TrendingSection from "@/components/TrendingSection";
import { HeroBannerKirish } from "@/components/HeroKirish";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductView } from "@/components/ProductView";

const trendingItems = [
  {
    id: "1",
    title: "Made in Flight",
    image: "/athletic-shoes-sneaker-collection.jpg",
    href: "/products/made-in-flight",
  },
  {
    id: "2",
    title: "Trail Running Essentials",
    image: "/trail-running-outdoor-gear.jpg",
    href: "/products/trail-running",
  },
  {
    id: "3",
    title: "Journey-Ready Gear",
    image: "/casual-clothing-travel-wear.jpg",
    href: "/products/journey-gear",
  },
];

const products = [
  {
    id: "1",
    title: "Nike Tech Fleece Windrunner",
    price: 145,
    image: "/casual-clothing-travel-wear.jpg",
    badge: "Just In",
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
    image: "/casual-clothing-travel-wear.jpg",
    badge: "Sustainable Materials",
    colors: [
      "/fleece-jacket-athletic-wear.jpg",
      "/fleece-jacket-athletic-wear.jpg",
    ],
    promoText: "Extra 20% Off SPRING",
  },
  {
    id: "3",
    title: "Nike Tech Fleece Windrunner",
    price: 145,
    image: "/casual-clothing-travel-wear.jpg",
    badge: "Just In",
    colors: [], // Ranglar yo'q holat
  },
  {
    id: "4",
    price: 145,
    image: "/casual-clothing-travel-wear.jpg",
    colors: [
      "/fleece-jacket-athletic-wear.jpg",
      "/fleece-jacket-athletic-wear.jpg",
      "/fleece-jacket-athletic-wear.jpg",
      "/fleece-jacket-athletic-wear.jpg",
      "/fleece-jacket-athletic-wear.jpg",
    ],
  },
];

const categoryLinks = [
  { title: "Sneakers Model 1", href: "/shoes/sneakers-1" },
  { title: "Cotton Mix Coat", href: "/clothing/coats" },
  { title: "Black Crew Master", href: "/clothing/crew" },
  { title: "Reversible Jacket", href: "/clothing/jackets" },
  { title: "Pegasus", href: "/shoes/pegasus" },
  { title: "Blazer", href: "/clothing/blazer" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background ">
      {/* Main Hero Banner */}
      <HeroBannerKirish
        title="Denim Collection"
        description="An enigmatic and contemporary collection that exalts nautical style through meticulous fabrics, prints, and precise forms."
        image="/denim.jpg"
        imagePosition="left"
        primaryAction={{ label: "View Collection", href: "/products" }}
        secondaryAction={{ label: "Buy Now", href: "/checkout" }}
      />
      <div className="mx-auto max-w-[1440px] px-4 py-2 flex  flex-col gap-[120px]">
        <TrendingSection title="Trending" items={trendingItems} />

        <ProductView />

        <ProductGrid title="Popular Right Now" products={products} />
      </div>
      <HeroBanner
        title="Dresses you'll turn to again and again."
        description="Here is your chance to upgrade your wardrobe with a variation of styles and fits that are both."
        image="/Group.png"
        imagePosition="right"
        primaryAction={{ label: "View Collection", href: "/products" }}
        secondaryAction={{ label: "Add to Bag", href: "/cart" }}
      />

      {/* Category Navigation Section */}
      <section className="w-full py-16 md:block hidden ">
        <div className="mx-auto max-w-[980px] mb-10  px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-left">
            <CategorySection
              title="Featured"
              items={[
                {
                  title: "Sneakers Model 1",
                  href: "/products?category=featured",
                },
                {
                  title: "Cotton Mix Coat",
                  href: "/products?category=featured",
                },
                {
                  title: "Black Crew Master",
                  href: "/products?category=featured",
                },
                {
                  title: "Reversible Jacket",
                  href: "/products?category=featured",
                },
                { title: "Pegasus", href: "/products?category=featured" },
                { title: "Blazer", href: "/products?category=featured" },
              ]}
            />
            <CategorySection
              title="Shoes"
              items={[
                { title: "All Shoes", href: "/shoes" },
                { title: "Brutal Max", href: "/shoes/brutal-max" },
                { title: "Running Shoes", href: "/shoes/running" },
                { title: "Basketball Shoes", href: "/shoes/basketball" },
                { title: "Custom Shoes", href: "/shoes/custom" },
                { title: "Sale Shoes", href: "/shoes/sale" },
              ]}
            />
            <CategorySection
              title="Clothing"
              items={[
                { title: "All Clothing", href: "/clothing" },
                { title: "Tops & T-Shirts", href: "/clothing/tops" },
                { title: "Shorts", href: "/clothing/shorts" },
                { title: "Hoodies & Pullovers", href: "/clothing/hoodies" },
                { title: "Joggers & Sweatpants", href: "/clothing/joggers" },
                { title: "Sports Bras", href: "/clothing/sports-bras" },
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

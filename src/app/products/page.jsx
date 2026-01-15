"use client";

import { useEffect, useState } from "react";
import { ProductFilters } from "@/components/ProductFilters";
import { ProductGrid } from "@/components/ProductGrid";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  {
    id: "5",
    title: "Nike Tech Fleece Windrunner",
    price: 145,
    image: "/fleece-jacket-athletic-wear.jpg",
    badge: "Just In",
    badgeColor: "green",
    // colors: ["#8B7355", "#808080"],
    colors: [
      "/fleece-jacket-athletic-wear.jpg",
      "/fleece-jacket-athletic-wear.jpg",
      "/fleece-jacket-athletic-wear.jpg",
      "/fleece-jacket-athletic-wear.jpg",
    ],
  },
  {
    id: "6",
    title: "Nike Tech Fleece Windrunner",
    price: 145,
    image: "/fleece-jacket-athletic-wear.jpg",
    badge: "Extra 20% Off SPRING",
    badgeColor: "green",
    // colors: ["#8B7355", "#808080"],
    colors: [
      "/fleece-jacket-athletic-wear.jpg",
      "/fleece-jacket-athletic-wear.jpg",
      "/fleece-jacket-athletic-wear.jpg",
      "/fleece-jacket-athletic-wear.jpg",
    ],
  },
];

export default function ProductsPage() {
  const [filters, setFilters] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const promos = [
    {
      title: "Free Shipping & Returns",
      desc: "Nike Membership a'zolari uchun bepul yetkazib berish.",
      link: "Batafsil",
    },
    {
      title: "20% Off Select Styles",
      desc: "SPRING promo-kodi bilan qo'shimcha chegirmaga ega bo'ling.",
      link: "Sotib olish",
    },
    {
      title: "New Arrivals Just In",
      desc: "Eng so'nggi kolleksiyalarni ko'zdan kechiring.",
      link: "Ko'rish",
    },
  ];

  // Avtomatik aylanish (har 5 soniyada)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % promos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + promos.length) % promos.length);
  };
  return (
    <main className="min-h-screen bg-background">
      {/* Promo Banner */}
      <section className="w-full bg-[#F5F5F5] py-3 border-b border-gray-200">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-4 md:px-10">
          {/* Chap tugma */}
          <button
            onClick={handlePrev}
            className="p-1 hover:bg-gray-200 rounded-full transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>

          {/* Karusel Kontenti (Animatsiya bilan) */}
          <div className="relative flex-1 flex justify-center items-center overflow-hidden h-[40px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center absolute"
              >
                <h4 className="text-[13px] md:text-[15px] font-medium text-black uppercase tracking-tight">
                  {promos[currentIndex].title}
                </h4>
                <p className="text-[11px] md:text-[12px] text-black/60">
                  {promos[currentIndex].desc}
                  <button className="ml-1 underline font-medium text-black hover:text-black/70">
                    {promos[currentIndex].link}
                  </button>
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* O'ng tugma */}
          <button
            onClick={handleNext}
            className="p-1 hover:bg-gray-200 rounded-full transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </button>
        </div>
      </section>
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Page Header */}
        <div className="border-b border-border py-8">
          <div className="= mx-auto">
            <h1 className="text-3xl font-bold text-foreground">
              New Releases (50)
            </h1>
          </div>
        </div>

        {/* Content Grid */}
        <div className=" mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <aside className="md:col-span-1">
              <ProductFilters onFilterChange={setFilters} />
            </aside>

            {/* Products Grid */}
            <div className="md:col-span-3">
              <ProductGrid products={mockProducts} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

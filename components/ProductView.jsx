import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const productCards = [
  {
    id: 1,
    title: "Reversible Denim Jacket",
    image: "/boy.png", // O'zingizning rasm manzilingizni qo'ying
    href: "/shop/reversible-denim",
  },
  {
    id: 2,
    title: "Cotton Jacquard Jacket",
    image: "/boy.png", // O'zingizning rasm manzilingizni qo'ying
    href: "/shop/cotton-jacquard",
  },
];

export function ProductView() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {productCards.map((card) => (
          <div
            key={card.id}
            className="relative group overflow-hidden rounded-xl h-[400px] md:h-[500px]"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10">
              <h3 className="text-3xl md:text-4xl font-medium text-white mb-6 ">
                {card.title}
              </h3>
              <Link href={card.href}>
                <Button
                  variant="ghost"
                  className="bg-white hover:bg-gray-100 rounded-full px-10 py-4 text-base font-semibold transition-all shadow-xl cursor-pointer"
                >
                  Shop
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

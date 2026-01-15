"use client";

import { useState } from "react";
import { Heart, Share2, Truck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProductDetails({
  title,
  price,
  originalPrice,
  rating,
  reviews,
  colors,
  sizes,
  description,
  inStock,
}) {
  const [selectedColor, setSelectedColor] = useState(colors[0]?.name || "");
  const [selectedSize, setSelectedSize] = useState(sizes[0] || "");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col gap-6">
      {/* Title and Rating */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          {title}
        </h1>
        {rating && (
          <div className="flex items-center gap-2 text-sm">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={
                    i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
                  }
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-muted-foreground">({reviews} reviews)</span>
          </div>
        )}
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-foreground">${price}</span>
        {originalPrice && (
          <span className="text-lg text-muted-foreground line-through">
            ${originalPrice}
          </span>
        )}
      </div>

      {/* Color Selection */}
      <div>
        <label className="block text-sm font-semibold mb-3 text-foreground">
          Select Color
        </label>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`relative h-10 w-10 rounded-full border-2 transition-all ${
                selectedColor === color.name
                  ? "border-foreground"
                  : "border-border"
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
        <p className="mt-2 text-sm text-foreground/70">{selectedColor}</p>
      </div>

      {/* Size Selection */}
      <div>
        <label className="block text-sm font-semibold mb-3 text-foreground">
          Select Size
        </label>
        <div className="grid grid-cols-4 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`py-2 border rounded transition-all ${
                selectedSize === size
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background border-border text-foreground hover:border-foreground"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <label className="block text-sm font-semibold mb-3 text-foreground">
          Quantity
        </label>
        <div className="flex items-center gap-3 w-fit">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-2 border border-border rounded hover:bg-muted"
          >
            −
          </button>
          <span className="w-8 text-center font-semibold">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-2 border border-border rounded hover:bg-muted"
          >
            +
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3">
        <Button
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg font-semibold rounded"
          disabled={!inStock}
        >
          {inStock ? "Add to Bag" : "Out of Stock"}
        </Button>
        <div className="flex gap-3">
          <button className="flex-1 py-3 border border-border rounded hover:bg-muted transition-colors flex items-center justify-center gap-2">
            <Heart className="h-5 w-5" />
            <span className="font-medium">Save</span>
          </button>
          <button className="flex-1 py-3 border border-border rounded hover:bg-muted transition-colors flex items-center justify-center gap-2">
            <Share2 className="h-5 w-5" />
            <span className="font-medium">Share</span>
          </button>
        </div>
      </div>

      {/* Info Sections */}
      <div className="border-t border-border pt-6 space-y-4">
        <div className="flex gap-4">
          <Truck className="h-6 w-6 flex-shrink-0 text-foreground" />
          <div>
            <h3 className="font-semibold text-foreground mb-1">
              Free Delivery
            </h3>
            <p className="text-sm text-muted-foreground">
              On orders over $100. Exclusions apply.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <RotateCcw className="h-6 w-6 flex-shrink-0 text-foreground" />
          <div>
            <h3 className="font-semibold text-foreground mb-1">Easy Returns</h3>
            <p className="text-sm text-muted-foreground">
              30-day return policy for all items.
            </p>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="border-t border-border pt-6">
        <h3 className="text-lg font-semibold text-foreground mb-3">
          About This Item
        </h3>
        <p className="text-foreground/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

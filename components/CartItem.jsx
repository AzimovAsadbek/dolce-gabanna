"use client";

import { X, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { memo, useCallback } from "react";

export const CartItem = memo(function CartItem({
  id,
  title,
  price,
  image,
  color,
  size,
  quantity,
  onQuantityChange,
  onRemove,
}) {
  const handleDecrease = useCallback(() => {
    if (quantity > 1) onQuantityChange(quantity - 1);
  }, [quantity, onQuantityChange]);

  const handleIncrease = useCallback(() => {
    onQuantityChange(quantity + 1);
  }, [quantity, onQuantityChange]);

  const handleRemove = useCallback(() => {
    onRemove(id);
  }, [id, onRemove]);

  return (
    <div className="flex gap-4 py-4 border-b border-border">
      {/* Image */}
      <div className="w-24 h-24 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={96}
          height={96}
          sizes="96px"
          quality={70}
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">
          Color: {color} | Size: {size}
        </p>
        <p className="text-lg font-bold text-foreground">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-end justify-between">
        <button
          onClick={handleRemove}
          aria-label="Remove item from cart"
          className="p-1 hover:bg-muted rounded focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        <div className="flex items-center gap-2 border border-border rounded">
          <button
            onClick={handleDecrease}
            disabled={quantity === 1}
            aria-label="Decrease quantity"
            className="p-1 hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Minus className="h-4 w-4" />
          </button>

          <span className="w-6 text-center text-sm font-medium">
            {quantity}
          </span>

          <button
            onClick={handleIncrease}
            aria-label="Increase quantity"
            className="p-1 hover:bg-muted"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
});

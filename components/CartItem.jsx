"use client";

import { X, Minus, Plus } from "lucide-react";

export function CartItem({
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
  return (
    <div className="flex gap-4 py-4 border-b border-border">
      <div className="w-24 h-24 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">
          Color: {color} | Size: {size}
        </p>
        <p className="text-lg font-bold text-foreground">${price}</p>
      </div>

      <div className="flex flex-col items-end justify-between">
        <button onClick={onRemove} className="p-1 hover:bg-muted rounded">
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        <div className="flex items-center gap-2 border border-border rounded">
          <button
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            className="p-1 hover:bg-muted"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-6 text-center text-sm font-medium">
            {quantity}
          </span>
          <button
            onClick={() => onQuantityChange(quantity + 1)}
            className="p-1 hover:bg-muted"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

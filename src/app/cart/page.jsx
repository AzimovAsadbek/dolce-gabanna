"use client";

import { useState } from "react";
import { CartItem } from "@/components/CartItem";
import { OrderSummary } from "@/components/OrderSummary";
import Link from "next/link";

const initialCartItems = [
  {
    id: "1",
    title: "Nike Tech Fleece Windrunner",
    price: 145,
    image: "/fleece-jacket-athletic-wear.jpg",
    color: "Slate Blue",
    size: "M",
    quantity: 1,
  },
  {
    id: "2",
    title: "Premium Running Shoes",
    price: 120,
    image: "/athletic-shoes-sneaker-collection.jpg",
    color: "Black",
    size: "10",
    quantity: 1,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id, quantity) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemove = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const shipping = subtotal > 100 ? 0 : 10;

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-[1440px] mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Shopping Bag
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-6">
              Your bag is empty
            </p>
            <Link href="/products">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-background rounded-lg border border-border">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    {...item}
                    onQuantityChange={(qty) =>
                      handleQuantityChange(item.id, qty)
                    }
                    onRemove={() => handleRemove(item.id)}
                  />
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <OrderSummary
                subtotal={subtotal}
                tax={tax}
                shipping={shipping}
                itemCount={cartItems.length}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

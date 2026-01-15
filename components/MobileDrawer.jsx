"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, Heart } from "lucide-react";

export function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "New & Featured", href: "/new" },
    { label: "Men", href: "/men" },
    { label: "Women", href: "/women" },
    { label: "Sale", href: "/sale" },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 z-40 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsOpen(false)}
          />
          <nav className="fixed right-0 top-0 bottom-0 w-64 bg-background z-40 p-6 space-y-4 overflow-y-auto">
            <h2 className="text-xl font-bold text-foreground mb-6">Menu</h2>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-foreground hover:text-foreground/70 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="border-t border-border pt-4 mt-6 space-y-3">
              <Link
                href="/account"
                className="block text-foreground hover:text-foreground/70 py-2"
                onClick={() => setIsOpen(false)}
              >
                My Account
              </Link>
              <Link
                href="/cart"
                className="flex items-center gap-2 text-foreground hover:text-foreground/70 py-2"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingBag className="h-5 w-5" />
                Cart
              </Link>
              <Link
                href="/wishlist"
                className="flex items-center gap-2 text-foreground hover:text-foreground/70 py-2"
                onClick={() => setIsOpen(false)}
              >
                <Heart className="h-5 w-5" />
                Wishlist
              </Link>
            </div>
          </nav>
        </>
      )}
    </>
  );
}

export default MobileDrawer;

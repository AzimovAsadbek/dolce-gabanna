"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "New & Featured", href: "/new" },
    { label: "Men", href: "/men" },
    { label: "Women", href: "/women" },
    { label: "Sale", href: "/sale" },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block text-sm">
        <div className="max-w-[1440px] mx-auto px-8 py-2 flex justify-end gap-3">
          <Link href="#">Find a store</Link>
          <span>|</span>
          <Link href="#">Help</Link>
          <span>|</span>
          <Link href="#">Join Us</Link>
          <span>|</span>
          <Link href="#">Sign In</Link>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b">
        <div className="max-w-[1440px] mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold tracking-wide">
            DOLCE & GABBANA
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-8 text-sm">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-1 max-w-xs mx-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-muted px-4 py-2 text-sm text-foreground placeholder-muted-foreground rounded focus:outline-none"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            <a href="">
              <Heart className="w-5 h-5" />
            </a>
            <a href="/cart">
              <ShoppingBag className="w-5 h-5" />
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ===== Mobile Overlay ===== */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* ===== Mobile Drawer ===== */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-white transform transition-transform duration-300
        ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b">
          <span className="text-sm font-medium">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="px-6 py-6 space-y-6 text-lg">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-between"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>{item.label}</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="mt-auto px-6 py-6 border-t text-sm text-gray-600">
          <p className="mb-4">
            Become a Brand Member for the best products, inspiration and stories
            in sport. <span className="font-medium text-black">Learn more</span>
          </p>

          <div className="flex gap-3">
            <button className="flex-1 bg-black text-white py-3 rounded-full cursor-pointer">
              Join Us
            </button>
            <button className="flex-1 border border-black py-3 rounded-full cursor-pointer">
              Sign In
            </button>
          </div>

          <div className="flex gap-6 mt-6">
            <a href="/cart">
              <ShoppingBag className="cursor-pointer" />
            </a>
            <Heart className="cursor-pointer" />
            <Search className="cursor-pointer" />
          </div>
        </div>
      </aside>
    </>
  );
}

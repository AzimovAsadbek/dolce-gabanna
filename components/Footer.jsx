import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  ArrowRight,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-[1440px] mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <p className="text-sm text-primary-foreground/80">
              Find location nearest to you:
            </p>
            <Link
              href="#"
              className="block text-primary-foreground hover:underline text-sm font-medium"
            >
              See Our Stores
            </Link>
            <div className="space-y-2">
              <p className="text-sm">+998 99 123 45 67</p>
              <p className="text-sm">hello@mail.com</p>
            </div>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Information</h3>
            <nav className="space-y-2">
              <Link
                href="/account"
                className="block text-primary-foreground/80 hover:text-primary-foreground text-sm"
              >
                My Account
              </Link>
              <Link
                href="/login"
                className="block text-primary-foreground/80 hover:text-primary-foreground text-sm"
              >
                Login
              </Link>
              <Link
                href="/cart"
                className="block text-primary-foreground/80 hover:text-primary-foreground text-sm"
              >
                My Cart
              </Link>
              <Link
                href="/wishlist"
                className="block text-primary-foreground/80 hover:text-primary-foreground text-sm"
              >
                Wishlist
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <nav className="space-y-2">
              <Link
                href="/about"
                className="block text-primary-foreground/80 hover:text-primary-foreground text-sm"
              >
                About us
              </Link>
              <Link
                href="/careers"
                className="block text-primary-foreground/80 hover:text-primary-foreground text-sm"
              >
                Careers
              </Link>
              <Link
                href="/delivery"
                className="block text-primary-foreground/80 hover:text-primary-foreground text-sm"
              >
                Delivery Information
              </Link>
              <Link
                href="/privacy"
                className="block text-primary-foreground/80 hover:text-primary-foreground text-sm"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Subscribe</h3>
            <p className="text-sm text-primary-foreground/80">
              Enter your e-mail below to be the first to know about new
              collections and product launches.
            </p>
            <div className="w-full max-w-md mx-auto px-4 sm:px-0">
              <div className="relative flex items-center bg-[#F2F2F2] rounded-full px-4 sm:px-6 py-2.5 sm:py-3 group transition-all focus-within:ring-1 focus-within:ring-black/20 h-14">
                {/* Ikonka mobilda biroz kichrayadi */}
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-black/70 flex-shrink-0" />

                {/* Input maydoni: text-base mobilda (16px) - bu iOS'da avtomatik zoom bo'lishini oldini oladi */}
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 bg-transparent border-none outline-none px-2 sm:px-4 text-base sm:text-lg text-black placeholder:text-black/60 placeholder:font-medium min-w-0"
                />

                {/* O'ng tomondagi tugma */}
                <button
                  type="submit"
                  className="p-1.5 sm:p-2 flex items-center justify-center transition-all hover:translate-x-1 active:scale-95"
                >
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-black cursor-pointer" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className=" pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <p></p>
            <p className="text-[16px] text-primary-foreground/80 align-center">
              ©Company {new Date().getFullYear()} All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <Link
                href="#"
                className="hover:text-primary-foreground/70 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-primary-foreground/70 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-primary-foreground/70 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-primary-foreground/70 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

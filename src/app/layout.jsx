import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata = {
  metadataBase: new URL("https://dolce-gabanna.vercel.app"),

  title: {
    default: "Dolce & Gabbana | Premium Fashion & Online Store",
    template: "%s | Dolce & Gabbana",
  },

  description:
    "Shop premium fashion clothing online at Dolce & Gabbana. Discover jackets, denim, shoes, and modern collections with fast delivery and secure checkout.",

  keywords: [
    "Dolce & Gabbana",
    "fashion store",
    "online clothing shop",
    "premium fashion",
    "designer clothes",
    "men clothing",
    "women clothing",
    "jackets",
    "denim collection",
    "buy clothes online",
  ],

  authors: [{ name: "Dolce & Gabbana" }],
  creator: "Dolce & Gabbana",
  publisher: "Dolce & Gabbana",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://dolce-gabanna.vercel.app",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dolce-gabanna.vercel.app",
    siteName: "Dolce & Gabbana",
    title: "Dolce & Gabbana | Premium Fashion & Online Store",
    description:
      "Discover premium fashion collections. Shop jackets, denim, shoes and more with fast delivery.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dolce & Gabbana Fashion Collection",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dolce & Gabbana | Premium Fashion Store",
    description:
      "Explore premium fashion collections online. Jackets, denim, shoes and more.",
    images: ["/og-image.jpg"],
    creator: "@dolcegabbana",
  },

  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },

  category: "fashion",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="antialiased font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

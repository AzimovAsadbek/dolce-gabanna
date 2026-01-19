"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({ images = [], title }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image (LCP) */}
      <div className="relative w-full bg-secondary rounded-lg overflow-hidden aspect-square">
        <Image
          src={images[selectedImage] || "/placeholder.svg"}
          alt={title}
          fill
          priority={selectedImage === 0}
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={75}
          className="object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedImage(index)}
            aria-label={`View image ${index + 1}`}
            aria-current={selectedImage === index}
            className={`relative aspect-square rounded overflow-hidden border-2 transition-all focus:outline-none focus:ring-2 focus:ring-foreground ${
              selectedImage === index
                ? "border-foreground"
                : "border-border hover:border-foreground/50"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt=""
              width={120}
              height={120}
              sizes="(max-width: 768px) 25vw, 120px"
              quality={60}
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
export default ProductGallery;

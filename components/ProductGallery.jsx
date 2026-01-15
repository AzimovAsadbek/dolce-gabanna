"use client";

import { useState } from "react";

export function ProductGallery({ images, title }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative w-full bg-secondary rounded-lg overflow-hidden aspect-square">
        <img
          src={images[selectedImage] || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square rounded overflow-hidden border-2 transition-all ${
              selectedImage === index
                ? "border-foreground"
                : "border-border hover:border-foreground/50"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`View ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

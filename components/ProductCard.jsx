import Image from "next/image";
import Link from "next/link";

export function ProductCard({
  id,
  title,
  price,
  image,
  badge,
  colors = [],
  promoText,
}) {
  return (
    <div className="group flex flex-col gap-3">
      {/* Product image */}
      <Link
        href={`/products/${id}`}
        className="block relative bg-[#F6F6F6] rounded-sm aspect-[4/5] overflow-hidden"
      >
        <Image
          src={image}
          alt={"error"}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          quality={70}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Info */}
      <div className="flex flex-col gap-1">
        {badge && (
          <span
            className={`text-[15px] font-medium ${
              badge.includes("Sustainable") ? "text-gray-500" : "text-[#9E3500]"
            }`}
          >
            {badge}
          </span>
        )}

        <h3 className="text-[16px] font-medium text-[#111111] line-clamp-2">
          {title}
        </h3>

        {/* Colors */}
        {colors.length > 0 && (
          <div className="flex gap-1 py-1 items-center">
            {colors.slice(0, 3).map((c, i) => (
              <div
                key={i}
                className="relative h-6 w-6 border border-gray-200 overflow-hidden"
              >
                <Image
                  src={c}
                  alt="xatolik"
                  width={24}
                  height={24}
                  sizes="24px"
                  quality={50}
                  className="object-cover"
                />
              </div>
            ))}

            {colors.length > 3 && (
              <span className="text-sm text-gray-500">
                +{colors.length - 3}
              </span>
            )}
          </div>
        )}

        <p className="text-[16px] font-medium mt-1">${price}</p>

        {promoText && (
          <p className="text-[14px] font-medium text-green-700">{promoText}</p>
        )}
      </div>
    </div>
  );
}
export default ProductCard;

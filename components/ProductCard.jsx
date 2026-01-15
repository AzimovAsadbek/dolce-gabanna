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
      <Link
        href={`/products/${id}`}
        className="block relative bg-[#F6F6F6] rounded-sm aspect-[4/5] overflow-hidden"
      >
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </Link>

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
        <h3 className="text-[16px] font-medium text-[#111111]">{title}</h3>

        {colors.length > 0 && (
          <div className="flex gap-1 py-1">
            {colors.slice(0, 3).map((c, i) => (
              <div
                key={i}
                className="h-6 w-6 border border-gray-200 overflow-hidden"
              >
                <img src={c} className="w-full h-full object-cover" />
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

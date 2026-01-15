import Link from "next/link";

export function CategorySection({ title, items }) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-base md:text-lg text-foreground/70 hover:text-foreground transition-colors"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import Link from "next/link";

export function Breadcrumb({ items }) {
  return (
    <nav className="bg-secondary py-3 px-4 rounded mb-6">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center gap-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-foreground hover:text-foreground/70"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-muted-foreground">{item.label}</span>
              )}
              {index < items.length - 1 && (
                <span className="text-muted-foreground">/</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

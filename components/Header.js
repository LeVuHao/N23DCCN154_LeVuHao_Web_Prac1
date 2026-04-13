import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "#posts" },
  { label: "About", href: "#about" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-sky-900"
        >
          MyBlog
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-sky-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#subscribe"
          className="rounded-full bg-sky-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
        >
          Subscribe
        </Link>
      </div>
    </header>
  );
}

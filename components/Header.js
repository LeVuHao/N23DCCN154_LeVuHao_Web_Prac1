import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "#posts" },
  { label: "About", href: "#about" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-sky-900 sm:text-xl"
        >
          <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
            MyBlog
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group text-sm font-medium text-slate-600 transition duration-300 hover:text-sky-900"
            >
              <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:rounded-full after:bg-sky-500 after:transition after:duration-300 group-hover:after:scale-x-100">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <Link
          href="#subscribe"
          className="inline-flex items-center justify-center rounded-full bg-sky-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
        >
          Subscribe
        </Link>
      </div>
    </header>
  );
}

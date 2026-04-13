export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-sky-800 via-sky-700 to-cyan-600 px-6 py-12 text-white shadow-2xl shadow-sky-700/20 sm:px-10 sm:py-16">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-16 top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-300/10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-3xl">
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-100 shadow-sm shadow-sky-900/10">
          Blog Listing
        </span>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl xl:text-6xl">
          Modern blog design with{" "}
          <span className="bg-gradient-to-r from-cyan-200 via-white to-slate-200 bg-clip-text text-transparent">
            Next.js
          </span>{" "}
          and Tailwind CSS.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-sky-100/90 sm:text-lg">
          A clean and modern blog interface with elegant spacing, sharp card
          layouts, smooth hover effects, and responsive structure — powered by
          JSONPlaceholder data.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#posts"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Explore featured posts
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-white hover:bg-white/20"
          >
            Learn about the UI
          </a>
        </div>
      </div>
    </section>
  );
}

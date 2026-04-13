import BlogCard from "@/components/BlogCard";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

async function getPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=12",
    {
      cache: "no-store",
    },
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return await response.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <HeroSection />

        <section className="mt-10 rounded-[32px] bg-white/90 p-6 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200/80 sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
                Featured articles
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Fresh stories from JSONPlaceholder
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Explore curated blog posts with a polished UI, modern card
                design, and responsive experience across devices.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-900 shadow-sm shadow-sky-200/80">
              {posts.length} posts ready
            </div>
          </div>
        </section>

        <section
          id="posts"
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </section>

        <section
          id="about"
          className="mt-14 rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 sm:p-10"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                About this practice
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                This UI elevates the blog listing experience with clean spacing,
                soft shadows, card motion, and crisp typography while keeping
                the API logic unchanged.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-100 px-5 py-3 text-sm font-medium text-slate-700">
              Responsive, modern, and production-ready.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

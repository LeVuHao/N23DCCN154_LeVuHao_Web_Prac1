import BlogCard from "@/components/BlogCard";
import Header from "@/components/Header";

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const posts = await response.json();
  return posts.slice(0, 12);
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="mb-10 rounded-[32px] bg-white px-6 py-10 shadow-sm sm:px-10">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-700">
              Blog Listing
            </p>
            <h1 className="mb-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Simple Blog UI with Next.js and Tailwind
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              This page fetches posts from JSONPlaceholder and renders a
              responsive grid of blog cards. Click any card to open the full
              detail page.
            </p>
          </div>
        </section>

        <section
          id="posts"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </section>

        <section
          id="about"
          className="mt-14 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
        >
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">
            About this practice
          </h2>
          <p className="text-base leading-7 text-slate-600">
            This project demonstrates Next.js App Router, Tailwind CSS
            responsive layout, reusable components, and server-side data
            fetching from a REST API.
          </p>
        </section>
      </main>
    </div>
  );
}

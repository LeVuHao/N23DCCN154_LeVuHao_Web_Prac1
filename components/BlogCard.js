import Link from "next/link";
import Badge from "@/components/Badge";

export default function BlogCard({ post }) {
  return (
    <article className="group cursor-pointer overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <Badge label={`User ${post.userId}`} color="blue" />
        <span className="text-xs uppercase tracking-[0.24em] text-slate-400">
          Blog
        </span>
      </div>

      <h2 className="mb-4 text-xl font-semibold leading-8 text-slate-900 line-clamp-2 transition-colors duration-300 group-hover:text-sky-700">
        {post.title}
      </h2>
      <p className="mb-7 text-sm leading-7 text-slate-600 line-clamp-3">
        {post.body}
      </p>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
          Post #{post.id}
        </span>
        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center justify-center rounded-full bg-sky-900 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}

import Link from "next/link";
import Badge from "@/components/Badge";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export default function BlogCard({ post }: { post: Post }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Badge label={`User ${post.userId}`} color="indigo" />
        <span className="text-xs uppercase tracking-[0.24em] text-slate-500">
          Blog
        </span>
      </div>

      <h2 className="mb-3 text-xl font-semibold leading-7 text-slate-900 line-clamp-2">
        {post.title}
      </h2>
      <p className="mb-6 text-sm leading-6 text-slate-600 line-clamp-3">
        {post.body}
      </p>

      <div className="flex items-center justify-between gap-4">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
          Post #{post.id}
        </span>
        <Link
          href={`/blog/${post.id}`}
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}

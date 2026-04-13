import Link from "next/link";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

async function getPost(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      cache: "no-store",
    },
  );
  if (!response.ok) {
    throw new Error("Post not found");
  }
  return (await response.json()) as Post;
}

export default async function BlogDetail({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPost(params.id);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
              User {post.userId}
            </span>
            <span className="text-xs uppercase tracking-[0.24em] text-slate-500">
              Blog detail
            </span>
          </div>

          <h1 className="mb-6 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            {post.title}
          </h1>
          <p className="max-w-3xl text-base leading-8 text-slate-600">
            {post.body}
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}

import { getBlogs } from "@/utils/get-blogs";
import Link from "next/link";

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <main className="mx-auto mt-10 min-h-screen max-w-xl">
      <h1 className="mb-10 bg-gradient-to-r from-cyan-400 to-blue-700 bg-clip-text text-transparent py-1 text-5xl tracking-tight font-black">
        My Scalable Blog
      </h1>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link
              href={`/blogs/${blog.slug}`}
              className="group flex flex-col rounded-lg border border-neutral-200 bg-neutral-50 p-4 hover:shadow-lg hover:shadow-neutral-100"
            >
              <h2 className="font-bold text-neutral-900 group-hover:underline">
                {blog.title}
              </h2>
              <p className="text-sm text-neutral-600">{blog.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description:
      "Learn how to build modern web applications using Next.js and React.",
    category: "Next.js",
    date: "Aug 15, 2026",
  },
  {
    id: 2,
    title: "Understanding TypeScript",
    description:
      "A practical guide to writing safer and more maintainable JavaScript applications.",
    category: "TypeScript",
    date: "Aug 12, 2026",
  },
  {
    id: 3,
    title: "Building REST APIs with Express",
    description:
      "Learn the fundamentals of creating scalable REST APIs with Node.js and Express.",
    category: "Backend",
    date: "Aug 10, 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Our Blog
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Learn, Build & Grow
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Explore tutorials, guides, and insights about web development,
            programming, and modern technologies.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Latest Posts</h2>

          <span className="text-sm text-muted-foreground">
            {posts.length} articles
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col rounded-xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              {/* Category */}
              <span className="mb-4 w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {post.category}
              </span>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary">
                  {post.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {post.description}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between border-t pt-4">
                <span className="text-xs text-muted-foreground">
                  {post.date}
                </span>

                <Link
                  href={`/blog/${post.id}`}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
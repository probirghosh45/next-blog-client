import { blogService } from "@/services/blog.service";
import Link from "next/link";

const features = [
  {
    icon: "📝",
    title: "Quality Articles",
    description:
      "Read practical articles, tutorials, and insights about modern web development.",
  },
  {
    icon: "🚀",
    title: "Learn & Grow",
    description:
      "Improve your skills with easy-to-follow guides and real-world examples.",
  },
  {
    icon: "💡",
    title: "Practical Knowledge",
    description:
      "Learn concepts that you can apply directly to your own projects.",
  },
];

// const posts = [
//   {
//     title: "Getting Started with Next.js",
//     category: "Next.js",
//     description:
//       "Learn the fundamentals of Next.js and start building modern web applications.",
//   },
//   {
//     title: "Understanding TypeScript",
//     category: "TypeScript",
//     description:
//       "Discover how TypeScript can help you write safer and more maintainable code.",
//   },
//   {
//     title: "Building REST APIs with Express",
//     category: "Backend",
//     description:
//       "A practical introduction to building scalable REST APIs using Node.js and Express.",
//   },
// ];

export default async function HomePage() {
  const posts = await blogService.getBlogPosts();
  console.log(posts.data.data);
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Welcome to our blog
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
            Learn. Build. <span className="text-primary">Grow.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Explore tutorials, guides, and practical insights about web
            development, programming, and modern technologies.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/blog"
              className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Explore Blog →
            </Link>

            <Link
              href="/about"
              className="rounded-md border px-6 py-3 text-sm font-medium transition hover:bg-muted"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why Us
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Everything you need to keep learning
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold">{feature.title}</h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Posts */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Blog
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                Latest Posts
              </h2>
            </div>

            <Link
              href="/blog"
              className="hidden text-sm font-medium text-primary hover:underline sm:block"
            >
              View all →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {posts?.data?.data?.map((post: { title: string; category: string; description: string }) => (
              <article
                key={String(post.title)}
                className="group rounded-xl border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {post.category}
                </span>

                <h3 className="mt-5 text-xl font-semibold tracking-tight group-hover:text-primary">
                  {post.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {post.description}
                </p>

                <Link
                  href="/blog"
                  className="mt-5 inline-block text-sm font-medium text-primary hover:underline"
                >
                  Read article →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/blog"
              className="text-sm font-medium text-primary hover:underline"
            >
              View all posts →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to start learning?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Explore our latest articles and discover something new today.
        </p>

        <Link
          href="/blog"
          className="mt-7 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
        >
          Start Reading →
        </Link>
      </section>
    </main>
  );
}

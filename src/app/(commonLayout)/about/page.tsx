export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            About Us
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            We love building for the web
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            We create simple, useful, and modern digital experiences that
            help people learn, build, and grow.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Who We Are
          </p>

          <h2 className="text-3xl font-bold tracking-tight">
            Building ideas into meaningful experiences
          </h2>

          <p className="leading-7 text-muted-foreground">
            Our goal is to make technology easier to understand and easier
            to use. Through tutorials, articles, and practical resources,
            we share what we learn and help others grow their skills.
          </p>

          <p className="leading-7 text-muted-foreground">
            We believe that great products come from simple ideas, thoughtful
            design, and continuous learning.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border bg-card p-6 text-center shadow-sm">
            <h3 className="text-3xl font-bold">100+</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Articles
            </p>
          </div>

          <div className="rounded-xl border bg-card p-6 text-center shadow-sm">
            <h3 className="text-3xl font-bold">10K+</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Readers
            </p>
          </div>

          <div className="rounded-xl border bg-card p-6 text-center shadow-sm">
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tutorials
            </p>
          </div>

          <div className="rounded-xl border bg-card p-6 text-center shadow-sm">
            <h3 className="text-3xl font-bold">24/7</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Learning
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Values
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              What matters to us
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-xl">
                💡
              </div>

              <h3 className="text-lg font-semibold">
                Simplicity
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                We believe complex ideas can be explained in a simple and
                understandable way.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-xl">
                🚀
              </div>

              <h3 className="text-lg font-semibold">
                Growth
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                We continuously learn, experiment, and improve what we
                build.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-xl">
                🤝
              </div>

              <h3 className="text-lg font-semibold">
                Community
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                We share knowledge and believe everyone can learn from each
                other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Want to learn with us?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Explore our latest articles and tutorials and start learning
          something new today.
        </p>

        <a
          href="/blog"
          className="mt-6 inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
        >
          Explore our blog →
        </a>
      </section>
    </main>
  );
}
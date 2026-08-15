import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Contact Us
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get in touch
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Have a question, feedback, or just want to say hello? We&apos;d
            love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold">Let&apos;s talk</h2>
            <p className="mt-2 text-muted-foreground">
              Fill out the form and our team will get back to you as soon as
              possible.
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                ✉
              </div>

              <div>
                <h3 className="font-medium">Email</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  hello@example.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                ☎
              </div>

              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  +880 1234-567890
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                📍
              </div>

              <div>
                <h3 className="font-medium">Address</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-xl border bg-card p-6 shadow-sm sm:p-8">
          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="How can we help?"
                className="w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message..."
                className="w-full resize-none rounded-md border bg-background px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-ring"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Back to Blog */}
      <div className="pb-12 text-center">
        <Link
          href="/blog"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Back to Blog
        </Link>
      </div>
    </main>
  );
}
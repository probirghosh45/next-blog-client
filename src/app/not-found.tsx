import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Error 404
        </p>

        <h1 className="text-7xl font-bold tracking-tight sm:text-9xl">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Post not found
          </h2>

          <p className="mx-auto max-w-md text-muted-foreground">
            The post you&apos;re looking for doesn&apos;t exist or may have
            been removed.
          </p>
        </div>

        <Button>
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </section>
  );
}
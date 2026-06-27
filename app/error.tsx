"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="pt-32">
      <Container className="py-16">
        <h1 className="font-serif text-step-5 font-semibold text-ink">Something needs attention</h1>
        <p className="mt-4 max-w-2xl text-step-0 text-ink/70">
          The page could not finish loading. You can try again, or return to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={reset} type="button">
            Try Again
          </Button>
          <Button href="/" variant="outline">
            Return Home
          </Button>
        </div>
      </Container>
    </section>
  );
}

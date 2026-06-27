import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="pt-32">
      <Container className="py-20">
        <h1 className="font-serif text-5xl font-semibold text-ink">Page not found</h1>
        <p className="mt-4 max-w-xl leading-7 text-ink/70">
          The page you are looking for is not available.
        </p>
        <Link className="mt-6 inline-flex font-semibold text-moss-700 hover:text-moss-900" href="/">
          Return home
        </Link>
      </Container>
    </section>
  );
}

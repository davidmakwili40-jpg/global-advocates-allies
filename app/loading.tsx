import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <section aria-busy="true" aria-live="polite" className="pt-32">
      <Container className="py-16">
        <div className="h-3 w-40 rounded-full bg-moss-100" />
        <div className="mt-6 h-10 max-w-xl rounded-md bg-moss-50" />
        <div className="mt-4 h-4 max-w-2xl rounded-full bg-moss-50" />
      </Container>
    </section>
  );
}

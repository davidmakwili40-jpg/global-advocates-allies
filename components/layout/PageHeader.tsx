import { Breadcrumbs, type Breadcrumb } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";

export function PageHeader({
  title,
  description,
  breadcrumbs
}: {
  title: string;
  description: string;
  breadcrumbs?: Breadcrumb[];
}) {
  return (
    <section className="bg-paper-grain pt-32">
      <Container className="py-14 sm:py-20">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <h1 className="max-w-4xl font-serif text-step-5 font-semibold text-ink sm:text-step-6">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-step-1 text-ink/75">{description}</p>
      </Container>
    </section>
  );
}

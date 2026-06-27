import type { ReactNode } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

export function StandardPage({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHeader title={title} description={description} breadcrumbs={[{ label: title }]} />
      <section className="editorial-section">
        <Container>{children}</Container>
      </section>
    </>
  );
}

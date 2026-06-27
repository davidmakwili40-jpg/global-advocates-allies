import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/LogoMark";
import { footerNavigation } from "@/data/navigation";
import { site } from "@/data/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink py-14 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(200,168,76,0.16),transparent_28%),radial-gradient(circle_at_92%_28%,rgba(76,149,168,0.14),transparent_30%)]" />
      <Container className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <LogoMark inverted />
          <p className="mt-5 max-w-xl leading-7 text-white/75">{site.description}</p>
          <p className="mt-5 text-sm text-white/65">
            {site.email} | {site.phone}
          </p>
        </div>
        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {footerNavigation.map((item) => (
            <Link className="text-sm font-semibold text-white/72 hover:text-white" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
      <Container className="relative mt-10 border-t border-white/15 pt-6 text-sm text-white/55">
        <p>Copyright {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </Container>
    </footer>
  );
}

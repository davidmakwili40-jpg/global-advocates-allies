import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/LogoMark";
import { MainNav } from "@/components/navigation/MainNav";
import { MobileNav } from "@/components/navigation/MobileNav";
import { primaryNavigation } from "@/data/navigation";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-canvas/90 backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <LogoMark />
        <MainNav items={primaryNavigation} />
        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/apply-for-assistance" variant="ghost">
            Request Help
          </Button>
          <Button href="/donate">Donate</Button>
        </div>
        <MobileNav items={primaryNavigation} />
      </Container>
    </header>
  );
}

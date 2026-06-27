import { HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconFrame } from "@/components/ui/IconFrame";

export function DonationCTA() {
  return (
    <Card as="aside" tone="warm">
      <IconFrame icon={HeartHandshake} tone="coral" />
      <h2 className="mt-4 font-serif text-2xl font-semibold text-ink">Fuel compassionate support</h2>
      <p className="mt-3 leading-7 text-ink/75">
        Gifts support advocacy, resource navigation, education, and emergency coordination.
      </p>
      <Button className="mt-5" href="/donate">
        Donate
      </Button>
    </Card>
  );
}

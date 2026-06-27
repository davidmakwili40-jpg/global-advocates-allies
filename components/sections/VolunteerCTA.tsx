import { UsersRound } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconFrame } from "@/components/ui/IconFrame";

export function VolunteerCTA() {
  return (
    <Card as="aside">
      <IconFrame icon={UsersRound} tone="moss" />
      <h2 className="font-serif text-2xl font-semibold text-ink">Become an ally</h2>
      <p className="mt-3 leading-7 text-ink/75">
        Lend your time to events, resource navigation, outreach, and compassionate care coordination.
      </p>
      <Button className="mt-5" href="/volunteer" variant="outline">
        Volunteer
      </Button>
    </Card>
  );
}

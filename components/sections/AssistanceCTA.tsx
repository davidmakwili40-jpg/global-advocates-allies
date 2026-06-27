import { LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconFrame } from "@/components/ui/IconFrame";

export function AssistanceCTA() {
  return (
    <Card as="aside" tone="moss">
      <IconFrame icon={LifeBuoy} tone="sky" />
      <h2 className="mt-4 font-serif text-2xl font-semibold text-ink">Need help staying together?</h2>
      <p className="mt-3 leading-7 text-ink/75">
        Share what is happening and a team member will route your request to the right support path.
      </p>
      <Button className="mt-5" href="/apply-for-assistance" variant="secondary">
        Request Assistance
      </Button>
    </Card>
  );
}

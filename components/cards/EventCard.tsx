import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { Event } from "@/types/content";
import { formatDate } from "@/lib/utils";

export function EventCard({ event }: { event: Event }) {
  return (
    <Card as="article" tone="warm">
      <Badge tone="gold">Event</Badge>
      <h3 className="mt-5 font-serif text-step-3 font-semibold text-ink">{event.title}</h3>
      <div className="mt-4 space-y-2 text-sm text-ink/70">
        <p className="flex items-center gap-2">
          <CalendarDays aria-hidden="true" className="size-4 text-coral-700" />
          {formatDate(event.date)} at {event.time}
        </p>
        <p className="flex items-center gap-2">
          <MapPin aria-hidden="true" className="size-4 text-coral-700" />
          {event.location}
        </p>
      </div>
      <p className="mt-4 leading-7 text-ink/75">{event.summary}</p>
      <Link className="mt-5 inline-flex font-semibold text-moss-700 hover:text-moss-900" href={event.href}>
        View details
      </Link>
    </Card>
  );
}

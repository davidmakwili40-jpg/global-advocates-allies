import type { Metadata } from "next";
import { EventCard } from "@/components/cards/EventCard";
import { StandardPage } from "@/components/sections/StandardPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { events } from "@/data/events";
import { eventsJsonLd } from "@/lib/structured-data";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Events", path: "/events" });

export default function EventsPage() {
  return (
    <StandardPage title="Events" description="Upcoming clinics, orientations, outreach days, and community gatherings.">
      <JsonLd data={eventsJsonLd()} />
      <div className="grid gap-5 md:grid-cols-2">
        {events.map((event) => (
          <EventCard event={event} key={event.title} />
        ))}
      </div>
    </StandardPage>
  );
}

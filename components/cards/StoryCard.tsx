import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { Story } from "@/types/content";

export function StoryCard({ story }: { story: Story }) {
  return (
    <Card as="article" className="relative overflow-hidden p-7" tone="ink">
      <div className="absolute right-0 top-0 h-28 w-28 border-l border-b border-white/10 bg-white/5" />
      <Badge tone="gold">{story.person}</Badge>
      <h3 className="mt-5 font-serif text-step-3 font-semibold">{story.title}</h3>
      <p className="mt-4 leading-7 text-white/80">{story.summary}</p>
      <Link className="mt-6 inline-flex font-semibold text-gold-100 hover:text-white" href={story.href}>
        Read stories
      </Link>
    </Card>
  );
}

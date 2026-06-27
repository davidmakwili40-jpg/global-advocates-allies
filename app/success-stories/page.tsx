import type { Metadata } from "next";
import { StoryCard } from "@/components/cards/StoryCard";
import { StandardPage } from "@/components/sections/StandardPage";
import { stories } from "@/data/stories";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ title: "Success Stories", path: "/success-stories" });

export default function SuccessStoriesPage() {
  return (
    <StandardPage title="Success Stories" description="Privacy-conscious stories of support, resilience, and preserved bonds.">
      <div className="grid gap-5 md:grid-cols-2">
        {stories.map((story) => (
          <StoryCard story={story} key={story.title} />
        ))}
      </div>
    </StandardPage>
  );
}

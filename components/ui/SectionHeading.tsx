import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <Badge className="mb-4" tone="coral">
          {eyebrow}
        </Badge>
      ) : null}
      <h2 className="font-serif text-step-4 font-semibold text-ink sm:text-step-5">
        {title}
      </h2>
      {description ? <p className="mt-5 text-step-1 text-ink/75">{description}</p> : null}
    </div>
  );
}

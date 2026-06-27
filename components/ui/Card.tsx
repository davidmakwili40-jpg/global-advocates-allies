import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardTone = "paper" | "warm" | "moss" | "ink";

const toneClasses: Record<CardTone, string> = {
  paper: "border-ink/10 bg-paper text-ink",
  warm: "border-gold-400/20 bg-paper-warm text-ink",
  moss: "border-moss-500/20 bg-moss-50 text-ink",
  ink: "border-white/10 bg-ink text-white"
};

type CardElement = "div" | "article" | "aside" | "section";

type CardProps = {
  as?: CardElement;
  children: ReactNode;
  className?: string;
  tone?: CardTone;
  interactive?: boolean;
} & HTMLAttributes<HTMLElement>;

export function Card({
  as,
  children,
  className,
  tone = "paper",
  interactive = false,
  ...props
}: CardProps) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "rounded-card border p-6 shadow-inset",
        toneClasses[tone],
        interactive && "transition duration-300 ease-editorial hover:-translate-y-1 hover:shadow-lift",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

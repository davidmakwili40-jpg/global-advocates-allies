import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const fieldClasses =
  "min-h-12 w-full rounded-field border border-ink/15 bg-white px-4 text-ink shadow-inset transition duration-200 ease-editorial placeholder:text-ink/40 hover:border-ink/25 focus:border-moss-700 focus:outline-none focus:ring-4 focus:ring-moss-500/15";

export function FieldLabel({
  children,
  htmlFor,
  hint
}: {
  children: ReactNode;
  htmlFor: string;
  hint?: string;
}) {
  return (
    <label className="block" htmlFor={htmlFor}>
      <span className="text-sm font-bold text-ink">{children}</span>
      {hint ? <span className="mt-1 block text-sm text-ink/60">{hint}</span> : null}
    </label>
  );
}

export function TextInput({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldClasses, className)} {...props} />;
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(fieldClasses, "min-h-36 py-3", className)} {...props} />;
}

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-ink/10 rounded-card border border-ink/10 bg-paper">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `accordion-panel-${index}`;
        const buttonId = `accordion-button-${index}`;

        return (
          <div key={item.question}>
            <button
              aria-controls={panelId}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left font-semibold text-ink"
              id={buttonId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              type="button"
            >
              {item.question}
              <ChevronDown
                aria-hidden="true"
                className={cn("size-5 shrink-0 transition-transform", isOpen && "rotate-180")}
              />
            </button>
            <div
              aria-labelledby={buttonId}
              className={cn("grid transition-all", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
              id={panelId}
              role="region"
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 leading-7 text-ink/75">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

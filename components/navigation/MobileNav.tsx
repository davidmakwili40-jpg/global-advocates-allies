"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { NavigationItem } from "@/types/content";

export function MobileNav({ items }: { items: NavigationItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <div className="lg:hidden">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        className="inline-flex size-11 items-center justify-center rounded-md text-ink hover:bg-moss-50"
        onClick={() => setIsOpen((value) => !value)}
        type="button"
      >
        {isOpen ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
      </button>
      <AnimatePresence>
        {isOpen ? (
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: -8 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: [0.2, 0.7, 0.2, 1] }}
          className="absolute inset-x-4 top-20 z-40 rounded-card border border-ink/10 bg-paper-warm p-4 shadow-lift"
          id="mobile-navigation"
        >
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {items.map((item) => (
              <div key={item.href}>
                <Link
                  className="block rounded-md px-3 py-3 font-bold text-ink hover:bg-moss-50"
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="ml-3 border-l border-ink/10 pl-3">
                    {item.children.map((child) => (
                      <Link
                        className="block rounded-md px-3 py-2 text-sm font-medium text-ink/70 hover:bg-moss-50 hover:text-ink"
                        href={child.href}
                        key={child.href}
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
        </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

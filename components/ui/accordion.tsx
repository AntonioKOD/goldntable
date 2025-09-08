"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

type Item = {
  id: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
};

export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = React.useState<string | null>(null);
  return (
    <div className="divide-y rounded-lg border bg-card text-card-foreground">
      {items.map((it) => {
        const isOpen = open === it.id;
        return (
          <div key={it.id} className="px-4">
            <button
              className={cn(
                "w-full py-4 text-left font-medium flex items-center justify-between",
                isOpen && "text-primary"
              )}
              onClick={() => setOpen(isOpen ? null : it.id)}
            >
              {it.trigger}
              <span className={cn("transition-transform", isOpen ? "rotate-180" : "rotate-0")}>▼</span>
            </button>
            {isOpen && <div className="pb-4 text-sm text-muted-foreground">{it.content}</div>}
          </div>
        );
      })}
    </div>
  );
}


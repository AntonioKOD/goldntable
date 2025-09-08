"use client"


import { Marquee } from "@/components/ui/marquee"
import { StackedCircularFooter } from "./ui/stacked-circular-footer"

export function SiteFooter() {
  const partners = ["Seaport Group", "North End Kitchens", "South Shore Dining", "Back Bay Hotels", "Cambridge Cafes"]


  return (
    <footer className="relative mt-32 overflow-hidden border-t bg-gradient-to-b from-background to-muted/20">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.3) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
          maskImage: "linear-gradient(to top, transparent 10%, black 30%, black 70%, transparent)",
        }}
        aria-hidden
      />

      <div className="relative z-10 border-b border-border/50 bg-muted/30 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="mb-3 text-center">
            <p className="text-sm font-medium text-muted-foreground">Trusted by leading hospitality partners</p>
          </div>
          <Marquee
            className="select-none [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
            pauseOnHover
          >
            {partners.map((name) => (
              <div
                key={name}
                className="mx-4 flex items-center gap-3 rounded-full border border-border/60 bg-card/80 px-6 py-3 text-sm font-medium text-foreground/90 shadow-sm backdrop-blur-sm transition-all hover:bg-card hover:shadow-md"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                {name}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <StackedCircularFooter />
    </footer>
  )
}

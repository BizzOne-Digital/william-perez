/**
 * PlatformPillar — expandable pillar card for the H.A.T. platform page.
 *
 * Each pillar shows:
 *   - Pillar letter badge (H / A / T)
 *   - Title + framing description
 *   - Optional callout stat
 *   - Collapsible list of 4 sub-initiatives (open by default on desktop,
 *     collapsed behind a toggle on mobile to keep the page scannable)
 */
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatedCard } from "@/components/motion";
import type { CampaignPriority } from "@/lib/campaign";
import { cn } from "@/lib/utils";

interface PlatformPillarProps {
  priority: CampaignPriority;
  /** Visual index (0-based) used for stagger delays. */
  index?: number;
}

export function PlatformPillar({ priority, index = 0 }: PlatformPillarProps) {
  const [open, setOpen] = useState(false);

  const pillarColors: Record<string, string> = {
    H: "bg-gold/10 text-gold border-gold/30",
    A: "bg-gold/10 text-gold border-gold/30",
    T: "bg-gold/10 text-gold border-gold/30",
  };

  return (
    <AnimatedCard>
      <article className="card-lift group overflow-hidden rounded-2xl border border-border bg-card">
        {/* Pillar header */}
        <div className="p-7 md:p-8">
          <div className="flex items-start gap-4">
            {/* Letter badge */}
            <span
              className={cn(
                "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border font-display text-2xl font-bold transition-colors duration-300",
                pillarColors[priority.pillarLetter] ?? "bg-secondary text-navy",
              )}
              aria-hidden
            >
              {priority.pillarLetter}
            </span>
            <div className="min-w-0 flex-1">
              <p className="eyebrow text-[0.6rem] text-navy-soft">
                The H.A.T. Agenda · Pillar {priority.pillarLetter}
              </p>
              <h3 className="mt-1 font-display text-xl leading-snug text-navy sm:text-2xl">
                {priority.title}
              </h3>
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            {priority.description}
          </p>

          {/* Callout stat — only rendered when present */}
          {priority.callout && (
            <div className="mt-6 rounded-xl border border-gold/20 bg-gold/5 p-5">
              <p className="font-display text-3xl font-semibold text-gold">
                {priority.callout.stat}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {priority.callout.text}
              </p>
              <p className="mt-2 text-xs text-muted-foreground/60">
                Source: {priority.callout.source}
              </p>
            </div>
          )}
        </div>

        {/* Initiatives — expandable */}
        <div className="border-t border-border">
          {/* Toggle button (visible on all viewports) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="flex w-full items-center justify-between px-7 py-4 text-left text-sm font-semibold text-navy transition-colors hover:text-gold md:px-8"
          >
            <span className="eyebrow text-[0.65rem] text-navy-soft">
              {open ? "Hide" : "Show"} {priority.initiatives.length} initiatives
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 text-gold transition-transform duration-300",
                open && "rotate-180",
              )}
              aria-hidden
            />
          </button>

          {/* Initiative list */}
          {open && (
            <ul className="space-y-px border-t border-border">
              {priority.initiatives.map((init, i) => (
                <li
                  key={init.title}
                  className={cn(
                    "px-7 py-5 md:px-8",
                    i < priority.initiatives.length - 1 && "border-b border-border/60",
                  )}
                >
                  <p className="font-display text-base font-semibold text-navy">
                    {init.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {init.body}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </article>
    </AnimatedCard>
  );
}

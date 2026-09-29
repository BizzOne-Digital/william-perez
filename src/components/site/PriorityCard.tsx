/**
 * PriorityCard — compact pillar preview card used on the home page.
 *
 * Renders the H.A.T. pillar letter badge, title, description and a
 * "See the initiatives" link. For the full expandable pillar view
 * (with all 4 sub-initiatives), use PlatformPillar instead.
 */
import { ArrowRight, Building2, Home, Shield, type LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { AnimatedCard } from "@/components/motion";
import type { CampaignPriority } from "@/lib/campaign";

const icons: Record<CampaignPriority["icon"], LucideIcon> = {
  shield: Shield,
  home: Home,
  building: Building2,
};

export function PriorityCard({
  priority,
  href,
}: {
  priority: CampaignPriority;
  href?: "/platform" | "/contact";
}) {
  const Icon = icons[priority.icon];

  return (
    <AnimatedCard className="h-full">
      <article className="card-lift group flex h-full flex-col rounded-xl border border-border bg-card p-7">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-navy transition-transform duration-300 group-hover:-translate-y-0.5">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="mt-5 text-xl text-navy">{priority.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {priority.description}
        </p>
        {href && (
          <Link
            to={href}
            className="eyebrow mt-6 inline-flex items-center gap-2 text-navy transition-colors hover:text-gold"
          >
            See the initiatives
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        )}
      </article>
    </AnimatedCard>
  );
}

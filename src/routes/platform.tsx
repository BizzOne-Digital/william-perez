import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  AnimatedAccentLine,
  AnimatedCard,
  AnimatedText,
  MagneticButton,
  ScrollReveal,
  ScrollRevealGroup,
} from "@/components/motion";
import { PlatformPillar } from "@/components/site/PlatformPillar";
import { campaign, priorities, stakesStats } from "@/lib/campaign";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: `The H.A.T. Agenda | ${campaign.race}` },
      {
        name: "description",
        content:
          "The H.A.T. Agenda: Honest Protection for Seniors · Action on Affordability · Transparency at City Hall. Three real platform pillars for Inglewood City Council, District 1.",
      },
      {
        property: "og:title",
        content: `The H.A.T. Agenda | ${campaign.candidate} for ${campaign.race}`,
      },
      {
        property: "og:description",
        content:
          "Honest Protection · Action on Affordability · Transparency at City Hall. Built from conversations in every quadrant of District 1.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/platform" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/platform" }],
  }),
  component: PlatformPage,
});

/** Stat strip — replaces the old "Six / Shaped by Residents / In progress" placeholders. */
const platformStats = [
  { label: "Platform pillars", value: "3" },
  { label: "Quadrants organized", value: "4" },
  { label: "Election Day", value: campaign.electionDate },
];

function PlatformPage() {
  return (
    <>
      {/* Masthead */}
      <section className="relative overflow-hidden bg-background">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        />
        <div className="mx-auto w-full max-w-6xl px-5 pb-14 pt-16 md:pb-20 md:pt-24">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                <AnimatedText
                  as="span"
                  text="The Platform"
                  className="eyebrow block text-navy-soft"
                />
              </div>
              <AnimatedAccentLine className="mt-5" delay={0.1} />
              <AnimatedText
                as="h1"
                text="The H.A.T. Agenda"
                className="mt-6 font-display text-5xl leading-[1.02] text-navy sm:text-6xl lg:text-7xl"
                delay={0.2}
              />
            </div>

            <ScrollReveal delay={0.15} className="lg:pb-3">
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                Honest Protection · Action on Affordability · Transparency at City
                Hall. Three commitments, built from conversations in every quadrant of
                District 1 — and honest about what a council seat can and cannot do.
              </p>
              <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6">
                {platformStats.map((s) => (
                  <div key={s.label}>
                    <dt className="eyebrow text-[0.6rem] text-navy-soft">{s.label}</dt>
                    <dd className="mt-1.5 font-display text-lg text-navy">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The three pillars */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5">
          <ScrollReveal className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
              <span className="eyebrow text-navy-soft">Three pillars</span>
            </div>
            <AnimatedAccentLine className="mt-5" />
            <h2 className="mt-6 font-display text-3xl leading-tight text-navy sm:text-4xl">
              H · A · T — built from the ground up
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Each pillar carries four specific initiatives. Select "Show initiatives"
              on any pillar to see the full detail.
            </p>
          </ScrollReveal>

          <ScrollRevealGroup className="mt-14 grid gap-8 lg:grid-cols-1 xl:grid-cols-1">
            {priorities.map((p, i) => (
              <PlatformPillar key={p.pillarLetter} priority={p} index={i} />
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* "The Stakes" data section — NEW, no previous equivalent on the site */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5">
          <ScrollReveal className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
              <span className="eyebrow text-navy-soft">The stakes</span>
            </div>
            <AnimatedAccentLine className="mt-5" />
            <h2 className="mt-6 font-display text-3xl leading-tight text-navy sm:text-4xl">
              Why this matters in District 1 right now
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              The numbers behind the platform — cited statistics, not talking points.
            </p>
          </ScrollReveal>

          <ScrollRevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stakesStats.map((s) => (
              <AnimatedCard key={s.stat}>
                <div className="card-lift group rounded-2xl border border-border bg-card p-6">
                  <p className="font-display text-3xl font-semibold text-gold sm:text-4xl">
                    {s.stat}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-navy">{s.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.detail}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground/60">
                    Source: {s.source}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </ScrollRevealGroup>

          {/* Closing pull-quote for the Stakes section */}
          <ScrollReveal delay={0.1} className="mt-12">
            <blockquote className="rounded-2xl border border-gold/20 bg-secondary/40 px-8 py-7 text-center md:px-12">
              <p className="font-display text-xl leading-relaxed text-navy sm:text-2xl">
                "This is not homeowners versus renters. District 1 succeeds when our
                neighborhoods are stable for everyone."
              </p>
              <footer className="mt-4 text-sm text-muted-foreground">
                — {campaign.candidate}, candidate for {campaign.race}
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="surface-navy relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/15 blur-3xl"
        />
        <div className="relative mx-auto w-full max-w-3xl px-5 py-20 text-center md:py-24">
          <ScrollReveal>
            <span className="eyebrow text-gold">Have a priority we missed?</span>
            <h2 className="mx-auto mt-5 max-w-xl font-display text-3xl leading-tight text-cream sm:text-4xl">
              The best priorities come straight from the neighborhood.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-cream/75">
              Share what you would put at the top of the list.
            </p>
            <MagneticButton>
              <Link
                to="/contact"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-navy-deep transition-colors hover:bg-gold-soft"
              >
                Contact the campaign
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

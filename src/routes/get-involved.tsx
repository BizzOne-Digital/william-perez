import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail } from "lucide-react";
import {
  AnimatedAccentLine,
  AnimatedCard,
  AnimatedText,
  MagneticButton,
  ScrollReveal,
  ScrollRevealGroup,
} from "@/components/motion";
import { campaign, joinSteps, quadrants } from "@/lib/campaign";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: `Get Involved | ${campaign.name}` },
      {
        name: "description",
        content: `Join your District 1 quadrant team and help elect ${campaign.candidate} to ${campaign.race}. Three simple steps, four quadrant teams — every hour counts before ${campaign.electionDate}.`,
      },
      {
        property: "og:title",
        content: `Get Involved | ${campaign.candidate} for ${campaign.race}`,
      },
      {
        property: "og:description",
        content: `Four Quadrants, One Team. Join the campaign before ${campaign.electionDate}.`,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/get-involved" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
  component: GetInvolvedPage,
});

function GetInvolvedPage() {
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
                  text="Get Involved"
                  className="eyebrow block text-navy-soft"
                />
              </div>
              <AnimatedAccentLine className="mt-5" delay={0.1} />
              <AnimatedText
                as="h1"
                text="Four Quadrants, One Team."
                className="mt-6 font-display text-5xl leading-[1.02] text-navy sm:text-6xl lg:text-7xl"
                delay={0.2}
              />
            </div>

            <ScrollReveal delay={0.15} className="lg:pb-3">
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                District 1 is big enough that no one campaign can knock on every door
                alone. Join your quadrant team, and let's cover every block together
                before {campaign.electionDate}.
              </p>
              <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6">
                {[
                  { label: "Quadrant teams", value: "4" },
                  { label: "Ways to help", value: "Many" },
                  { label: "Election Day", value: "Nov 3, 2026" },
                ].map((m) => (
                  <div key={m.label}>
                    <dt className="eyebrow text-[0.6rem] text-navy-soft">{m.label}</dt>
                    <dd className="mt-1.5 font-display text-lg text-navy">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Three simple steps — mirrors the existing "How it works" pattern */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5">
          <ScrollReveal className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
              <span className="eyebrow text-navy-soft">How to join</span>
            </div>
            <AnimatedAccentLine className="mt-5" />
            <h2 className="mt-6 font-display text-3xl leading-tight text-navy sm:text-4xl">
              Three simple steps
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              No experience required — just a few hours and a willingness to talk to
              your neighbors.
            </p>
          </ScrollReveal>

          <ScrollRevealGroup className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {joinSteps.map((s) => (
              <AnimatedCard key={s.step}>
                <div className="group border-t border-border pt-6 transition-colors duration-300 hover:border-gold">
                  <span className="font-display text-5xl font-semibold text-gold/80 transition-colors duration-300 group-hover:text-gold">
                    {s.step}
                  </span>
                  <h3 className="mt-5 font-display text-xl text-navy">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* Four Quadrant cards */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5">
          <ScrollReveal className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
              <span className="eyebrow text-navy-soft">Your quadrant</span>
            </div>
            <AnimatedAccentLine className="mt-5" />
            <h2 className="mt-6 font-display text-3xl leading-tight text-navy sm:text-4xl">
              Find your team
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Each quadrant has its own team lead, canvassing schedule, and focus areas.
              Tell us where you live and we'll connect you.
            </p>
          </ScrollReveal>

          <ScrollRevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quadrants.map((q) => (
              <AnimatedCard key={q.number} className="h-full">
                <article className="card-lift group flex h-full flex-col rounded-xl border border-border bg-card p-7">
                  {/* Quadrant number badge */}
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy font-display text-xl font-bold text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-deep">
                    Q{q.number}
                  </span>
                  <h3 className="mt-5 font-display text-lg text-navy">{q.area}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {q.focus}
                  </p>
                  <Link
                    to="/contact"
                    className="eyebrow mt-6 inline-flex items-center gap-2 text-navy transition-colors hover:text-gold"
                  >
                    Join this team
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                </article>
              </AnimatedCard>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="surface-navy relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/15 blur-3xl"
        />
        <div className="relative mx-auto w-full max-w-3xl px-5 py-20 text-center md:py-24">
          <ScrollReveal>
            <span className="eyebrow text-gold">Ready to join?</span>
            <h2 className="mx-auto mt-5 max-w-xl font-display text-3xl leading-tight text-cream sm:text-4xl">
              Every block covered is a vote closer to {campaign.electionDate}.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-cream/75">
              Send us a message and tell us which quadrant you're in — we'll take it
              from there.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-soft"
                >
                  Sign up now
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </MagneticButton>
              {/* TODO: confirm real campaign contact info before public launch */}
              <a
                href={`mailto:${campaign.email}`}
                className="inline-flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4 text-gold" aria-hidden />
                {campaign.email}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Mail, Phone, Users } from "lucide-react";
import heroImage from "@/assets/candidate-hero.jpg";
import {
  AnimatedAccentLine,
  AnimatedCard,
  CampaignMarquee,
  MagneticButton,
  ParallaxImage,
  ScrollReveal,
  ScrollRevealGroup,
} from "@/components/motion";
import { Hero } from "@/components/site/Hero";
import { campaign, marqueeWords, priorities } from "@/lib/campaign";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "William Perez for Inglewood City Council — District 1" },
      {
        name: "description",
        content:
          "William Perez is running for Inglewood City Council, District 1 — a 16-year Inglewood small business owner focused on Honest Protection, Action on Affordability, and Transparency at City Hall. Election: November 3, 2026.",
      },
      {
        property: "og:title",
        content: "William Perez for Inglewood City Council — District 1",
      },
      {
        property: "og:description",
        content:
          "Honest Protection · Action on Affordability · Transparency at City Hall. William Perez for Inglewood City Council, District 1. November 3, 2026.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

/** Stat/highlight row — three real campaign data points. */
const highlights = [
  {
    stat: "16 Years",
    label: "Running a small business in Inglewood",
    icon: Users,
  },
  {
    stat: "4",
    label: "District 1 quadrants organized",
    icon: Users,
  },
  {
    stat: "Nov 3, 2026",
    label: "Election Day",
    icon: Calendar,
  },
];

/** Pillar icon letters for the preview cards — keeps design consistent. */
const pillarAccents: Record<string, string> = {
  H: "text-gold",
  A: "text-gold",
  T: "text-gold",
};

function Index() {
  return (
    <>
      {/* Hero */}
      <Hero />

      <CampaignMarquee words={marqueeWords} />

      {/* Stat highlight row */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto w-full max-w-6xl px-5 py-12">
          <ScrollRevealGroup className="grid gap-6 sm:grid-cols-3">
            {highlights.map((h) => (
              <div
                key={h.stat}
                className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left"
              >
                <span className="font-display text-3xl font-semibold text-navy sm:text-4xl">
                  {h.stat}
                </span>
                <span className="text-sm leading-snug text-muted-foreground">{h.label}</span>
              </div>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* "Why this campaign" intro */}
      <section className="mx-auto w-full max-w-6xl px-5 py-20 md:py-28">
        <ScrollReveal>
          <span className="eyebrow text-navy-soft">Why this campaign</span>
          <AnimatedAccentLine className="mt-4" />
          <h2 className="mt-6 max-w-2xl font-display text-3xl leading-tight text-navy sm:text-4xl">
            Real experience. Real neighbors. Real accountability.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            District 1 deserves a council member who brings real experience to real
            transparency — open books at City Hall, community-benefit agreements that
            deliver, and investment that reaches every block, not just the ones near
            the cameras.
          </p>
        </ScrollReveal>
      </section>

      {/* H.A.T. Platform priorities preview — 3 real pillars */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5">
          <ScrollReveal>
            <span className="eyebrow text-navy-soft">The H.A.T. Agenda</span>
            <h2 className="mt-4 font-display text-3xl text-navy sm:text-4xl">
              Three commitments to District 1
            </h2>
          </ScrollReveal>
          <ScrollRevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {priorities.map((p) => (
              <AnimatedCard key={p.pillarLetter} className="h-full">
                <article className="card-lift group flex h-full flex-col rounded-xl border border-border bg-card p-7">
                  {/* Pillar letter badge */}
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy/5 font-display text-2xl font-bold text-navy transition-colors duration-300 group-hover:bg-gold/10 group-hover:text-gold">
                    {p.pillarLetter}
                  </span>
                  <h3 className="mt-5 font-display text-lg leading-snug text-navy">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <Link
                    to="/platform"
                    className="eyebrow mt-6 inline-flex items-center gap-2 text-navy transition-colors hover:text-gold"
                  >
                    See the initiatives
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                </article>
              </AnimatedCard>
            ))}
          </ScrollRevealGroup>
          <ScrollReveal className="mt-10 text-center">
            <MagneticButton>
              <Link
                to="/platform"
                className="inline-flex items-center gap-2 rounded-full border border-navy px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-cream"
              >
                View the full platform
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>

      {/* About preview */}
      <section className="mx-auto w-full max-w-6xl px-5 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ParallaxImage range={20}>
            <ScrollReveal>
              <img
                src={heroImage}
                alt={`${campaign.candidate} meeting District 1 residents in Inglewood`}
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
              />

            </ScrollReveal>
          </ParallaxImage>
          <ScrollReveal delay={0.1}>
            <span className="eyebrow text-navy-soft">About {campaign.candidate}</span>
            <AnimatedAccentLine className="mt-4" />
            <h2 className="mt-6 font-display text-3xl text-navy sm:text-4xl">
              A neighbor first, a candidate second
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Twenty-plus years as a District 1 resident, 16 years running a small
              business here, and a track record of showing up on the committees that
              shape our schools, our land use, and our neighborhoods.
            </p>
            <Link
              to="/about"
              className="eyebrow mt-8 inline-flex items-center gap-2 text-navy transition-colors hover:text-gold"
            >
              Read William's story
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Join / CTA section */}
      <section className="surface-navy relative overflow-hidden">
        <div className="relative mx-auto w-full max-w-6xl px-5 py-20 text-center md:py-24">
          <ScrollReveal>
            <span className="eyebrow text-gold">Get involved</span>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl text-cream sm:text-4xl">
              Every conversation moves us closer to November 3
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-cream/75">
              Join your quadrant team, and let's cover every block together before{" "}
              {campaign.electionDate}.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton>
                <Link
                  to="/get-involved"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-soft"
                >
                  Get Involved
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
              <a
                href={`tel:${campaign.phone.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4 text-gold" aria-hidden />
                {campaign.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

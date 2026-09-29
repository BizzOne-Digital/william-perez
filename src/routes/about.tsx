import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Heart, Mail, Phone, Scale, Users } from "lucide-react";
import {
  AnimatedAccentLine,
  AnimatedCard,
  AnimatedText,
  MagneticButton,
  ScrollReveal,
  ScrollRevealGroup,
} from "@/components/motion";
import { CandidateBlend } from "@/components/site/CandidateBlend";
import { campaign } from "@/lib/campaign";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `Meet ${campaign.candidate} | ${campaign.race}` },
      {
        name: "description",
        content: `${campaign.candidate} is running for ${campaign.race} — 20+ year District 1 resident, 16-year small business owner, Vice Chair of the IUSD Asset Management Advisory Committee.`,
      },
      {
        property: "og:title",
        content: `Meet ${campaign.candidate} | ${campaign.race}`,
      },
      {
        property: "og:description",
        content: `Background, civic service and the approach behind ${campaign.candidate}'s campaign for ${campaign.race}.`,
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

/** Quick-facts strip — sourced directly from the campaign one-pager. */
const quickFacts = [
  { label: "Resident of District 1", value: "20+ years" },
  { label: "Small Business Tenure", value: "16 years, COO" },
  { label: "Family", value: "Married 35 yrs · 2 daughters · 3 grandchildren" },
  { label: "Committee", value: "William Perez for Inglewood City Council 2026" },
];

/** Civic service roles — dedicated section per the content file. */
const civicRoles = [
  {
    title: "Vice Chair, IUSD Asset Management Advisory Committee",
    org: "Inglewood Unified School District",
    body: "Advises on the use and stewardship of district facilities and assets — the same schools his grandchildren attend at Kelso Elementary.",
  },
  {
    title: "Member, General Plan Advisory Committee (GPAC)",
    org: "City of Inglewood",
    body: "Inglewood's citizen body shaping long-range land use and community planning policy.",
  },
  {
    title: "Member, Next Level Inglewood",
    org: "Community Organization",
    body: "Community organizing group focused on District 1 issues and civic participation.",
  },
  {
    title: "Chief Operating Officer, West Coast Complete Auto Care, LLC",
    org: "Inglewood Small Business",
    body: "16 years in day-to-day small business and multi-unit retail operations management in Inglewood.",
  },
];

/** At a Glance — five key facts rendered as cards above the "How I lead" section. */
const atAGlance = [
  {
    icon: Users,
    label: "Resident of District 1",
    value: "20+ years",
    detail: "A longtime neighbor who has watched this district grow and change firsthand.",
  },
  {
    icon: Briefcase,
    label: "Small Business Tenure",
    value: "16 years",
    detail: "",
  },
  {
    icon: Scale,
    label: "Civic Service",
    value: "IUSD · GPAC · Next Level Inglewood",
    detail: "Vice Chair, IUSD Asset Mgmt. Advisory Committee; Member, General Plan Advisory Committee (GPAC); Member, Next Level Inglewood.",
  },
  {
    icon: Heart,
    label: "Family",
    value: "Married 35 years",
    detail: "2 daughters · 3 grandchildren at Kelso Elementary, IUSD.",
  },
  {
    icon: Users,
    label: "Committee",
    value: "William Perez for Inglewood City Council 2026",
    detail: "William Perez, Treasurer.",
  },
];

/** Supporting pull-quotes — rotate as quote cards. */
const pullQuotes = [
  "Every proposal has to be paid for, and I will be transparent about that.",
  "Honest leadership means using every tool we have, not pretending we control tools we do not.",
  "I am not asking for trust without accountability. I am proposing clear goals and public results.",
  "The difference is coordination, access, and accountability.",
];

function AboutPage() {
  return (
    <>
      {/* Intro masthead */}
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
                  text="About the candidate"
                  className="eyebrow block text-navy-soft"
                />
              </div>
              <AnimatedAccentLine className="mt-5" delay={0.1} />
              <AnimatedText
                as="h1"
                text={`Meet ${campaign.candidate}`}
                className="mt-6 font-display text-5xl leading-[1.02] text-navy sm:text-6xl lg:text-7xl"
                delay={0.2}
              />
            </div>

            <ScrollReveal delay={0.15} className="lg:pb-3">
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                {campaign.candidate} is running for {campaign.race} with a simple
                commitment: real experience, real neighbors, real accountability.
              </p>
              {/* Quick facts strip */}
              <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6">
                {quickFacts.map((f) => (
                  <div key={f.label}>
                    <dt className="eyebrow text-[0.6rem] text-navy-soft">{f.label}</dt>
                    <dd className="mt-1.5 font-display text-base text-navy">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Cinematic candidate blend with biography copy */}
      <section className="relative isolate w-full overflow-hidden">
        <CandidateBlend
          side="left"
          alt={`${campaign.candidate}, candidate for ${campaign.race}, on a neighborhood street in Inglewood`}
        />
        <div className="hero-content-pad relative z-10 mx-auto flex min-h-[34rem] w-full max-w-6xl items-end px-5 pb-16 md:min-h-[40rem] md:items-center md:justify-end md:py-24 md:pt-24">
          <ScrollReveal className="w-full md:max-w-[34rem] md:pl-8 lg:max-w-[38rem] lg:pl-12">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
              <span className="eyebrow text-gold">About {campaign.candidate}</span>
            </div>
            <span
              aria-hidden
              className="hero-accent-sheen mt-5 block h-px origin-left bg-gradient-to-r from-gold via-gold to-transparent"
              style={{ maxWidth: "9rem" }}
            />
            <h2 className="mt-6 font-display text-3xl leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
              A neighbor first, a candidate second
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream/75">
              For over 16 years I've served as Chief Operating Officer of a small business right here in Inglewood. Running
              a shop day in and day out taught me how to manage a budget honestly, keep
              promises to the people who count on you, and fix problems instead of
              talking around them — the same approach I want to bring to City Hall.
            </p>
            <p className="mt-4 text-base leading-relaxed text-cream/70">
              I've spent years serving my community outside of business too: as Vice
              Chair of the IUSD Asset Management Advisory Committee, as a member of the
              General Plan Advisory Committee (GPAC), and with Next Level Inglewood.
              Those seats taught me how land-use decisions, school facilities, and city
              planning connect — and how often residents are the last to know about
              decisions that affect them most.
            </p>
            <MagneticButton>
              <Link
                to="/platform"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-navy-deep shadow-[0_18px_40px_-18px_oklch(0.79_0.135_82_/_0.7)] transition-colors hover:bg-gold-soft"
              >
                See the platform
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>

      {/* Full biography */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <ScrollReveal>
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                  <span className="eyebrow text-navy-soft">Full biography</span>
                </div>
                <AnimatedAccentLine className="mt-5" />
                <h2 className="mt-6 font-display text-3xl leading-tight text-navy sm:text-4xl">
                  Honest about limits. Serious about results.
                </h2>
                <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                  Twenty-plus years as a District 1 resident, 16 years running a
                  business, and a track record of showing up on the committees that
                  actually shape Inglewood.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  I'm running because District 1 deserves a council member who brings
                  real experience to real transparency — open books at City Hall,
                  community-benefit agreements that deliver, and investment that reaches
                  every block, not just the ones near the cameras.
                </p>
                <p>
                  For over 16 years I've served as Chief Operating Officer of a small business right here in Inglewood.
                  Running a shop day in and day out taught me how to manage a budget
                  honestly, keep promises to the people who count on you, and fix
                  problems instead of talking around them — the same approach I want to
                  bring to City Hall.
                </p>
                <p>
                  I've spent years serving my community outside of business too: as
                  Vice Chair of the Inglewood Unified School District (IUSD) Asset
                  Management Advisory Committee, as a member of the General Plan
                  Advisory Committee (GPAC), and with Next Level Inglewood. Those seats
                  taught me how land-use decisions, school facilities, and city planning
                  connect — and how often residents are the last to know about decisions
                  that affect them most.
                </p>
                <p>
                  William Perez is running because too many decisions get made downtown without ever asking District 1
                  residents what we actually need. This district is renters and
                  homeowners, longtime families and new neighbors, every voice belongs at the table.
                </p>
                <p>
                  Family is a big part of why I care so much about this community. I've
                  been married for 35 years, and my wife and I have raised two daughters
                  — both married now — and we're proud grandparents to three
                  grandchildren. Our grandkids attend Kelso Elementary right here in the
                  Inglewood Unified School District, which means the decisions I've
                  spent years working on through IUSD's Asset Management Advisory
                  Committee aren't abstract policy to me. They're about the same schools
                  and streets my own grandchildren grow up in.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Civic service — dedicated section */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5">
          <ScrollReveal className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
              <span className="eyebrow text-navy-soft">Civic service</span>
            </div>
            <AnimatedAccentLine className="mt-5" />
            <h2 className="mt-6 font-display text-3xl leading-tight text-navy sm:text-4xl">
              Showing up before the campaign
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              William has been at the table on the committees that shape Inglewood's
              schools, land use, and neighborhoods — not as a candidate, but as a
              neighbor.
            </p>
          </ScrollReveal>

          <ScrollRevealGroup className="mt-14 grid gap-6 sm:grid-cols-2">
            {civicRoles.map((role) => (
              <AnimatedCard key={role.title}>
                <article className="card-lift group relative overflow-hidden rounded-2xl border border-border bg-card p-7 md:p-8">
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gold transition-transform duration-300 group-hover:scale-y-100"
                  />
                  <p className="eyebrow text-[0.6rem] text-navy-soft">{role.org}</p>
                  <h3 className="mt-2 font-display text-lg text-navy">{role.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {role.body}
                  </p>
                </article>
              </AnimatedCard>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* At a Glance — card grid, sits above "How I lead" */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
              <span className="eyebrow text-navy-soft">At a glance</span>
            </div>
            <AnimatedAccentLine className="mt-5" />
            <h2 className="mt-6 font-display text-3xl leading-tight text-navy sm:text-4xl">
              The person behind the platform
            </h2>
          </ScrollReveal>

          <ScrollRevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {atAGlance.map((item) => (
              <AnimatedCard key={item.label} className="h-full">
                <article className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-7">
                  {/* Gold left-edge accent on hover */}
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gold transition-transform duration-300 group-hover:scale-y-100"
                  />
                  {/* Icon */}
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 text-navy transition-colors duration-300 group-hover:bg-gold/10 group-hover:text-gold">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </span>
                  {/* Label (eyebrow) */}
                  <p className="eyebrow mt-4 text-[0.6rem] uppercase tracking-widest text-navy-soft">
                    {item.label}
                  </p>
                  {/* Primary value */}
                  <p className="mt-1.5 font-display text-lg font-semibold leading-snug text-navy sm:text-xl">
                    {item.value}
                  </p>
                  {/* Supporting detail */}
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </article>
              </AnimatedCard>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* Quote block — "Honest about limits. Serious about results." */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
              <span className="eyebrow text-navy-soft">How I lead</span>
            </div>
            <AnimatedAccentLine className="mt-5" />
            <h2 className="mt-6 font-display text-3xl leading-tight text-navy sm:text-4xl">
              Honest about limits. Serious about results.
            </h2>
          </ScrollReveal>

          {/* Lead quote */}
          <ScrollReveal delay={0.1} className="mt-10">
            <blockquote className="relative rounded-2xl border border-gold/30 bg-secondary/40 p-8 md:p-10">
              <span
                aria-hidden
                className="absolute left-8 top-6 font-display text-6xl leading-none text-gold/30 select-none"
              >
                "
              </span>
              <p className="relative mt-4 font-display text-xl leading-relaxed text-navy sm:text-2xl">
                I will always be honest about what City Council can and cannot do. But
                I will never use those limits as an excuse to do nothing.
              </p>
              <footer className="mt-5 text-sm text-muted-foreground">
                — {campaign.candidate}, candidate for {campaign.race}
              </footer>
            </blockquote>
          </ScrollReveal>

          {/* Supporting pull-quotes grid */}
          <ScrollRevealGroup className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pullQuotes.map((q, i) => (
              <AnimatedCard key={i}>
                <blockquote className="card-lift rounded-xl border border-border bg-card p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">"{q}"</p>
                </blockquote>
              </AnimatedCard>
            ))}
          </ScrollRevealGroup>
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
            <span className="eyebrow text-gold">Get in touch</span>
            <h2 className="mx-auto mt-5 max-w-xl font-display text-3xl leading-tight text-cream sm:text-4xl">
              Have a question for {campaign.candidate}?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-cream/75">
              Reach out any time, or stop by a town hall in your quadrant.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <MagneticButton>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-navy-deep transition-colors hover:bg-gold-soft"
                >
                  Contact the campaign
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden
                  />
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

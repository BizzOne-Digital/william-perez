import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  AnimatedAccentLine,
  AnimatedText,
  MagneticButton,
  ScrollReveal,
} from "@/components/motion";

const hat = [
  { letter: "H", text: "Honest Protection: keep event traffic off residential streets" },
  { letter: "A", text: "Action on Affordability: venues pay their share, not residents" },
  { letter: "T", text: "Transparency & Accountability: measure and publish every event" },
];

const alreadyComing = [
  "$261M Transit Connector Phase 1, funded by State of California and Metro grants",
  "Event-day shuttle lanes north and south, with bus-priority signals",
  "Three parking and transit hubs with 1,000+ stalls, plus a pedestrian bridge over Florence to the K Line",
  "Streetscape work starts November 2026; bus lanes and signals in 2027",
  "The elevated people mover is paused for lack of funding",
  "The gap: rules, enforcement and public reporting. District 1 should own this part.",
];

const pillars = [
  {
    title: "H — Honest Protection",
    items: [
      "Local-access-only zones on event days, with staffed checkpoints",
      "Emergency routes to Centinela Hospital and fire stations kept clear",
      "Free parking permits for seniors and caregivers; guest permits by phone",
      "Litter and noise cleanup within 12 hours of each event",
    ],
  },
  {
    title: "A — Action on Affordability",
    items: [
      "Venues share event costs: enforcement, shuttles, cleanup",
      "Relief fund and access guarantees for Market Street businesses during construction",
      "Inglewood residents first in line for traffic and shuttle jobs",
      "Free or discounted shuttle days for residents",
    ],
  },
  {
    title: "T — Transparency & Accountability",
    items: [
      "Publish baseline traffic data before bus lanes open in 2027",
      "Scorecard within 72 hours of every event over 15,000 people",
      "Shared calendar for all four venues, start times 90+ minutes apart",
      "Quarterly District 1 traffic town halls; annual independent review",
    ],
  },
];

const comparisonHead = ["Measure", "Est. Cost", "Timeline", "Lead", "Partners", "Impact"];
const comparison = [
  ["Event bus lanes + signals", "Within $261M ITC", "2027", "Public Works", "Metro, Elevate Inglewood", "High"],
  ["Hubs + Florence bridge", "Within $261M ITC", "Nov 2026–2028", "City / Elevate Inglewood", "Metro, State", "High"],
  ["Remote parking + shuttles", "Est. $25K–$75K/event", "Now", "Parking & Traffic", "Venues, Metro", "High"],
  ["Local-access zones", "Est. $8K–$20K/event", "Q1 2027 pilot", "Inglewood PD", "Public Works", "High"],
  ["Emergency corridors", "Low", "Q1 2027 pilot", "Fire Dept", "PD, Centinela", "High"],
  ["Permit upgrades", "Est. $50K–$150K once", "6–9 months", "Parking & Traffic", "City IT", "Medium"],
  ["Venue cost-share", "Brings in money", "2027", "City Manager / Council", "SoFi, Intuit Dome, Forum", "Med–High"],
  ["Business relief fund", "Est. $250K–$500K", "Before Nov 2026", "Economic Development", "Chamber, Elevate", "Medium"],
  ["Rideshare zones", "Low", "3–6 months", "Parking & Traffic", "Uber, Lyft", "Medium"],
  ["Event stagger rule", "Low", "6 months", "City Manager", "All four venues", "Med–High"],
  ["Baseline + scorecard", "Est. $40K–$100K/yr", "Q1 2027", "Public Works", "PD, venues", "Medium"],
  ["Freeway ramp coordination", "Caltrans-funded", "Ongoing", "Caltrans D7", "City traffic center", "Medium"],
  ["Elevated people mover", "Very high; unfunded", "After 2028", "City / Metro", "State, federal", "Highest"],
];

const timeline = [
  { when: "Oct–Dec 2026", title: "Prepare", text: "Business relief, resident alerts, data request" },
  { when: "Jan–Mar 2027", title: "First 90 days", text: "Baseline, pilots, venue talks" },
  { when: "Spring–Summer 2027", title: "Budget", text: "Fund it in FY 2027–28" },
  { when: "2027–2028", title: "Build", text: "Bus lanes, hubs, Olympic test" },
  { when: "After 2028", title: "Review", text: "Independent review" },
];

const success = [
  ["Time to clear traffic after events", "25% faster than baseline"],
  ["Fans arriving by transit or shuttle", "Higher every year"],
  ["Resident complaints per event", "30% fewer"],
  ["Emergency response on event days", "No slower than normal days"],
  ["Scorecards posted on time", "100% within 72 hours"],
];

const residentSteps = [
  <>
    Get your parking permit. Call Parking &amp; Traffic at{" "}
    <a
      href="tel:+13104125398"
      title="Call (310) 412-5398"
      className="font-semibold text-navy underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
    >
      (310) 412-5398
    </a>
  </>,
  "Register guest permits before event days",
  "Report blocked driveways right away",
  "Plan errands around event start times",
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <ScrollReveal className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
        <span className="eyebrow text-navy-soft">{eyebrow}</span>
      </div>
      <AnimatedAccentLine className="mt-5" />
      <h2 className="mt-6 font-display text-3xl leading-tight text-navy sm:text-4xl">{title}</h2>
    </ScrollReveal>
  );
}

function DataTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[40rem] text-left text-sm">
        <thead className="bg-navy text-cream">
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="border-t border-border even:bg-secondary/40">
              {r.map((c, i) => (
                <td key={i} className={i === 0 ? "px-4 py-3 font-medium text-navy" : "px-4 py-3 text-muted-foreground"}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Event traffic plan (from the District 1 H.A.T. event traffic presentation). */
export function EventTrafficPlan() {
  return (
    <>
      {/* Event traffic intro */}
      <section id="event-traffic" className="relative scroll-mt-24 overflow-hidden bg-secondary/40">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        />
        <div className="mx-auto w-full max-w-6xl px-5 pt-20 md:pt-28">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
            <AnimatedText as="span" text="Event Traffic" className="eyebrow block text-navy-soft" />
          </div>
          <AnimatedAccentLine className="mt-5" delay={0.1} />
          <AnimatedText
            as="h2"
            text="Moving Fans, Protecting Neighbors"
            className="mt-6 font-display text-4xl leading-[1.05] text-navy sm:text-5xl lg:text-6xl"
            delay={0.2}
          />
          <ScrollReveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A H.A.T. Plan for Event Traffic in Inglewood District 1
            </p>
            <p className="mt-2 text-sm text-navy-soft">William Perez | October 2026</p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="bg-secondary/40 pb-20 pt-14 md:pb-28 md:pt-20">
        <div className="mx-auto w-full max-w-6xl px-5">
          <SectionHeading eyebrow="Overview" title="The Bottom Line" />
          <ScrollReveal>
            <p className="mt-6 max-w-4xl text-lg font-semibold leading-relaxed text-navy">
              Manage event traffic from SoFi, Intuit Dome, the Forum and YouTube Theater as one
              system. Move fans to transit, keep cars on major corridors, close neighborhoods to
              cut-through traffic, and publish the results.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {hat.map((h) => (
              <ScrollReveal key={h.letter}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <p className="font-display text-5xl font-semibold text-gold">{h.letter}</p>
                  <p className="mt-5 text-base leading-relaxed text-foreground">{h.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What Is Already Coming */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5">
          <SectionHeading eyebrow="Context" title="What Is Already Coming" />
          <ScrollReveal>
            <ul className="mt-8 space-y-3 text-base leading-relaxed text-foreground">
              {alreadyComing.map((t) => (
                <li key={t} className="border-b border-border pb-3">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">
              Sources: Urbanize LA, ENR, LA Conservancy (Sept–Oct 2026)
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* H / A / T detail */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 lg:grid-cols-3">
          {pillars.map((p) => (
            <ScrollReveal key={p.title}>
              <div className="h-full rounded-2xl border border-border bg-card p-7">
                <h2 className="font-display text-2xl leading-tight text-navy">{p.title}</h2>
                <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-relaxed text-foreground marker:text-gold">
                  {p.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5">
          <SectionHeading eyebrow="Comparison" title="Comparison: Cost, Timeline, Agencies" />
          <ScrollReveal className="mt-10">
            <DataTable head={comparisonHead} rows={comparison} />
            <p className="mt-4 text-xs text-muted-foreground">
              "Est." figures are planning estimates to confirm with city staff.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5">
          <SectionHeading eyebrow="Roadmap" title="Timeline" />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {timeline.map((t, i) => (
              <ScrollReveal key={t.when}>
                <li>
                  <p
                    className={
                      i % 2
                        ? "rounded-md bg-gold px-4 py-3 text-sm font-semibold text-navy-deep"
                        : "rounded-md bg-navy px-4 py-3 text-sm font-semibold text-cream"
                    }
                  >
                    {t.when}
                  </p>
                  <h3 className="mt-5 font-display text-xl text-navy">{t.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{t.text}</p>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Measure success */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5">
          <SectionHeading eyebrow="Accountability" title="How We Will Measure Success" />
          <ScrollReveal className="mt-10">
            <DataTable head={["Measure", "Target"]} rows={success} />
            <p className="mt-4 text-sm text-muted-foreground">
              Targets will be adjusted once the city provides baseline data.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* For residents */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5">
          <SectionHeading eyebrow="For residents" title="For Residents: What You Can Do Today" />
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <ScrollReveal>
              <ul className="space-y-3 text-base leading-relaxed text-foreground">
                {residentSteps.map((s, i) => (
                  <li key={i} className="border-b border-border pb-3">
                    {s}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-4 font-semibold text-navy">
                <p>Construction on Market, Manchester and Queen starts in November 2026.</p>
                <p>
                  Updates:{" "}
                  <a
                    href="https://inglewoodtransitconnector.com/updates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all underline decoration-gold underline-offset-4 hover:text-gold"
                  >
                    inglewoodtransitconnector.com/updates
                  </a>
                </p>
                <p>Shop local on Market Street during construction.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Event traffic closing */}
      <section className="relative overflow-hidden border-t border-border bg-background">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/15 blur-3xl"
        />
        <div className="relative mx-auto w-full max-w-3xl px-5 py-20 text-center md:py-24">
          <ScrollReveal>
            <h2 className="mx-auto max-w-2xl font-display text-3xl leading-tight text-navy sm:text-4xl">
              Your Street. Your Neighborhood. Event Days Done Right.
            </h2>
            <p className="mx-auto mt-5 text-base font-semibold text-navy-soft">Join the District 1 Traffic Town Hall</p>
            <p className="mx-auto mt-2 text-sm text-muted-foreground">
              William Perez for Inglewood City Council, District 1
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

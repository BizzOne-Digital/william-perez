import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { AnimatedAccentLine, AnimatedText, ScrollReveal } from "@/components/motion";
import { ContactForm } from "@/components/site/ContactForm";
import { campaign } from "@/lib/campaign";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact the Campaign | ${campaign.race}` },
      {
        name: "description",
        content: `Get in touch with the ${campaign.name} — volunteer, ask a question or share an idea about District 1.`,
      },
      {
        property: "og:title",
        content: `Contact the Campaign | ${campaign.candidate} for ${campaign.race}`,
      },
      {
        property: "og:description",
        content: `Volunteer, ask a question or share an idea with the ${campaign.name}.`,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `Contact — ${campaign.name}`,
          mainEntity: {
            "@type": "Organization",
            name: campaign.name,
            // TODO: confirm real campaign contact info before public launch
            email: campaign.email,
            telephone: campaign.phone,
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

// TODO: confirm real campaign contact info before public launch
const channels = [
  {
    icon: Mail,
    label: "Email",
    value: campaign.email,
    href: `mailto:${campaign.email}`,
    note: "Best for detailed questions and ideas.",
  },
  {
    icon: Phone,
    label: "Phone",
    value: campaign.phone,
    href: `tel:${campaign.phone.replace(/[^+\d]/g, "")}`,
    note: "Call or text during campaign hours.",
  },
  {
    icon: Instagram,
    label: "Instagram",
    // TODO: confirm real campaign contact info before public launch
    value: "@perezforinglewood",
    href: "https://instagram.com/perezforinglewood",
    note: "Follow for updates and event announcements.",
  },
];

function ContactPage() {
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
                  text="Contact the campaign"
                  className="eyebrow block text-navy-soft"
                />
              </div>
              <AnimatedAccentLine className="mt-5" delay={0.1} />
              <AnimatedText
                as="h1"
                text="I'd be honored to earn your vote."
                className="mt-6 font-display text-5xl leading-[1.02] text-navy sm:text-6xl lg:text-7xl"
                delay={0.2}
              />
            </div>

            <ScrollReveal delay={0.15} className="lg:pb-3">
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                This district is renters and homeowners, longtime families and new
                neighbors — every voice
                belongs at the table. Reach out any time, or stop by a town hall in
                your quadrant.
              </p>
              <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6">
                {[
                  { label: "Volunteer", value: "Welcome" },
                  { label: "Questions", value: "Answered" },
                  { label: "Ideas", value: "Wanted" },
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

      {/* Reach the campaign + form */}
      <section className="bg-secondary/40 py-14 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-5">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* Left: ways to reach */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <ScrollReveal>
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                  <span className="eyebrow text-navy-soft">Ways to reach us</span>
                </div>
                <AnimatedAccentLine className="mt-5" />
                <h2 className="mt-6 font-display text-3xl leading-tight text-navy sm:text-4xl">
                  Reach the campaign directly
                </h2>
                {/* TODO: confirm real campaign contact info before public launch */}
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  Prefer to skip the form? Use whichever channel is easiest — every
                  message reaches the same place.
                </p>

                <ul className="mt-8 space-y-3">
                  {channels.map((c) => (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        className="card-lift group flex w-full items-center gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5"
                        {...(c.label === "Instagram"
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {/* Icon — never shrinks */}
                        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-navy transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-deep">
                          <c.icon className="h-5 w-5" aria-hidden />
                        </span>
                        {/* Text — clamps to available width, no truncate so long emails wrap */}
                        <span className="min-w-0 flex-1">
                          <span className="eyebrow block text-[0.6rem] text-navy-soft">
                            {c.label}
                          </span>
                          <span className="mt-1 block break-all font-display text-base text-navy transition-colors group-hover:text-gold sm:text-lg">
                            {c.value}
                          </span>
                          <span className="mt-1 block text-sm leading-snug text-muted-foreground">
                            {c.note}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <dl className="mt-8 space-y-4 border-t border-border pt-6 text-sm">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    {/* shrink-0 prevents icon from being pushed off on narrow screens */}
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                    <dt className="sr-only">Response</dt>
                    <dd className="leading-snug">Messages are answered as the campaign is able.</dd>
                  </div>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                    <dt className="sr-only">Location</dt>
                    <dd className="leading-snug">Serving the neighborhoods of {campaign.district}, Inglewood.</dd>
                  </div>
                </dl>
              </ScrollReveal>
            </div>

            {/* Right: form — px-4 on mobile prevents the card touching viewport edges */}
            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-lift)] sm:p-8 md:p-10">
                <h2 className="font-display text-2xl text-navy">Send a message</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Fields marked with <span className="text-gold">*</span> are required.
                </p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

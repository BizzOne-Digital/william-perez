import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";
import { campaign, socialLinks } from "@/lib/campaign";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/platform", label: "Platform" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  const instagram = socialLinks.find((s) => s.platform === "instagram" && s.url);

  return (
    <footer className="surface-navy mt-24 border-t border-gold/20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img src={logoMark} alt="" width={44} height={44} loading="lazy" className="h-10 w-10" />
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold text-cream">William Perez</span>
              <span className="eyebrow block text-[0.6rem] text-cream/60">District 1 · Inglewood</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            {campaign.slogan} Running for {campaign.race}.
          </p>
          {/* TODO: confirm real campaign contact info before public launch */}
          {instagram && (
            <a
              href={instagram.url!}
              className="mt-4 inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4 text-gold" aria-hidden />
              {instagram.handle}
            </a>
          )}
        </div>

        {/* Nav */}
        <nav aria-label="Footer">
          <h2 className="eyebrow text-gold">Navigate</h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-cream/80 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h2 className="eyebrow text-gold">Contact</h2>
          {/* TODO: confirm real campaign contact info before public launch */}
          <ul className="mt-4 space-y-2.5 text-sm text-cream/80">
            <li>
              <a
                href={`mailto:${campaign.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4 text-gold" aria-hidden />
                {campaign.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${campaign.phone.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4 text-gold" aria-hidden />
                {campaign.phone}
              </a>
            </li>
          </ul>
          <p className="mt-5 text-xs text-cream/50">
            Election Day: <span className="text-cream/70">{campaign.electionDate}</span>
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-6 text-xs text-cream/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 William Perez for Inglewood City Council. {campaign.treasurer}, Treasurer.</p>
          <p>Committee: {campaign.committee} · {campaign.treasurer}, Treasurer.</p>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/platform", label: "Platform" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b border-transparent transition-colors duration-300",
        scrolled ? "border-border bg-background/90 backdrop-blur-md" : "bg-background",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:h-20">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logoMark} alt="" width={40} height={40} className="h-9 w-9" />
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold text-navy">William Perez</span>
            <span className="eyebrow block text-[0.6rem] text-muted-foreground">District 1 · Inglewood</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-navy after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 data-[status=active]:text-navy data-[status=active]:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-navy-deep"
          >
            Contact Campaign
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="animate-fade-in border-t border-border bg-background md:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-base font-medium text-foreground data-[status=active]:text-navy"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-navy px-5 py-3 text-center text-sm font-semibold text-cream"
            >
              Contact Campaign
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

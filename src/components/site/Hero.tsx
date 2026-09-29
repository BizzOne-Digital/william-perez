import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import heroImage from "@/assets/candidate-hero.jpg";
import { MagneticButton, Spotlight } from "@/components/motion";
import { campaign } from "@/lib/campaign";
import { cn } from "@/lib/utils";

const EASE = [0.22, 0.61, 0.36, 1] as const;
const PARALLAX = 14; // px of candidate-image drift on pointer move (desktop only)

/* One headline line, revealed with a masked upward slide. */
function HeadlineLine({
  children,
  delay,
  reduced,
  className,
}: {
  children: ReactNode;
  delay: number;
  reduced: boolean | null;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className={cn("block", className)}
        initial={reduced ? { opacity: 0 } : { opacity: 0, y: "1em" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduced ? 0.3 : 0.85, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [interactive, setInteractive] = useState(false);

  // Normalised pointer position (-0.5 → 0.5) → springy candidate parallax.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 55, damping: 18, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 55, damping: 18, mass: 0.6 });
  const imgX = useTransform(sx, [-0.5, 0.5], [PARALLAX, -PARALLAX]);
  const imgY = useTransform(sy, [-0.5, 0.5], [PARALLAX * 0.7, -PARALLAX * 0.7]);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setInteractive(mq.matches);
  }, []);

  useEffect(() => {
    if (!interactive || reduced) return;
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      px.set((e.clientX - r.left) / r.width - 0.5);
      py.set((e.clientY - r.top) / r.height - 0.5);
    };
    const reset = () => {
      px.set(0);
      py.set(0);
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", reset);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", reset);
    };
  }, [interactive, reduced, px, py]);

  const parallaxStyle = interactive && !reduced ? { x: imgX, y: imgY } : undefined;

  return (
    <section
      ref={sectionRef}
      aria-label="Campaign introduction"
      className="hero-section relative isolate w-full overflow-hidden"
    >
      {/* ---- Candidate photograph, dissolved into the navy field ---- */}
      <div className="hero-media absolute inset-0 md:inset-y-0 md:left-auto md:right-0 md:w-[62%] lg:w-[58%]">
        <motion.div
          className="absolute inset-0"
          initial={
            reduced
              ? { opacity: 0 }
              : { opacity: 0, scale: 1.06, clipPath: "inset(0 0 0 12%)" }
          }
          animate={{ opacity: 1, scale: 1, clipPath: "inset(0 0 0 0%)" }}
          transition={{ duration: reduced ? 0.4 : 1.3, delay: 0.15, ease: EASE }}
        >
          <motion.div className="absolute inset-[-4%]" style={parallaxStyle}>
            <img
              src={heroImage}
              alt={`${campaign.candidate}, candidate for Inglewood City Council District 1`}
              fetchPriority="high"
              decoding="async"
              className="hero-img h-full w-full object-cover"
            />
          </motion.div>
          {/* Cinematic cool tint (multiplies over the photo). */}
          <div aria-hidden className="hero-cool pointer-events-none absolute inset-0" />
        </motion.div>
      </div>

      {/* ---- Atmosphere + texture (over photo, under text) ---- */}
      <div aria-hidden className="hero-blend pointer-events-none absolute inset-0" />
      <div aria-hidden className="hero-topfade pointer-events-none absolute inset-x-0 top-0 h-40" />
      <div aria-hidden className="hero-grain pointer-events-none absolute inset-0" />
      <Spotlight />

      {/* ---- Messaging ---- */}
      <div className="hero-content-pad relative z-10 mx-auto flex min-h-[38rem] w-full max-w-6xl items-end px-5 pb-16 md:min-h-[calc(100svh-5rem)] md:max-h-[54rem] md:items-center md:py-20 md:pt-20">
        <div className="w-full max-w-xl md:max-w-[34rem] lg:max-w-[40rem]">
          {/* Eyebrow — race and election date */}
          <motion.div
            className="flex flex-wrap items-center gap-x-3 gap-y-1"
            initial={{ opacity: 0, y: reduced ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
            <span className="eyebrow text-gold">Inglewood City Council · District 1</span>
            <span className="eyebrow text-cream/50" aria-hidden>·</span>
            <span className="eyebrow text-white">Election: {campaign.electionDate}</span>
          </motion.div>

          {/* Animated gold accent line */}
          <motion.span
            aria-hidden
            className="hero-accent-sheen mt-5 block h-px origin-left bg-gradient-to-r from-gold via-gold to-transparent"
            style={{ maxWidth: "9rem" }}
            initial={reduced ? { opacity: 0 } : { scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: reduced ? 0.3 : 0.9, delay: 0.4, ease: EASE }}
          />

          {/* Headline — line by line */}
          <h1 className="mt-7 font-display text-[3.25rem] font-semibold leading-[0.95] tracking-[-0.02em] text-cream sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            <span className="sr-only">Putting District 1 First — for Real</span>
            <span aria-hidden>
              <HeadlineLine delay={0.5} reduced={reduced}>
                William Perez {/* Putting */}
              </HeadlineLine>
              {/* <HeadlineLine delay={0.62} reduced={reduced}>
                District 1
              </HeadlineLine> */}
              <HeadlineLine delay={0.74} reduced={reduced} className="text-gold">
               for Inglewood City Council
 {/* First. */}
              </HeadlineLine>
            </span>
          </h1>

          {/* Slogan + supporting copy */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0.3 : 0.7, delay: 0.95, ease: EASE }}
          >
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.08em] text-gold/80">
              {campaign.slogan}
            </p>
            <p className="mt-3 max-w-md text-base leading-relaxed text-cream/75 sm:text-lg">
              A 16-year Inglewood small business owner running to put District 1 first:
              Honest Protection, Action on Affordability, and Transparency at City Hall.
            </p>
          </motion.div>

          {/* Calls to action */}
          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0.3 : 0.7, delay: 1.1, ease: EASE }}
          >
            <MagneticButton>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-navy-deep shadow-[0_18px_40px_-18px_oklch(0.79_0.135_82_/_0.7)] transition-colors hover:bg-gold-soft"
              >
                Meet William
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                to="/platform"
                className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-cream transition-colors hover:border-gold hover:text-gold"
              >
                See the Platform
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* ---- Small editorial scroll cue (desktop) ---- */}
      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <span className="eyebrow text-[0.6rem] text-cream/50">Scroll</span>
        <motion.span
          className="block h-8 w-px bg-gradient-to-b from-gold to-transparent"
          animate={reduced ? undefined : { scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
          style={{ transformOrigin: "top" }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

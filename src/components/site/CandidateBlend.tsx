import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/candidate-hero.jpg";
import { cn } from "@/lib/utils";

const EASE = [0.22, 0.61, 0.36, 1] as const;

/**
 * Cinematic candidate-photo blend backdrop, shared with the homepage hero.
 * The photograph dissolves into the navy field (no rectangular boundary),
 * is cooled toward the navy palette and dusted with film grain.
 *
 * `side` controls which edge the photo fades toward:
 *   - "right" (default): photo on the right, matches the hero.
 *   - "left": mirrored — photo on the left, for text-on-the-right sections.
 *
 * Reveal is scroll-triggered (these sections sit below the fold) with a
 * gentle scroll-linked parallax on the image; both respect reduced motion.
 */
export function CandidateBlend({
  side = "right",
  alt,
  className,
  objectClassName,
}: {
  side?: "left" | "right";
  alt: string;
  className?: string;
  objectClassName?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [parallax, setParallax] = useState(0);
  const left = side === "left";

  // One-shot in-view trigger for the reveal.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Subtle scroll-linked vertical parallax (desktop, motion-allowed only).
  useEffect(() => {
    if (reduced) return;
    const mq = window.matchMedia("(min-width: 768px) and (hover: hover)");
    if (!mq.matches) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const progress = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
        setParallax(Math.max(-1, Math.min(1, progress)) * -18);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <div
      ref={ref}
      className={cn("hero-section absolute inset-0 overflow-hidden", className)}
    >
      {/* Photo layer, masked into the navy field. */}
      <div
        className={cn(
          "hero-media absolute inset-0 md:inset-y-0 md:w-[62%] lg:w-[58%]",
          left ? "md:left-0 md:right-auto blend-left" : "md:right-0 md:left-auto",
        )}
      >
        <motion.div
          className="absolute inset-0"
          initial={
            reduced
              ? { opacity: 0 }
              : { opacity: 0, scale: 1.06, clipPath: left ? "inset(0 12% 0 0)" : "inset(0 0 0 12%)" }
          }
          animate={
            inView
              ? { opacity: 1, scale: 1, clipPath: "inset(0 0 0 0%)" }
              : undefined
          }
          transition={{ duration: reduced ? 0.4 : 1.3, ease: EASE }}
        >
          <div className="absolute inset-[-4%]" style={{ transform: `translateY(${parallax}px)` }}>
            <img
              src={heroImage}
              alt={alt}
              loading="lazy"
              decoding="async"
              className={cn(
                "hero-img h-full w-full object-cover",
                left && "blend-left",
                objectClassName,
              )}
            />
          </div>
          <div className={cn("hero-cool pointer-events-none absolute inset-0", left && "blend-left")} />
        </motion.div>
      </div>

      {/* Atmosphere + texture. */}
      <div className={cn("hero-blend pointer-events-none absolute inset-0", left && "blend-left")} />
      <div className="hero-topfade pointer-events-none absolute inset-x-0 top-0 h-40" />
      <div className="hero-grain pointer-events-none absolute inset-0" />
    </div>
  );
}

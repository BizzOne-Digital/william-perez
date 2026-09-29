import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import {
  useEffect,
  useRef,
  useState,

  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 0.61, 0.36, 1] as const;
const VIEWPORT = { once: true, amount: 0.2 } as const;

/* ---------------- AnimatedText: word-by-word headline reveal ---------------- */

export function AnimatedText({
  text,
  className,
  delay = 0,
  as: Tag = "h1",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p" | "span";
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline-block">
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden align-bottom pb-[0.08em]"
          >
            <motion.span
              className="inline-block"
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: "0.9em" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduced ? 0.25 : 0.7,
                delay: delay + (reduced ? 0 : i * 0.06),
                ease: EASE,
              }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}

/* ---------------- AnimatedAccentLine ---------------- */

export function AnimatedAccentLine({
  className,
  delay = 0,
  width = "5rem",
}: {
  className?: string;
  delay?: number;
  width?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.span
      aria-hidden
      className={cn("block h-px origin-left bg-gold", className)}
      style={{ width }}
      initial={reduced ? { opacity: 0 } : { scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: reduced ? 0.2 : 0.8, delay, ease: EASE }}
    />
  );
}

/* ---------------- ScrollReveal / group ---------------- */

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 30,
  scale = 0.98,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scale?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const reduced = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: reduced ? 0.25 : 0.6, delay, ease: EASE }}
    >
      {children}
    </Comp>
  );
}

const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export function ScrollRevealGroup({
  children,
  className,
  stagger = 0.1,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{ ...groupVariants, show: { transition: { staggerChildren: stagger } } }}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.98 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: reduced ? 0.25 : 0.55, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- AnimatedImage (clip-path reveal) ---------------- */

export function AnimatedImage({
  src,
  alt,
  className,
  imgClassName,
  delay = 0,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  delay?: number;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial={
        reduced
          ? { opacity: 0 }
          : { opacity: 0, clipPath: "inset(12% 0% 0% 0%)" }
      }
      animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
      transition={{ duration: reduced ? 0.3 : 1.1, delay, ease: EASE }}
    >
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn("h-full w-full object-cover", imgClassName)}
        initial={reduced ? false : { scale: 1.03 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, delay, ease: EASE }}
      />
    </motion.div>
  );
}

/* ---------------- ParallaxImage ---------------- */

export function ParallaxImage({
  children,
  className,
  range = 28,
}: {
  children: ReactNode;
  className?: string;
  range?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [range, -range]);
  const y = useSpring(raw, { stiffness: 80, damping: 20, mass: 0.4 });

  return (
    <div ref={ref} className={className}>
      <motion.div {...(reduced || !enabled ? {} : { style: { y } })}>
        {children}
      </motion.div>
    </div>
  );
}

/* ---------------- Spotlight ---------------- */

export function Spotlight({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(50);
  const y = useMotionValue(40);
  const sx = useSpring(x, { stiffness: 60, damping: 20 });
  const sy = useSpring(y, { stiffness: 60, damping: 20 });
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setInteractive(mq.matches);
  }, []);

  useEffect(() => {
    if (!interactive || reduced) return;
    const el = ref.current?.parentElement;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      x.set(((e.clientX - r.left) / r.width) * 100);
      y.set(((e.clientY - r.top) / r.height) * 100);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [interactive, reduced, x, y]);

  const background = useTransform(
    [sx, sy],
    ([px, py]: number[]) =>
      `radial-gradient(38rem 30rem at ${px}% ${py}%, oklch(0.79 0.135 82 / 0.16), transparent 70%)`,
  );

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={
        interactive && !reduced
          ? { background }
          : {
              background:
                "radial-gradient(38rem 30rem at 65% 30%, oklch(0.79 0.135 82 / 0.14), transparent 70%)",
            }
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.9 }}
    />
  );
}

/* ---------------- MagneticButton ---------------- */

export function MagneticButton({
  children,
  className,
  strength = 0.25,
  max = 10,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  max?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.3 });

  useEffect(() => {
    if (reduced) return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const dist = Math.hypot(dx, dy);
      if (dist > Math.max(r.width, r.height)) {
        x.set(0);
        y.set(0);
        return;
      }
      x.set(Math.max(-max, Math.min(max, dx * strength)));
      y.set(Math.max(-max, Math.min(max, dy * strength)));
    };
    const reset = () => {
      x.set(0);
      y.set(0);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", reset);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", reset);
    };
  }, [max, reduced, strength, x, y]);

  return (
    <motion.span
      ref={ref}
      className={cn("inline-block", className)}
      {...(reduced ? {} : { style: { x: sx, y: sy } })}
    >
      {children}
    </motion.span>
  );
}

/* ---------------- CampaignMarquee ---------------- */

export function CampaignMarquee({ words }: { words: string[] }) {
  const items = [...words, ...words, ...words, ...words];
  return (
    <div className="surface-navy relative w-full overflow-hidden border-y border-gold/25 py-3">
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex items-center gap-8">
            {items.map((word, i) => (
              <span
                key={`${copy}-${word}-${i}`}
                className="eyebrow flex items-center gap-8 text-cream/70"
              >
                {word}
                <span className="text-gold">&bull;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

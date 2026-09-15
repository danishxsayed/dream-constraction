import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";

const lines = ["Building", "Dreams", "Into Reality."];

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-ink">
      <img
        src={heroImg}
        alt="Modern architectural residence at dusk built by Dream Palace Constructions"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="hero-media absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/85"
      />

      <div className="shell relative flex h-full flex-col justify-end pb-16 text-ivory md:pb-20">
        <p
          data-reveal="in"
          className="eyebrow text-[10px] text-bronze"
          style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
        >
          Engineers &amp; Builders · Hubballi, Karnataka
        </p>

        <h1 className="mt-6 display-xl">
          {lines.map((line, i) => (
            <span
              key={line}
              data-mask="in"
              className="block"
              style={{ "--reveal-delay": `${300 + i * 140}ms` } as React.CSSProperties}
            >
              <span className="mask-inner">{line}</span>
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col gap-10 border-t border-ivory/15 pt-8 lg:flex-row lg:items-end lg:justify-between">
          <p
            data-reveal="in"
            className="max-w-xl text-sm leading-relaxed text-ivory/70 md:text-base"
            style={{ "--reveal-delay": "760ms" } as React.CSSProperties}
          >
            From foundation to finishing, we deliver residential, commercial, structural, interior
            and external works with precision, transparency and care.
          </p>

          <div
            data-reveal="in"
            className="flex flex-wrap items-center gap-4"
            style={{ "--reveal-delay": "880ms" } as React.CSSProperties}
          >
            <Link
              to="/projects"
              data-cursor="VIEW"
              className="eyebrow bg-bronze px-8 py-4 text-[10px] text-ink transition-colors hover:bg-ivory"
            >
              Explore Our Projects →
            </Link>
            <Link
              to="/contact"
              data-cursor="OPEN →"
              className="eyebrow border border-ivory/40 px-8 py-4 text-[10px] transition-colors hover:border-ivory hover:bg-ivory hover:text-ink"
            >
              Start a Project
            </Link>
          </div>
        </div>

        <div className="mt-12 flex items-end justify-between text-ivory/50">
          <div className="scroll-hint flex items-center gap-3">
            <span className="eyebrow text-[9px]">Scroll to explore</span>
            <span aria-hidden="true">↓</span>
          </div>
          <p className="eyebrow text-[9px] text-ivory/60">Est. 2012 · 15+ Years of Experience</p>
        </div>
      </div>
    </section>
  );
}

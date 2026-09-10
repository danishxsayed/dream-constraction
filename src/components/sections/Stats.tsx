import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/site-data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1400;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          setN(Math.round(value * eased));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-ink text-ivory">
      <div className="shell py-16 md:py-24">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              className={[
                "px-2 py-8 md:px-8",
                i % 2 === 1 ? "border-l border-ivory/12" : "",
                i >= 2 ? "border-t border-ivory/12 lg:border-t-0" : "",
                i > 0 ? "lg:border-l lg:border-ivory/12" : "",
              ].join(" ")}
            >
              <dd className="font-display text-[clamp(3rem,7vw,7rem)] leading-none">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
              <dt className="eyebrow mt-4 text-[9px] text-ivory/45">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

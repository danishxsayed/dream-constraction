import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  const [i, setI] = useState(0);
  const item = testimonials[i]!;

  return (
    <section className="shell py-24 md:py-36">
      <div className="grid gap-8 lg:grid-cols-12">
        <Reveal as="h2" mask className="display-lg lg:col-span-6">
          Client voices.
        </Reveal>
        <Reveal delay={140} className="flex items-end lg:col-span-4 lg:col-start-9">
          <p className="text-sm text-muted-foreground">Trust is built one project at a time.</p>
        </Reveal>
      </div>

      <Reveal className="mt-16 border-t border-hairline pt-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <p
            aria-hidden="true"
            className="font-display text-[7rem] leading-[0.6] text-bronze/40 lg:col-span-1"
          >
            “
          </p>
          <figure className="lg:col-span-10">
            <blockquote
              key={i}
              className="font-display text-[clamp(1.6rem,3.4vw,3rem)] leading-[1.15]"
            >
              {item.quote}
            </blockquote>
            <figcaption className="mt-10">
              <p className="eyebrow text-[10px]">{item.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.role}</p>
            </figcaption>
          </figure>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-hairline pt-6">
          <div className="flex gap-3">
            {testimonials.map((t, idx) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setI(idx)}
                aria-label={`Show testimonial from ${t.name}`}
                aria-current={idx === i}
                className={`h-px w-14 transition-colors duration-500 ${
                  idx === i ? "bg-bronze" : "bg-ink/20 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-6">
            <button
              type="button"
              onClick={() => setI((p) => (p - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
              className="eyebrow text-[10px] text-muted-foreground transition-colors hover:text-bronze"
            >
              ← Prev
            </button>
            <button
              type="button"
              onClick={() => setI((p) => (p + 1) % testimonials.length)}
              aria-label="Next testimonial"
              className="eyebrow text-[10px] text-muted-foreground transition-colors hover:text-bronze"
            >
              Next →
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

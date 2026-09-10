import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import ctaImg from "@/assets/cta.jpg";
import { company } from "@/lib/site-data";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <img
        src={ctaImg}
        alt="Contemporary building facade illuminated at dusk"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-ink/55" />

      <div className="shell relative py-32 text-ivory md:py-48">
        <Reveal as="h2" mask className="display-lg max-w-4xl">
          Ready to build
          <br />
          your dream?
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-8 max-w-lg text-sm leading-relaxed text-ivory/70 md:text-base">
            Whether you have a blueprint ready or just an idea, we're here to help you move
            forward.
          </p>
        </Reveal>
        <Reveal delay={220} className="mt-12 flex flex-wrap gap-4">
          <Link
            to="/contact"
            data-cursor="OPEN →"
            className="eyebrow bg-bronze px-9 py-5 text-[10px] text-ink transition-colors hover:bg-ivory"
          >
            Start a Project →
          </Link>
          <a
            href={`tel:+91${company.phones[0]}`}
            className="eyebrow border border-ivory/40 px-9 py-5 text-[10px] transition-colors hover:bg-ivory hover:text-ink"
          >
            Call Us
          </a>
        </Reveal>
      </div>
    </section>
  );
}

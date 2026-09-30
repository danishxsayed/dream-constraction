import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export function BrandStatement() {
  return (
    <section className="shell py-24 md:py-40">
      <Reveal>
        <p className="eyebrow text-[10px] text-bronze">Our Philosophy</p>
      </Reveal>

      <div className="mt-10 grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal as="h2" mask className="display-lg">
            Great buildings begin
            <br />
            with great relationships.
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-14 font-display text-[clamp(2rem,4.6vw,4.25rem)] leading-[1.02] text-ink/85">
              Your vision.
              <br />
              Our expertise.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col justify-end lg:col-span-5 lg:col-start-8">
          <Reveal delay={200}>
            <p className="text-base leading-relaxed text-muted-foreground lg:text-xl">
              At Dream Palace Constructions, we believe every project deserves more than
              construction. It deserves thoughtful planning, technical expertise, clear
              communication and a commitment to getting the details right.
            </p>
            <Link
              to="/about"
              data-cursor="OPEN →"
              className="eyebrow mt-10 inline-flex items-center gap-3 border-b border-ink/25 pb-2 text-[10px] transition-colors hover:border-bronze hover:text-bronze"
            >
              About the Studio <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

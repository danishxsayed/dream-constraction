import { Reveal } from "@/components/Reveal";
import founderImg from "@/assets/founder.webp";
import { company } from "@/lib/site-data";

export function FounderSection() {
  return (
    <section className="bg-ink text-ivory">
      <div className="shell grid gap-14 py-24 lg:grid-cols-12 lg:gap-16 md:py-36">
        <Reveal className="lg:col-span-5 lg:self-stretch">
          <div className="relative h-full min-h-[400px] overflow-hidden">
            <img
              src={founderImg}
              alt={`${company.founder}, founder of ${company.name}`}
              width={768}
              height={950}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </Reveal>

        <div className="flex flex-col justify-center lg:col-span-7 lg:col-start-6">
          <Reveal>
            <p className="eyebrow text-[10px] text-bronze">Founder</p>
          </Reveal>
          <Reveal as="h2" mask delay={80} className="mt-6 display-md">
            Engineering experience.
            <br />
            Personal accountability.
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-10 border-t border-ivory/12 pt-8">
              <p className="font-display text-3xl">{company.founder}</p>
              <p className="eyebrow mt-3 text-[9px] text-ivory/45">
                Engineer &amp; Founder
              </p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-ivory/60">
              <p>
                Dream Palace Constructions was established in 2012 on 15+ years of practical
                engineering experience and a simple belief: construction should be built on trust,
                technical knowledge and personal accountability.
              </p>
              <p>
                At Dream Palace, every project is approached with a solution-driven mindset —
                anticipating challenges, communicating clearly and maintaining high standards from
                foundation to finishing.
              </p>
            </div>
            <p className="mt-10 font-display text-4xl italic text-bronze/80">E. P. Paste</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

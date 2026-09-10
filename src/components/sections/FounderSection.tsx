import { Reveal } from "@/components/Reveal";
import founderImg from "@/assets/founder.jpg";
import { company } from "@/lib/site-data";

export function FounderSection() {
  return (
    <section className="bg-ink text-ivory">
      <div className="shell grid gap-14 py-24 lg:grid-cols-12 lg:gap-16 md:py-36">
        <Reveal className="lg:col-span-5">
          <div className="relative overflow-hidden">
            <img
              src={founderImg}
              alt={`${company.founder}, founder of ${company.name}`}
              width={1008}
              height={1312}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
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
                B.E. (Civil) · MIE · Chartered Engineer (India) · Founder
              </p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-ivory/60">
              <p>
                Dream Palace Constructions was founded on decades of practical engineering
                experience and a simple belief: construction should be built on trust, technical
                knowledge and accountability.
              </p>
              <p>
                At Dream Palace, every project is approached with a solution-driven mindset —
                anticipating challenges, communicating clearly and maintaining high standards from
                foundation to finishing.
              </p>
            </div>
            <p className="mt-10 font-display text-4xl italic text-bronze/80">V. P. Paste</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

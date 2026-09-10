import { Reveal } from "@/components/Reveal";
import { whyPoints } from "@/lib/site-data";

export function WhyUs() {
  return (
    <section className="shell py-24 md:py-36">
      <div className="grid gap-10 lg:grid-cols-12">
        <Reveal as="h2" mask className="display-lg lg:col-span-6">
          Built on trust.
          <br />
          Delivered with care.
        </Reveal>
        <Reveal delay={140} className="flex items-end lg:col-span-4 lg:col-start-9">
          <p className="text-sm leading-relaxed text-muted-foreground">
            A wealth of construction and project management experience, combined with a team that
            genuinely cares about your outcome.
          </p>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-x-12 gap-y-14 md:grid-cols-2">
        {whyPoints.map((p, i) => (
          <Reveal
            key={p.no}
            delay={i * 90}
            className="border-t border-hairline pt-8"
          >
            <span className="font-display text-5xl text-bronze/70">{p.no}</span>
            <h3 className="mt-6 font-display text-3xl">{p.title}</h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

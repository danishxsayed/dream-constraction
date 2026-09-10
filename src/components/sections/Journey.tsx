import { Reveal } from "@/components/Reveal";
import { journeyStages } from "@/lib/site-data";

export function Journey() {
  return (
    <section className="bg-secondary">
      <div className="shell py-24 md:py-36">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal as="h2" mask className="display-lg lg:col-span-6">
            From blueprint
            <br />
            to handover.
          </Reveal>
          <Reveal delay={140} className="flex items-end lg:col-span-5 lg:col-start-8">
            <p className="text-sm leading-relaxed text-muted-foreground">
              We manage every stage of the journey with clarity, technical expertise and attention
              to detail — giving clients one trusted team from concept to completion.
            </p>
          </Reveal>
        </div>

        <ol className="mt-20 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
          {journeyStages.map((stage, i) => (
            <Reveal
              as="li"
              key={stage}
              delay={i * 110}
              className="border-t border-hairline py-8 sm:border-l sm:border-t-0 sm:pl-6 sm:first:border-l-0 lg:pl-8"
            >
              <span className="eyebrow text-[10px] text-bronze">
                0{i + 1}
              </span>
              <p className="mt-4 font-display text-2xl md:text-3xl">{stage}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

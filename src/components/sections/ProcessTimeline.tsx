import { Reveal } from "@/components/Reveal";
import { processSteps } from "@/lib/site-data";

export function ProcessTimeline() {
  return (
    <section id="process" className="shell scroll-mt-24 py-24 md:py-36">
      <div className="grid gap-8 lg:grid-cols-12">
        <Reveal as="h2" mask className="display-lg lg:col-span-7">
          A clearer way
          <br />
          to build.
        </Reveal>
        <Reveal delay={140} className="flex items-end lg:col-span-4 lg:col-start-9">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base lg:text-lg">
            We manage every stage of the journey with clarity, technical expertise and attention to
            detail — giving clients one trusted team from concept to completion.
          </p>
        </Reveal>
      </div>

      <div className="mt-20 hairline-t">
        {processSteps.map((step, i) => (
          <Reveal
            key={step.no}
            delay={i * 80}
            className="group grid grid-cols-1 gap-4 border-b border-hairline py-10 md:grid-cols-12 md:items-baseline md:gap-8"
          >
            <span className="eyebrow text-[10px] text-bronze md:col-span-1">{step.no}</span>
            <h3 className="font-display text-3xl md:col-span-4 md:text-4xl">{step.title}</h3>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:col-span-6">
              {step.body}
            </p>
            <span
              aria-hidden="true"
              className="hidden justify-self-end text-ink/25 transition-all duration-700 ease-editorial group-hover:translate-x-2 group-hover:text-bronze md:col-span-1 md:block"
            >
              →
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

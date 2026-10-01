import { createFileRoute } from "@tanstack/react-router";
import { useRevealRoot, Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { Stats } from "@/components/sections/Stats";
import { WhyUs } from "@/components/sections/WhyUs";
import { FounderSection } from "@/components/sections/FounderSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { principles, images } from "@/lib/site-data";

const title = "About | Engineer-Led Builders in Hubballi";
const description =
  "Established in 2012 by Er. Vasant P Paste, Dream Palace Constructions brings 15+ years of hands-on construction and engineering experience to homes and businesses across Hubballi, Karnataka.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const ref = useRevealRoot<HTMLDivElement>();

  return (
    <div ref={ref}>
      <PageHeader
        eyebrow="About the Studio"
        title={
          <>
            Where precision
            <br />
            meets purpose.
          </>
        }
      />

      <section className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url(${images.blueprint})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="shell relative grid gap-12 pb-24 lg:grid-cols-12 md:pb-32">
          <Reveal className="lg:col-span-6">
            <p className="text-base leading-relaxed text-ink/80">
              At Dream Palace Constructions, we believe great buildings begin with great
              relationships. Established in 2012 by an experienced engineer with 15+ years of
              hands-on expertise, we approach every project with the same commitment: your
              vision, our expertise, zero compromise on quality.
            </p>
          </Reveal>
          <Reveal delay={140} className="lg:col-span-5 lg:col-start-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              Our solution-driven approach means we don't just build structures — we solve
              problems, anticipate challenges, and keep you informed at every stage. Safety,
              service, integrity and ownership aren't slogans; they are the foundation everything
              is built on.
            </p>
          </Reveal>

          <ul className="grid grid-cols-2 gap-px lg:col-span-12 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal
                as="li"
                key={p}
                delay={i * 80}
                className="border-t border-hairline pt-6 lg:border-l lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
              >
                <span className="eyebrow text-[10px] text-bronze">0{i + 1}</span>
                <p className="mt-4 font-display text-2xl">{p}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Stats />
      <FounderSection />
      <TeamSection />
      <ProcessTimeline />
      <WhyUs />
      <Testimonials />
      <CTASection />
    </div>
  );
}

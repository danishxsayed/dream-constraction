import { createFileRoute, Link } from "@tanstack/react-router";
import { useRevealRoot, Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { projects } from "@/lib/site-data";

const title = "Projects | Residential & Commercial Builds in Hubli";
const description =
  "A selection of residential, commercial, interior and structural projects delivered by Dream Palace Constructions across Hubli-Dharwad, Karnataka.";

export const Route = createFileRoute("/projects/")({
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
  component: ProjectsPage,
});

function ProjectsPage() {
  const ref = useRevealRoot<HTMLDivElement>();

  return (
    <div ref={ref}>
      <PageHeader
        eyebrow="Selected Work"
        title={
          <>
            Projects that speak
            <br />
            for themselves.
          </>
        }
        intro="From homes and commercial spaces to structural and interior projects, every project reflects our commitment to precision and quality."
      />

      <section className="shell pb-24 md:pb-36">
        <div className="grid gap-x-10 gap-y-20 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={(i % 2) * 90}
              className={i % 2 === 1 ? "lg:mt-28" : ""}
            >
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                data-cursor="VIEW"
                className="group block"
              >
                <div className="relative overflow-hidden bg-ink">
                  <img
                    src={p.cover}
                    alt={`${p.name} — ${p.category} in ${p.location}`}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-[1100ms] ease-editorial group-hover:scale-[1.06] ${
                      i % 2 === 1 ? "aspect-[4/5]" : "aspect-[16/11]"
                    }`}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-ink/10 transition-colors duration-700 group-hover:bg-ink/35"
                  />
                </div>
                <div className="mt-5 flex items-baseline gap-4">
                  <span className="eyebrow text-[10px] text-bronze">{p.no}</span>
                  <h2 className="font-display text-3xl">{p.name}</h2>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {p.category} · {p.location}
                </p>
                <span className="eyebrow mt-4 inline-block text-[9px] text-ink/60">
                  View Project →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 border-t border-hairline pt-6">
          <p className="text-xs text-muted-foreground">
            Project entries shown are placeholders prepared for real project records, imagery and
            descriptions.
          </p>
        </Reveal>
      </section>

      <CTASection />
    </div>
  );
}

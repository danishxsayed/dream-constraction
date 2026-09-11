import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useRevealRoot, Reveal } from "@/components/Reveal";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const index = projects.findIndex((p) => p.slug === params.slug);
    if (index === -1) throw notFound();
    return {
      project: projects[index]!,
      next: projects[(index + 1) % projects.length]!,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.name} | ${project.category} — Dream Palace Constructions`;
    const description = project.overview.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  return (
    <div className="shell flex min-h-[70vh] flex-col justify-center">
      <h1 className="display-md">Project not found.</h1>
      <Link
        to="/projects"
        className="eyebrow mt-8 self-start border-b border-ink/25 pb-2 text-[10px] hover:text-bronze"
      >
        Back to all projects →
      </Link>
    </div>
  );
}

function ProjectDetail() {
  const { project, next } = Route.useLoaderData();
  const ref = useRevealRoot<HTMLDivElement>();

  return (
    <div ref={ref} key={project.slug}>
      <section className="relative h-[72svh] min-h-[460px] overflow-hidden bg-ink">
        <img
          src={project.cover}
          alt={`${project.name} — ${project.category} in ${project.location}`}
          className="hero-media absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-ink/50" />
        <div className="shell relative flex h-full flex-col justify-end pb-16 text-ivory">
          <p className="eyebrow text-[10px] text-bronze">{project.no} · {project.category}</p>
          <h1 className="mt-6 display-lg">{project.name}</h1>
          <p className="mt-6 text-sm text-ivory/65">{project.location}</p>
        </div>
      </section>

      <section className="shell grid gap-12 py-24 lg:grid-cols-12 md:py-32">
        <Reveal className="lg:col-span-3">
          <h2 className="eyebrow text-[10px] text-bronze">Overview</h2>
        </Reveal>
        <Reveal delay={100} className="lg:col-span-8">
          <p className="font-display text-[clamp(1.4rem,2.6vw,2.4rem)] leading-[1.25]">
            {project.overview}
          </p>
        </Reveal>
      </section>

      <section className="shell pb-24 md:pb-32">
        <Reveal>
          <h2 className="eyebrow text-[10px] text-bronze">Project Gallery</h2>
        </Reveal>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {project.gallery.map((src, i) => (
            <Reveal
              key={src + i}
              delay={i * 90}
              className={
                i === 0
                  ? "lg:col-span-12"
                  : i === 1
                    ? "lg:col-span-7"
                    : "lg:col-span-5 lg:mt-16"
              }
            >
              <img
                src={src}
                alt={`${project.name} gallery image ${i + 1}`}
                loading="lazy"
                className={`w-full object-cover ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="shell py-20 md:py-28">
          <Reveal>
            <h2 className="eyebrow text-[10px] text-bronze">Key Details</h2>
          </Reveal>
          <dl className="mt-10 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Project Type", project.category],
              ["Location", project.location],
              ["Scope", project.scope],
              ["Services", project.servicesUsed.join(", ")],
            ].map(([k, v], i) => (
              <Reveal
                key={k}
                delay={i * 80}
                className="border-t border-hairline pt-6 lg:border-l lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
              >
                <dt className="eyebrow text-[9px] text-muted-foreground">{k}</dt>
                <dd className="mt-3 text-base leading-relaxed">{v}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-ink text-ivory">
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          data-cursor="VIEW"
          className="group block"
        >
          <div className="shell flex flex-col gap-6 py-20 md:flex-row md:items-end md:justify-between md:py-28">
            <div>
              <p className="eyebrow text-[10px] text-bronze">Next Project</p>
              <p className="mt-5 display-md transition-colors duration-500 group-hover:text-bronze">
                {next.name}
              </p>
              <p className="mt-4 text-sm text-ivory/50">
                {next.category} · {next.location}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="text-4xl text-ivory/40 transition-transform duration-700 ease-editorial group-hover:translate-x-3 group-hover:text-bronze"
            >
              →
            </span>
          </div>
        </Link>
      </section>
    </div>
  );
}

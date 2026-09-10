import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { projects, type Project } from "@/lib/site-data";

function ProjectCard({
  project,
  className,
  aspect,
}: {
  project: Project;
  className?: string;
  aspect: string;
}) {
  return (
    <Reveal className={className}>
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        data-cursor="VIEW"
        className="group block"
      >
        <div className={`relative overflow-hidden bg-ink ${aspect}`}>
          <img
            src={project.cover}
            alt={`${project.name} — ${project.category} in ${project.location}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1100ms] ease-editorial group-hover:scale-[1.06]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-ink/10 transition-colors duration-700 group-hover:bg-ink/35"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-3 items-center justify-center border border-ivory/60 text-ivory opacity-0 transition-all duration-700 ease-editorial group-hover:translate-y-0 group-hover:opacity-100"
          >
            →
          </span>
        </div>

        <div className="mt-5 overflow-hidden">
          <div className="transition-transform duration-700 ease-editorial group-hover:-translate-y-1">
            <div className="flex items-baseline gap-4">
              <span className="eyebrow text-[10px] text-bronze">{project.no}</span>
              <h3 className="font-display text-2xl md:text-3xl">{project.name}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {project.category} · {project.location}
            </p>
            <span className="eyebrow mt-4 inline-block text-[9px] text-ink/60">
              View Project →
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export function ProjectGallery() {
  const [a, b, c, d] = projects as [Project, Project, Project, Project];

  return (
    <section className="shell py-24 md:py-36">
      <div className="grid gap-8 lg:grid-cols-12">
        <Reveal as="h2" mask className="display-lg lg:col-span-7">
          Projects that speak
          <br />
          for themselves.
        </Reveal>
        <Reveal delay={140} className="flex items-end lg:col-span-4 lg:col-start-9">
          <p className="text-sm leading-relaxed text-muted-foreground">
            From homes and commercial spaces to structural and interior projects, every project
            reflects our commitment to precision and quality.
          </p>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-x-10 gap-y-20 lg:grid-cols-12">
        <ProjectCard project={a} aspect="aspect-[16/10]" className="lg:col-span-8" />
        <ProjectCard
          project={b}
          aspect="aspect-[3/4]"
          className="lg:col-span-4 lg:mt-32"
        />
        <ProjectCard
          project={c}
          aspect="aspect-[4/3]"
          className="lg:col-span-5 lg:col-start-2"
        />
        <ProjectCard
          project={d}
          aspect="aspect-[16/11]"
          className="lg:col-span-6 lg:col-start-7 lg:mt-24"
        />
      </div>

      <Reveal className="mt-24 flex justify-center">
        <Link
          to="/projects"
          data-cursor="VIEW"
          className="eyebrow border border-ink/25 px-10 py-5 text-[10px] transition-colors hover:border-bronze hover:bg-bronze hover:text-ink"
        >
          View All Projects →
        </Link>
      </Reveal>
    </section>
  );
}

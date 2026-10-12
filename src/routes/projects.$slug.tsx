import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useRevealRoot, Reveal } from "@/components/Reveal";
import { projects } from "@/lib/site-data";
import { useState, useEffect, useCallback } from "react";

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

function Lightbox({
  images,
  index,
  onClose,
}: {
  images: string[];
  index: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(index);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center text-ivory/70 hover:text-ivory"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
          <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      {/* Prev button */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center text-ivory/70 hover:text-ivory"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current stroke-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Image */}
      <img
        src={images[current]}
        alt={`Gallery image ${current + 1}`}
        className="max-h-[90vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          aria-label="Next image"
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center text-ivory/70 hover:text-ivory"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current stroke-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Counter */}
      {images.length > 1 && (
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 eyebrow text-[10px] text-ivory/50">
          {current + 1} / {images.length}
        </p>
      )}
    </div>
  );
}

function ProjectDetail() {
  const { project, next } = Route.useLoaderData();
  const ref = useRevealRoot<HTMLDivElement>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div ref={ref} key={project.slug}>
      {lightboxIndex !== null && (
        <Lightbox
          images={project.gallery}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

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
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group relative block w-full cursor-zoom-in overflow-hidden"
                aria-label={`View ${project.name} gallery image ${i + 1} in full screen`}
              >
                <img
                  src={src}
                  alt={`${project.name} gallery image ${i + 1}`}
                  loading="lazy"
                  className="w-full object-contain transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/25 group-hover:opacity-100"
                >
                  <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-ivory stroke-1.5 drop-shadow">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm-2 0v4m-2-2h4" />
                  </svg>
                </span>
              </button>
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

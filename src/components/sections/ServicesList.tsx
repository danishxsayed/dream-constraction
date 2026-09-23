import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site-data";

export function ServicesList({ withHeading = true }: { withHeading?: boolean }) {
  const [active, setActive] = useState<number | null>(null);
  const [openMobile, setOpenMobile] = useState<number | null>(0);

  return (
    <section
      id="services"
      className="relative bg-ink text-ivory transition-colors duration-700"
    >
      <div className={withHeading ? "shell py-24 md:py-36" : "shell py-16 md:py-24"}>
        {withHeading ? (
          <div className="grid gap-8 lg:grid-cols-12">
            <Reveal as="h2" mask className="display-lg lg:col-span-6">
              What we build.
            </Reveal>
            <Reveal delay={140} className="flex items-end lg:col-span-4 lg:col-start-9">
              <p className="text-sm leading-relaxed text-ivory/55 md:text-base lg:text-lg">
                Six disciplines. One dedicated team. Every service delivered with the same standard
                of precision and professionalism.
              </p>
            </Reveal>
          </div>
        ) : null}

        {/* Desktop interactive list */}
        <div
          className="relative mt-20 hidden lg:block"
          onMouseLeave={() => setActive(null)}
        >
          {services.map((s, i) => (
            <div
              key={s.slug}
              onMouseEnter={() => setActive(i)}
              className="group relative border-t border-ivory/12 last:border-b"
            >
              <div className="grid grid-cols-12 items-center gap-8 py-9 transition-all duration-700 ease-editorial group-hover:pl-6">
                <span className="eyebrow col-span-1 text-[10px] text-bronze">{s.no}</span>
                <h3 className="col-span-5 font-display text-[clamp(1.75rem,3vw,3rem)] leading-none transition-colors duration-500 group-hover:text-bronze">
                  {s.title}
                </h3>
                <p className="col-span-5 max-w-md text-sm leading-relaxed text-ivory/45 transition-colors duration-500 group-hover:text-ivory/75">
                  {s.body}
                </p>
                <span
                  aria-hidden="true"
                  className="col-span-1 justify-self-end text-ivory/40 transition-transform duration-700 ease-editorial group-hover:translate-x-2 group-hover:text-bronze"
                >
                  →
                </span>
              </div>
            </div>
          ))}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/2 h-[18rem] w-[13rem] xl:right-[6%] xl:h-[22rem] xl:w-[16rem] -translate-y-1/2 overflow-hidden transition-all duration-700 ease-editorial"
            style={{
              opacity: active === null ? 0 : 1,
              transform: `translateY(calc(-50% + ${active === null ? 0 : (active - 2.5) * 26}px))`,
            }}
          >
            {services.map((s, i) => (
              <img
                key={s.slug}
                src={s.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
                style={{ opacity: active === i ? 1 : 0 }}
              />
            ))}
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="mt-14 lg:hidden">
          {services.map((s, i) => {
            const open = openMobile === i;
            return (
              <div key={s.slug} className="border-t border-ivory/12 last:border-b">
                <button
                  type="button"
                  onClick={() => setOpenMobile(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="eyebrow text-[9px] text-bronze">{s.no}</span>
                    <span className="font-display text-2xl">{s.title}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`text-ivory/50 transition-transform duration-500 ${open ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-all duration-700 ease-editorial"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover"
                    />
                    <p className="pb-8 pt-5 text-sm leading-relaxed text-ivory/60">{s.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

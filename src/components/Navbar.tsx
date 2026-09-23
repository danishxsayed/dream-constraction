import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { company } from "@/lib/site-data";
import logoImg from "@/assets/dream-logo.png";

const links = [
  { label: "Projects", to: "/projects", hash: undefined },
  { label: "Services", to: "/services", hash: undefined },
  { label: "About", to: "/about", hash: undefined },
  { label: "Process", to: "/about", hash: "process" },
  { label: "Contact", to: "/contact", hash: undefined },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const overHero = path === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = overHero && !scrolled;

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-editorial",
          scrolled
            ? "border-b border-hairline bg-background/85 backdrop-blur-xl"
            : "border-b border-transparent",
        ].join(" ")}
      >
        <nav
          aria-label="Primary"
          className={[
            "shell flex items-center justify-between transition-all duration-700 ease-editorial",
            scrolled ? "py-4" : "py-6 md:py-8",
            light ? "text-ivory" : "text-foreground",
          ].join(" ")}
        >
          <a href="/" className="group flex items-center" aria-label={company.name}>
            <img
              src={logoImg}
              alt={company.name}
              width={300}
              height={266}
              className="h-14 w-auto object-contain md:h-20"
            />
          </a>

          <ul className="hidden items-center gap-5 xl:gap-10 lg:flex">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  {...(l.hash ? { hash: l.hash } : {})}
                  className="eyebrow link-underline text-[10px] opacity-80 transition-opacity hover:opacity-100"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              data-cursor="OPEN →"
              className={[
                "eyebrow hidden border px-4 py-2.5 xl:px-6 xl:py-3 text-[10px] transition-colors duration-500 ease-editorial lg:inline-block",
                light
                  ? "border-ivory/40 text-ivory hover:border-bronze hover:bg-bronze hover:text-ink"
                  : "border-ink/25 hover:border-bronze hover:bg-bronze hover:text-ink",
              ].join(" ")}
            >
              Start a Project
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
            >
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-6 bg-current" />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile navigation */}
      <div
        className={[
          "fixed inset-0 z-[60] bg-ink text-ivory transition-[opacity,visibility] duration-500 ease-editorial lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        ].join(" ")}
      >
        <div className="shell flex h-full flex-col py-6">
          <div className="flex items-center justify-between">
            <img
              src={logoImg}
              alt={company.name}
              width={300}
              height={266}
              className="h-12 w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="eyebrow text-[10px]"
            >
              Close
            </button>
          </div>

          <ul className="mt-16 flex flex-1 flex-col gap-2">
            {links.map((l, i) => (
              <li key={l.label} className="border-b border-ivory/10 py-4">
                <Link
                  to={l.to}
                  {...(l.hash ? { hash: l.hash } : {})}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 font-display text-4xl"
                >
                  <span className="eyebrow text-[10px] text-bronze">
                    0{i + 1}
                  </span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="eyebrow mt-8 flex items-center justify-between border border-bronze px-6 py-5 text-[11px] text-bronze"
          >
            Start a Project <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </>
  );
}

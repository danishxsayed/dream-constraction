import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site-data";
import logoImg from "@/assets/dream-logo.png";

const links = [
  { label: "Projects", to: "/projects" as const },
  { label: "Services", to: "/services" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="shell py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-3 xl:grid-cols-12">
          <div className="lg:col-span-3 xl:col-span-5">
            <img
              src={logoImg}
              alt={company.name}
              width={300}
              height={266}
              loading="lazy"
              className="h-28 w-auto object-contain"
            />
            <p className="mt-5 max-w-xs text-sm text-ivory/55">{company.tagline}</p>
            <p className="mt-2 text-xs text-bronze/90">Est. {company.established} · 15+ Years Experience</p>

            {/* Social media icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={company.socials.find((s) => s.name === "Facebook")?.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Dream Palace Constructions on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/20 text-ivory/70 transition-all hover:border-bronze hover:bg-bronze/10 hover:text-bronze"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href={company.socials.find((s) => s.name === "Instagram")?.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Dream Palace Constructions on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/20 text-ivory/70 transition-all hover:border-bronze hover:bg-bronze/10 hover:text-bronze"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href={company.socials.find((s) => s.name === "X")?.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Dream Palace Constructions on X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/20 text-ivory/70 transition-all hover:border-bronze hover:bg-bronze/10 hover:text-bronze"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="xl:col-span-2">
            <p className="eyebrow text-[10px] text-bronze">Navigate</p>
            <ul className="mt-6 space-y-3 text-sm text-ivory/70">
              {links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="link-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="xl:col-span-2">
            <p className="eyebrow text-[10px] text-bronze">Contact</p>
            <ul className="mt-6 space-y-3 text-sm text-ivory/70">
              {company.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:+91${p}`} className="link-underline">
                    {p}
                  </a>
                </li>
              ))}
              <li className="break-all">
                <a href={`mailto:${company.email}`} className="link-underline">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          <address className="not-italic xl:col-span-3">
            <p className="eyebrow text-[10px] text-bronze">Studio</p>
            <p className="mt-6 text-sm leading-relaxed text-ivory/70">
              {company.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-ivory/45">
              {company.hours.map((h) => (
                <span key={h} className="block">
                  {h}
                </span>
              ))}
            </p>
          </address>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-ivory/12 pt-8 text-xs text-ivory/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {company.name}. All rights reserved.</p>
          <p>{company.founder} · {company.credentials}</p>
        </div>
      </div>
    </footer>
  );
}

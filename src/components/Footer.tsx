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
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src={logoImg}
              alt={company.name}
              width={300}
              height={266}
              loading="lazy"
              className="h-28 w-auto object-contain"
            />
            <p className="mt-5 max-w-xs text-sm text-ivory/55">{company.tagline}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
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

          <div className="lg:col-span-2">
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

          <address className="not-italic lg:col-span-3">
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
          <p>{company.founder} · Chartered Engineer (India)</p>
        </div>
      </div>
    </footer>
  );
}

import { company } from "@/lib/site-data";

export function MapSection() {
  return (
    <section className="bg-ink text-ivory">
      <div className="shell grid gap-10 py-20 lg:grid-cols-12 md:py-28">
        <div className="lg:col-span-4">
          <p className="eyebrow text-[10px] text-bronze">Find the studio</p>
          <h2 className="mt-6 display-md">Vidyanagar, Hubballi.</h2>
          <address className="mt-8 not-italic text-sm leading-relaxed text-ivory/60">
            {company.address.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.addressLine)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow mt-10 inline-block border-b border-ivory/30 pb-2 text-[10px] transition-colors hover:border-bronze hover:text-bronze"
          >
            Open in Google Maps →
          </a>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="relative aspect-[16/10] w-full overflow-hidden border border-ivory/12">
            <iframe
              title={`Map showing ${company.name} in Hubli`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(company.addressLine)}&z=17&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale contrast-125"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

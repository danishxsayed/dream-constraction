import { createFileRoute } from "@tanstack/react-router";
import { useRevealRoot, Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { MapSection } from "@/components/sections/MapSection";
import { company, whatsappHref } from "@/lib/site-data";

const title = "Contact | Talk to Builders in Hubli, Karnataka";
const description =
  "Contact Dream Palace Constructions in Vidyanagar, Hubli for residential construction, commercial projects, structural design, interiors and landscaping. We reply within one business day.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  const ref = useRevealRoot<HTMLDivElement>();

  return (
    <div ref={ref}>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let's talk
            <br />
            about your project.
          </>
        }
        intro="Whether you have a blueprint ready or just an idea, we're here to help you move forward. We'll get back to you within one business day."
      />

      <section className="shell grid gap-16 pb-24 lg:grid-cols-12 md:pb-32">
        <Reveal className="lg:col-span-7">
          <ContactForm />
        </Reveal>

        <Reveal delay={140} className="lg:col-span-4 lg:col-start-9">
          <div className="space-y-10">
            <div className="border-t border-hairline pt-6">
              <p className="eyebrow text-[9px] text-bronze">Address</p>
              <address className="mt-4 not-italic text-sm leading-relaxed text-muted-foreground">
                {company.address.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
            </div>

            <div className="border-t border-hairline pt-6">
              <p className="eyebrow text-[9px] text-bronze">Phone</p>
              <div className="mt-4 space-y-2 text-sm">
                {company.phones.map((p) => (
                  <a key={p} href={`tel:+91${p}`} className="link-underline block">
                    {p}
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-hairline pt-6">
              <p className="eyebrow text-[9px] text-bronze">Email</p>
              <a
                href={`mailto:${company.email}`}
                className="link-underline mt-4 inline-block break-all text-sm"
              >
                {company.email}
              </a>
            </div>

            <div className="border-t border-hairline pt-6">
              <p className="eyebrow text-[9px] text-bronze">Hours</p>
              <p className="mt-4 text-sm text-muted-foreground">
                {company.hours.map((h) => (
                  <span key={h} className="block">
                    {h}
                  </span>
                ))}
              </p>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow inline-block border-b border-ink/25 pb-2 text-[10px] transition-colors hover:border-bronze hover:text-bronze"
            >
              Message us on WhatsApp →
            </a>
          </div>
        </Reveal>
      </section>

      <MapSection />
    </div>
  );
}

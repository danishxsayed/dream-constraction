import { createFileRoute } from "@tanstack/react-router";
import { useRevealRoot } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { ServicesList } from "@/components/sections/ServicesList";
import { Journey } from "@/components/sections/Journey";
import { CTASection } from "@/components/sections/CTASection";

const title = "Services | Construction, Structural & Interior Works in Hubli";
const description =
  "Six disciplines from Dream Palace Constructions in Hubli: residential and commercial construction, building renovation, structural designing, interior designing and landscaping.";

export const Route = createFileRoute("/services")({
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
  component: ServicesPage,
});

function ServicesPage() {
  const ref = useRevealRoot<HTMLDivElement>();

  return (
    <div ref={ref}>
      <PageHeader
        eyebrow="Services"
        title={<>What we build.</>}
        intro="Six disciplines. One dedicated team. Every service delivered with the same standard of precision and professionalism, across Hubli-Dharwad and Karnataka."
      />
      <ServicesList />
      <Journey />
      <CTASection />
    </div>
  );
}

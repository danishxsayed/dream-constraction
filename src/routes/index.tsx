import { createFileRoute } from "@tanstack/react-router";
import { useRevealRoot } from "@/components/Reveal";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { ServicesList } from "@/components/sections/ServicesList";
import { Journey } from "@/components/sections/Journey";
import { WhyUs } from "@/components/sections/WhyUs";
import { FounderSection } from "@/components/sections/FounderSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

const title = "Dream Palace Constructions | Construction Company in Hubli";
const description =
  "Dream Palace Constructions is a trusted construction and engineering company in Hubli offering residential construction, commercial construction, structural design, renovation, interior design and landscaping services.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  const ref = useRevealRoot<HTMLDivElement>();

  return (
    <div ref={ref}>
      <Hero />
      <BrandStatement />
      <Stats />
      <ProjectGallery />
      <ServicesList />
      <Journey />
      <WhyUs />
      <FounderSection />
      <Testimonials />
      <CTASection />
    </div>
  );
}

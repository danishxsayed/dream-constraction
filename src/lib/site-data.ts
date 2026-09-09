import heroImg from "@/assets/hero.jpg";
import p1 from "@/assets/project-01.jpg";
import p2 from "@/assets/project-02.jpg";
import p3 from "@/assets/project-03.jpg";
import p4 from "@/assets/project-04.jpg";
import renovationImg from "@/assets/service-renovation.jpg";
import landscapeImg from "@/assets/service-landscape.jpg";
import blueprintImg from "@/assets/blueprint.jpg";

export const company = {
  name: "Dream Palace Constructions",
  tagline: "Building dreams into reality.",
  founder: "Er. Vasant P Paste",
  credentials: "B.E. (Civil) · MIE · Chartered Engineer (India)",
  address: ["#10 Prashant Colony,", "Vidyanagar,", "Hubli – 580031,", "Karnataka"],
  addressLine: "#10 Prashant Colony, Vidyanagar, Hubli – 580031, Karnataka",
  phones: ["8095860301", "7019214441"],
  email: "info@dreampalaceconstructions.com",
  hours: ["Monday – Saturday", "10:30 AM – 6:00 PM"],
  whatsapp: "918095860301",
  whatsappMessage:
    "Hello Dream Palace Constructions, I would like to discuss a construction project.",
};

export const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  company.whatsappMessage,
)}`;

export const navLinks = [
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Process", to: "/about", hash: "process" },
  { label: "Contact", to: "/contact" },
] as const;

export const stats = [
  { value: 18, suffix: "+", label: "Years of Experience" },
  { value: 350, suffix: "+", label: "Projects Completed" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 6, suffix: "", label: "Service Verticals" },
];

export type Service = {
  no: string;
  title: string;
  slug: string;
  body: string;
  image: string;
};

export const services: Service[] = [
  {
    no: "01",
    title: "Residential Construction",
    slug: "residential-construction",
    body: "Complete turnkey home construction from blueprint to handover. We work closely with you and your architect to build the home you've envisioned, on time and within budget.",
    image: p1,
  },
  {
    no: "02",
    title: "Commercial Construction",
    slug: "commercial-construction",
    body: "Office fitouts, retail spaces, restaurant refurbishments and mid-scale commercial premises — delivered to specification with minimal operational disruption.",
    image: p2,
  },
  {
    no: "03",
    title: "Building Renovation",
    slug: "building-renovation",
    body: "Breathe new life into existing structures through thoughtful restoration and technically appropriate renovation methods.",
    image: renovationImg,
  },
  {
    no: "04",
    title: "Structural Designing",
    slug: "structural-designing",
    body: "Integrated structural design and analysis using modern software, delivering safe, efficient and rationally optimized structures across Hubli-Dharwad.",
    image: p4,
  },
  {
    no: "05",
    title: "Interior Designing",
    slug: "interior-designing",
    body: "Transforming spaces into personalized environments — from detailed brief through procurement, installation and final handover.",
    image: p3,
  },
  {
    no: "06",
    title: "Landscaping & External Works",
    slug: "landscaping-external-works",
    body: "Paved areas, stone features, pergolas, ponds and bound-aggregate paths designed to add lasting value and character to your property.",
    image: landscapeImg,
  },
];

export type Project = {
  no: string;
  slug: string;
  name: string;
  category: string;
  location: string;
  cover: string;
  overview: string;
  scope: string;
  servicesUsed: string[];
  gallery: string[];
  placeholder: true;
};

/**
 * Placeholder portfolio entries — names, descriptions and imagery are
 * indicative and structured so real project records can replace them 1:1.
 */
export const projects: Project[] = [
  {
    no: "01",
    slug: "residence-project-one",
    name: "Residence Project One",
    category: "Residential Construction",
    location: "Hubli, Karnataka",
    cover: p1,
    overview:
      "A turnkey family residence delivered from foundation to finishing. The brief called for generous daylight, durable material choices and a clear, predictable build programme.",
    scope: "Turnkey construction, finishing works, external works",
    servicesUsed: ["Residential Construction", "Interior Designing", "Landscaping & External Works"],
    gallery: [p1, p3, landscapeImg],
    placeholder: true,
  },
  {
    no: "02",
    slug: "commercial-project-two",
    name: "Commercial Project Two",
    category: "Commercial Construction",
    location: "Hubli-Dharwad, Karnataka",
    cover: p2,
    overview:
      "A mid-scale commercial premises built to specification with careful staging so adjacent operations continued uninterrupted throughout the programme.",
    scope: "Shell and core, fitout coordination, handover",
    servicesUsed: ["Commercial Construction", "Structural Designing"],
    gallery: [p2, p4, blueprintImg],
    placeholder: true,
  },
  {
    no: "03",
    slug: "interior-project-three",
    name: "Interior Project Three",
    category: "Interior Designing",
    location: "Vidyanagar, Hubli",
    cover: p3,
    overview:
      "An interior programme taken from detailed brief through procurement, installation and final handover, with a restrained material palette and bespoke joinery.",
    scope: "Interior design, procurement, installation",
    servicesUsed: ["Interior Designing", "Building Renovation"],
    gallery: [p3, renovationImg, p1],
    placeholder: true,
  },
  {
    no: "04",
    slug: "structural-project-four",
    name: "Structural Project Four",
    category: "Structural Designing",
    location: "Dharwad, Karnataka",
    cover: p4,
    overview:
      "Integrated structural design and site supervision for a multi-storey frame, rationalised for efficient material use and buildability.",
    scope: "Structural design, analysis, site supervision",
    servicesUsed: ["Structural Designing", "Commercial Construction"],
    gallery: [p4, blueprintImg, p2],
    placeholder: true,
  },
];

export const processSteps = [
  {
    no: "01",
    title: "Discover",
    body: "Understand your requirements, vision, site and budget.",
  },
  { no: "02", title: "Plan", body: "Develop a clear roadmap, scope and project direction." },
  {
    no: "03",
    title: "Design",
    body: "Coordinate structural, architectural, interior and technical requirements.",
  },
  {
    no: "04",
    title: "Build",
    body: "Execute with experienced teams, quality materials and active project management.",
  },
  {
    no: "05",
    title: "Handover",
    body: "Complete the final details and deliver your finished space.",
  },
];

export const journeyStages = ["Understand", "Plan", "Design", "Build", "Deliver"];

export const whyPoints = [
  {
    no: "01",
    title: "Quality Assured",
    body: "Top-grade materials, certified engineers and a zero-compromise quality checklist on every project.",
  },
  {
    no: "02",
    title: "Always On Time",
    body: "We set realistic timelines and stick to them. If anything changes, you hear from us first.",
  },
  {
    no: "03",
    title: "Client-First Team",
    body: "Every team member takes personal ownership of your project.",
  },
  {
    no: "04",
    title: "Safe Practices",
    body: "Occupational safety is non-negotiable. We operate to strict standards that protect our people and your property.",
  },
];

export const principles = [
  "Licensed & Chartered",
  "Transparent Pricing",
  "On-Time Delivery",
  "End-to-End Service",
];

export const testimonials = [
  {
    quote:
      "I would recommend Dream Palace Constructions without hesitation for any project in their field. Highly professional, attentive, and delivered exactly what was promised.",
    name: "S.R. Navalihiremath",
    role: "Founder President, SSR Education & SW Trust, Bengaluru",
  },
  {
    quote:
      "Our experience with Dream Palace Construction was marked by high integrity, excellent quality of work, and outstanding value. A team that delivers on every promise.",
    name: "K.S. Hubballi",
    role: "Rtd. Librarian, KIMS Hubli",
  },
  {
    quote:
      "It is always a pleasure to recommend Dream Palace Constructions. Fine quality construction at a fair, transparent price — they truly exceed expectations every time.",
    name: "Basuma Kodagu",
    role: "M.D., Creative Construction",
  },
];

export const images = { hero: heroImg, blueprint: blueprintImg };

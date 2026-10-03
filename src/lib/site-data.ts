import blueprintImg from "@/assets/blueprint.jpg";

// Residential
import res1 from "@/assets/Residential/DPC_VPP.jpeg";
import res2 from "@/assets/Residential/Dream_Palace_Constructions_Consult_Cont_Project_No-30.JPG";
import res3 from "@/assets/Residential/Dream_Palace_Constructions_Consult_Cont_Project_No-32.JPG";
import res4 from "@/assets/Residential/Dream_Palace_Constructions_Structural_Project_No-19.JPG";
import res5 from "@/assets/Residential/IMG_4501.JPG";
import res6 from "@/assets/Residential/Ingalalli at DWD.jpg";

// Commercial & Institutional
import com1 from "@/assets/Commercial and Institutional/Dream_Palace_Constructions_Consult_Cont_Project_No-12.JPG";
import com2 from "@/assets/Commercial and Institutional/Dream_Palace_Constructions_Consult_Cont_Project_No-18.JPG";
import com3 from "@/assets/Commercial and Institutional/Dream_Palace_Constructions_Consult_Cont_Project_No-22.JPG";
import com4 from "@/assets/Commercial and Institutional/Dream_Palace_Constructions_Consult_Cont_Project_No-28.JPG";
import com5 from "@/assets/Commercial and Institutional/commercial complex at Hungund.jpg";
import com6 from "@/assets/Commercial and Institutional/Dream_palace_constructions_Shri_Laxminarayan_Temmple.jpg";

// Renovation
import ren1 from "@/assets/Renovation/Dream_Palace_Constructions_Structural_Project_No-29.jpeg";
import ren2 from "@/assets/Renovation/Dream_Palace_Constructions_Structural_Project_No-30.jpeg";
import ren3 from "@/assets/Renovation/WhatsApp Image 2021-08-29 at 4.50.18 PM.jpeg";
import ren4 from "@/assets/Renovation/WhatsApp Image 2026-09-22 at 1.52.36 PM.jpeg";
import renHero from "@/assets/Renovation/Renovation.jpeg";
import strHero from "@/assets/Structural/strcutural.jpeg";
import intHero from "@/assets/Interior/upcoming project bhailhongal bedroom 1 (1).jpg";

// Structural
import str1 from "@/assets/Structural/Dream_Palace_Constructions_Structural_Project_No-05.JPG";
import str2 from "@/assets/Structural/Dream_Palace_Constructions_Structural_Project_No-09.JPG";
import str3 from "@/assets/Structural/Dream_Palace_Constructions_Structural_Project_No-14.JPG";
import str4 from "@/assets/Structural/IMG_4503.JPG";
import str5 from "@/assets/Structural/WhatsApp Image 2025-11-22 at 4.06.16 PM.jpeg";

// Team
import teamKrishna from "@/assets/Our Team/Krishna Y B Srtuctural Engg..jpeg";
import teamManjunath from "@/assets/Our Team/Manjunarh_Hondadkatti_Structural Engg.jpg";
import teamPadma from "@/assets/Our Team/Padma_Drafting & Detailing.jpg";
import teamSagar from "@/assets/Our Team/Sagar Hiremat_Interior Designer.jpg";
import teamSunil from "@/assets/Our Team/Sunil Aparanji_Designer.jpeg";
import teamAkashta from "@/assets/Our Team/Akashta_Drafting & Detailing.jpeg";
import teamKrishnaDirector from "@/assets/Our Team/Krishna P P_managing director.jpeg";

// Interior
import int1 from "@/assets/Interior/hubli marvel project 1.jpg";
import int2 from "@/assets/Interior/hubli marvel project 2 office boss cabin.jpg";
import int3 from "@/assets/Interior/banglore rr nagar living area.jpg";
import int4 from "@/assets/Interior/banglore rr nagar living area 2.jpg";
import int5 from "@/assets/Interior/dharwad project bedroom.jpg";
import int6 from "@/assets/Interior/dharwad project kitchen 1.jpg";
import int7 from "@/assets/Interior/kudalsangam school 1.jpg";
import int8 from "@/assets/Interior/banglore rr nagar kitchen 1.jpg";

export const company = {
  name: "Dream Palace Constructions",
  tagline: "Building dreams into reality.",
  established: "2012",
  founder: "Er. Vasant P Paste",
  credentials: "Engineer & Founder",
  address: [
    "#10, Gurudev Land mark,",
    "behind L T PUJARI, Shirur Park,",
    "Vidyanagar, Hubballi – 580031,",
    "Karnataka",
  ],
  addressLine:
    "#10, Gurudev Land mark behind L T PUJARI, Shirur Park, Vidyanagar, Hubballi – 580031, Karnataka",
  phones: ["8095860301"],
  email: "info@dreampalaceconstructions.com",
  hours: ["Monday – Saturday", "10:30 AM – 6:00 PM"],
  whatsapp: "918095860301",
  whatsappMessage:
    "Hello Dream Palace Constructions, I would like to discuss a construction project.",
  socials: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100068765484803",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/dream_palace_constructions",
    },
    {
      name: "X",
      href: "https://x.com",
    },
  ],
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
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 300, suffix: "+", label: "Projects Completed" },
  { value: 400, suffix: "+", label: "Happy Clients" },
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
    body: "Complete turnkey home construction from blueprint to handover. We work closely with you and your architect to build the home you’ve envisioned, on time and within budget.",
    image: res1,
  },
  {
    no: "02",
    title: "Commercial Construction",
    slug: "commercial-construction",
    body: "Office fitouts, retail spaces, restaurant refurbishments and mid-scale commercial premises — delivered to specification with minimal operational disruption.",
    image: com5,
  },
  {
    no: "03",
    title: "Renovation",
    slug: "building-renovation",
    body: "Breathe new life into existing structures through thoughtful restoration and technically appropriate renovation methods.",
    image: renHero,
  },
  {
    no: "04",
    title: "Structural Designing",
    slug: "structural-designing",
    body: "Integrated structural design and analysis using modern software, delivering safe, efficient and rationally optimized structures across Hubli-Dharwad.",
    image: strHero,
  },
  {
    no: "05",
    title: "Interior Designing",
    slug: "interior-designing",
    body: "Transforming spaces into personalized environments — from detailed brief through procurement, installation and final handover.",
    image: intHero,
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

export const projects: Project[] = [
  {
    no: "01",
    slug: "residential-project-one",
    name: "Residential Project",
    category: "Residential Construction",
    location: "Hubli-Dharwad, Karnataka",
    cover: res1,
    overview:
      "A turnkey family residence delivered from foundation to finishing. The brief called for generous daylight, durable material choices and a clear, predictable build programme.",
    scope: "Turnkey construction, finishing works, external works",
    servicesUsed: ["Residential Construction", "Interior Designing"],
    gallery: [res6, res1, res2, res3, res4, res5],
    placeholder: true,
  },
  {
    no: "02",
    slug: "commercial-project-two",
    name: "Commercial & Institutional Project",
    category: "Commercial Construction",
    location: "Hubli-Dharwad, Karnataka",
    cover: com5,
    overview:
      "A mid-scale commercial premises built to specification with careful staging so adjacent operations continued uninterrupted throughout the programme.",
    scope: "Shell and core, fitout coordination, handover",
    servicesUsed: ["Commercial Construction", "Structural Designing"],
    gallery: [com5, com1, com2, com3, com4, com6],
    placeholder: true,
  },
  {
    no: "03",
    slug: "interior-project-three",
    name: "Interior Design Project",
    category: "Interior Designing",
    location: "Hubli-Bengaluru, Karnataka",
    cover: intHero,
    overview:
      "An interior programme taken from detailed brief through procurement, installation and final handover, with a restrained material palette and bespoke joinery.",
    scope: "Interior design, procurement, installation",
    servicesUsed: ["Interior Designing", "Renovation"],
    gallery: [int1, int2, int3, int4, int5, int6, int7, int8],
    placeholder: true,
  },
  {
    no: "04",
    slug: "structural-project-four",
    name: "Structural Design Project",
    category: "Structural Designing",
    location: "Dharwad, Karnataka",
    cover: strHero,
    overview:
      "Integrated structural design and site supervision for a multi-storey frame, rationalised for efficient material use and buildability.",
    scope: "Structural design, analysis, site supervision",
    servicesUsed: ["Structural Designing", "Commercial Construction"],
    gallery: [str1, str2, str3, str4, str5],
    placeholder: true,
  },
  {
    no: "05",
    slug: "renovation-project-five",
    name: "Renovation Project",
    category: "Renovation",
    location: "Hubli-Dharwad, Karnataka",
    cover: renHero,
    overview:
      "A comprehensive renovation breathing new life into an existing structure through thoughtful restoration and technically appropriate methods.",
    scope: "Structural renovation, finishing works, site supervision",
    servicesUsed: ["Renovation", "Structural Designing"],
    gallery: [ren4, ren1, ren2, ren3],
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
  "Established 2012",
  "Transparent Pricing",
  "On-Time Delivery",
  "End-to-End Service",
];

export const testimonials = [
  {
    quote:
      "I am extremely happy and satisfied with the interior quality, finishing, and overall workmanship done by Dream Palace Constructions for our office. Their professional approach, attention to detail, quality of work, and commitment to timelines truly deserve appreciation. The final outcome has given our office a professional and elegant look that perfectly reflects our business. Highly recommended to anyone looking for trusted, professional, and quality interior services.",
    name: "Marvel",
    role: "SIR Financial Services Pvt. Ltd., Marvel Ecron, Gokul Road, Hubballi",
  },
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

export const images = { blueprint: blueprintImg };

export type TeamMember = {
  name: string;
  designation: string;
  image: string;
};

export const team: TeamMember[] = [
  { name: "Krishna P P", designation: "Managing Director", image: teamKrishnaDirector },
  { name: "Krishna Y B", designation: "Structural Engineer", image: teamKrishna },
  { name: "Manjunath Hondadkatti", designation: "Structural Engineer", image: teamManjunath },
  { name: "Padma", designation: "Drafting & Detailing", image: teamPadma },
  { name: "Akashta", designation: "Drafting & Detailing", image: teamAkashta },
  { name: "Sagar Hiremat", designation: "Interior Designer", image: teamSagar },
  { name: "Sunil Aparanji", designation: "Designer", image: teamSunil },
];

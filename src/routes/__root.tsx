import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { CustomCursor } from "@/components/CustomCursor";
import { company } from "@/lib/site-data";

function NotFoundComponent() {
  return (
    <div className="shell flex min-h-screen flex-col items-center justify-center text-center">
      <p className="eyebrow text-[10px] text-bronze">404</p>
      <h1 className="mt-6 display-lg">Page not found.</h1>
      <p className="mt-6 max-w-sm text-sm text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="eyebrow mt-10 border border-ink/25 px-8 py-4 text-[10px] transition-colors hover:border-bronze hover:bg-bronze hover:text-ink"
      >
        Go home
      </Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="shell flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="display-md">This page didn't load.</h1>
      <p className="mt-6 max-w-sm text-sm text-muted-foreground">
        Something went wrong on our end. You can try refreshing or head back home.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="eyebrow bg-ink px-8 py-4 text-[10px] text-ivory transition-colors hover:bg-bronze hover:text-ink"
        >
          Try again
        </button>
        <a
          href="/"
          className="eyebrow border border-ink/25 px-8 py-4 text-[10px] transition-colors hover:border-bronze"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: company.name,
  description:
    "Construction, structural engineering, interior design and landscaping company based in Hubballi, Karnataka. Established 2012.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "#10, Gurudev Land mark, behind L T PUJARI, Shirur Park, Vidyanagar",
    addressLocality: "Hubballi",
    postalCode: "580031",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  telephone: company.phones.map((p) => `+91${p}`),
  email: company.email,
  founder: { "@type": "Person", name: company.founder, jobTitle: "Engineer & Founder" },
  areaServed: "Hubli-Dharwad, Karnataka",
  openingHours: "Mo-Sa 10:30-18:00",
  makesOffer: [
    "Residential Construction",
    "Commercial Construction",
    "Renovation",
    "Structural Designing",
    "Interior Designing",
  ].map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dream Palace Constructions | Construction Company in Hubli" },
      {
        name: "description",
        content:
          "Trusted construction and engineering company in Hubli offering residential and commercial construction, structural design, renovation, interiors and landscaping.",
      },
      { name: "author", content: company.founder },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Inter:wght@300;400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: "if('scrollRestoration' in history){history.scrollRestoration='manual';}window.addEventListener('load',function(){window.scrollTo(0,0);});" }} />
        {children}
        <Scripts />
        <script src="https://cdn.botpress.cloud/webchat/v5.0/inject.js"></script>
        <script src="https://files.bpcontent.cloud/2026/09/24/05/20260924054632-DX0EVWCI.js" defer></script>
        <style>{`
          #bp-web-widget-container,
          [data-id="bp-web-widget"],
          .bpw-widget-btn,
          .bpw-layout,
          .bpw-floating-button {
            left: 20px !important;
            right: auto !important;
          }
        `}</style>
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CustomCursor />
      <Navbar />
      <main>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <FloatingCTA />
    </QueryClientProvider>
  );
}

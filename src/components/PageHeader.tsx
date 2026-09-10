import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <header className="shell pb-16 pt-40 md:pb-24 md:pt-56">
      <p data-reveal className="eyebrow text-[10px] text-bronze">
        {eyebrow}
      </p>
      <h1 data-mask className="mt-8 display-lg">
        {title}
      </h1>
      {intro ? (
        <p
          data-reveal
          style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
          className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground"
        >
          {intro}
        </p>
      ) : null}
    </header>
  );
}

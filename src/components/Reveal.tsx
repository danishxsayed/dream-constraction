import { useEffect, useRef, type ElementType, type ReactNode } from "react";

export function useRevealRoot<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const nodes = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal],[data-mask]"),
    );

    if (typeof IntersectionObserver === "undefined") {
      nodes.forEach((n) => {
        if (n.hasAttribute("data-reveal")) n.setAttribute("data-reveal", "in");
        if (n.hasAttribute("data-mask")) n.setAttribute("data-mask", "in");
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          if (el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", "in");
          if (el.hasAttribute("data-mask")) el.setAttribute("data-mask", "in");
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return ref;
}

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  mask?: boolean;
  className?: string;
};

export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  mask = false,
  className,
}: RevealProps) {
  const attrs = mask ? { "data-mask": "" } : { "data-reveal": "" };
  return (
    <Tag
      {...attrs}
      className={className}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}

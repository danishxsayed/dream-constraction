import { useEffect, useRef, useState } from "react";

/** Subtle desktop-only cursor. Expands with a label over projects and CTAs. */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fine =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;
    setEnabled(true);

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      setVisible(true);
      const target = (e.target as HTMLElement)?.closest?.("[data-cursor]");
      setLabel(target ? (target.getAttribute("data-cursor") ?? null) : null);
    };

    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dot}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[999] hidden select-none items-center justify-center rounded-full border border-bronze/70 bg-bronze/10 backdrop-blur-[1px] transition-[width,height,background-color] duration-500 ease-editorial lg:flex"
      style={{
        width: label ? 88 : 12,
        height: label ? 88 : 12,
        opacity: visible ? 1 : 0,
      }}
    >
      {label ? (
        <span className="eyebrow text-[10px] text-ivory mix-blend-difference">{label}</span>
      ) : null}
    </div>
  );
}

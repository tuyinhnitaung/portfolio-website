"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Animated highlighter stroke behind text.
 * Usage: <Highlight>developer</Highlight>
 */
export default function Highlight({
  children,
  delay = 0,             // ms before animation starts (nice for staggering)
  colorClass = "bg-amber-300/70 dark:bg-amber-200/60", // stroke color
  className = "",
}) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const t = setTimeout(() => setActive(true), delay);
            // once revealed, stop observing
            io.unobserve(el);
            return () => clearTimeout(t);
          }
        });
      },
      { rootMargin: "-10% 0px -10% 0px", threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className={[
          "absolute inset-x-0 bottom-[0.08em] h-[0.6em] rounded-sm",
          colorClass,
          "origin-left scale-x-0 transition-transform duration-700 ease-out",
          "motion-reduce:transition-none",
          active ? "scale-x-100" : "scale-x-0",
        ].join(" ")}
      />
    </span>
  );
}

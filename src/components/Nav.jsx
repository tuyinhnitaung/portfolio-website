"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

/* ---------- tiny scroll-spy (built-in) ---------- */
function useScrollSpy(ids, offset = 96) {
  const [active, setActive] = useState(ids[0] || "");
  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: `-${offset}px 0px -70% 0px`, threshold: 0.1 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids, offset]);

  return active;
}

/* ---------- section links for single-page ---------- */
const links = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // --- light/dark toggle (no extra libs) ---
  const [theme, setTheme] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark =
      typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const start = stored || (prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", start === "dark");
    setTheme(start);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeId = useScrollSpy(links.map((l) => l.id), 96);

  const base = "text-sm font-semibold transition hover:opacity-80";
  const active =
    "relative after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:rounded-full";

  const ToggleButton = (
    <button
      onClick={toggleTheme}
      className="ml-2 inline-flex items-center justify-center rounded-md border p-2"
      style={{ borderColor: "var(--border)" }}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
    >
      {mounted ? (
        theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4 opacity-0" />
      )}
    </button>
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b ${scrolled ? "shadow-sm" : ""} backdrop-blur`}
      style={{
        background: scrolled ? "color-mix(in oklab, var(--bg) 92%, transparent)" : "transparent",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link href="#home" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Portfolio
        </Link>

        {/* Desktop */}
        <nav className="hidden sm:flex items-center gap-6">
          {links.map((l) => {
            const isActive = activeId === l.id;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={isActive ? `${base} ${active}` : base}
                style={isActive ? { color: "var(--link)" } : undefined}
              >
                <span className="relative">{l.label}</span>
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 -bottom-2 block h-0.5 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                )}
              </Link>
            );
          })}
          {ToggleButton}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden inline-flex items-center justify-center p-2 rounded-md border"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{ borderColor: "var(--border)" }}
        >
          <span className="sr-only">Menu</span>
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-1 block h-0.5 w-5 bg-current transition ${
                open ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 block h-0.5 w-5 bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 block h-0.5 w-5 bg-current transition ${
                open ? "-rotate-45 -translate-y-1" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav
          className="sm:hidden border-t"
          style={{ background: "var(--bg)", borderColor: "var(--border)" }}
        >
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
            {links.map((l) => {
              const isActive = activeId === l.id;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)} // close menu on click (anchors don't change pathname)
                  className={isActive ? `${base} ${active}` : base}
                  style={isActive ? { color: "var(--link)" } : undefined}
                >
                  <span className="relative">{l.label}</span>
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute left-0 right-0 -bottom-2 block h-0.5 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </Link>
              );
            })}
            <div className="pt-2">{ToggleButton}</div>
          </div>
        </nav>
      )}
    </header>
  );
}

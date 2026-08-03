"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";
import { useLocale } from "@/context/locale";

const links = [
  { href: "#about", key: "about" as const },
  { href: "#project", key: "project" as const },
  { href: "#experience", key: "experience" as const },
  { href: "#stack", key: "stack" as const },
  { href: "#contact", key: "contact" as const },
];

export function Nav() {
  const { t, locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--navy-deep)_90%,transparent)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.25rem] sm:px-8">
        <a
          href="#top"
          className="font-display text-[1.05rem] font-semibold tracking-tight text-[var(--cream)] sm:text-lg"
        >
          {siteConfig.name}
          <span className="ml-2 hidden text-sm font-normal text-[var(--muted)] sm:inline">
            {t.hero.role}
          </span>
        </a>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label={t.a11y.primaryNav}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.8125rem] tracking-wide text-[var(--concrete-light)] transition-colors hover:text-[var(--cream)]"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="flex items-center rounded-sm border border-[var(--border)] p-0.5 text-xs"
            role="group"
            aria-label={t.a11y.language}
          >
            {(["en", "fr"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                className={`px-2.5 py-1.5 tracking-wider uppercase transition-colors ${
                  locale === code
                    ? "bg-[var(--copper)] font-semibold text-[var(--ink)]"
                    : "text-[var(--concrete-light)] hover:text-[var(--cream)]"
                }`}
                aria-pressed={locale === code}
              >
                {code}
              </button>
            ))}
          </div>

          <a
            href={siteConfig.cvPath}
            download
            className="hidden rounded-sm bg-[var(--copper)] px-3.5 py-2 text-[0.8125rem] font-semibold text-[var(--ink)] transition-colors hover:bg-[var(--copper-bright)] sm:inline-flex"
          >
            {t.nav.downloadCv}
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-[var(--cream)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{t.a11y.menu}</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-transform ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-full bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-transform ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-[var(--border)] bg-[var(--navy-deep)] px-5 py-6 lg:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label={t.a11y.mobileNav}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base text-[var(--cream)]"
                onClick={() => setOpen(false)}
              >
                {t.nav[link.key]}
              </a>
            ))}
            <a
              href={siteConfig.cvPath}
              download
              className="mt-2 inline-flex w-fit rounded-sm bg-[var(--copper)] px-4 py-2.5 text-sm font-semibold text-[var(--ink)]"
              onClick={() => setOpen(false)}
            >
              {t.nav.downloadCv}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

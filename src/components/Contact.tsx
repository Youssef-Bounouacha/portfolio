"use client";

import { siteConfig } from "@/content/site";
import { useLocale } from "@/context/locale";
import { FadeIn } from "@/components/motion";

export function Contact() {
  const { t } = useLocale();

  return (
    <section
      id="contact"
      className="relative overflow-hidden section-pad bg-[var(--ink)]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(248,136,56,0.12),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl tracking-tight text-[var(--cream)] sm:text-4xl md:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-[var(--muted)]">
            {t.contact.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="inline-flex items-center justify-center rounded-sm bg-[var(--copper)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition-colors hover:bg-[var(--copper-bright)]"
            >
              {t.contact.email}
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center rounded-sm border border-white/20 px-5 py-3 text-sm font-medium text-[var(--cream)] transition-colors hover:border-[var(--copper)]/50 hover:bg-white/5"
            >
              {t.contact.phone}
            </a>
            <a
              href={siteConfig.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-white/20 px-5 py-3 text-sm font-medium text-[var(--cream)] transition-colors hover:border-[var(--copper)]/50 hover:bg-white/5"
            >
              {t.contact.linkedIn}
            </a>
            <a
              href={siteConfig.cvPath}
              download
              className="inline-flex items-center justify-center rounded-sm border border-white/20 px-5 py-3 text-sm font-medium text-[var(--cream)] transition-colors hover:border-[var(--copper)]/50 hover:bg-white/5"
            >
              {t.contact.downloadCv}
            </a>
          </div>
          <p className="mt-5 text-sm text-[var(--muted)]">
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="transition-colors hover:text-[var(--copper)]"
            >
              {siteConfig.contactEmail}
            </a>
            <span className="mx-2 text-[var(--concrete)]">·</span>
            <a
              href={`tel:${siteConfig.phone}`}
              className="transition-colors hover:text-[var(--copper)]"
            >
              {siteConfig.phone}
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

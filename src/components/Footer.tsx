"use client";

import { siteConfig } from "@/content/site";
import { useLocale } from "@/context/locale";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--ink)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg text-[var(--cream)]">
            {t.footer.line}
          </p>
          <p className="mt-2 max-w-md text-xs leading-relaxed text-[var(--muted)]">
            {t.footer.disclaimer}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-[var(--concrete-light)] sm:items-end">
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="transition-colors hover:text-[var(--copper)]"
          >
            {siteConfig.contactEmail}
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="transition-colors hover:text-[var(--copper)]"
          >
            {siteConfig.phone}
          </a>
          <a
            href={siteConfig.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--copper)]"
          >
            {t.contact.linkedIn}
          </a>
          <a
            href={siteConfig.cvPath}
            download
            className="transition-colors hover:text-[var(--copper)]"
          >
            {t.footer.cv}
          </a>
          <p className="mt-2 text-xs text-[var(--concrete)]">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

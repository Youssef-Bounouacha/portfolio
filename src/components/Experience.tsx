"use client";

import { siteConfig } from "@/content/site";
import { useLocale } from "@/context/locale";
import { FadeIn } from "@/components/motion";

export function Experience() {
  const { t, locale } = useLocale();

  return (
    <section
      id="experience"
      className="section-pad border-y border-[var(--border)] bg-[var(--surface)]"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <p className="eyebrow">{t.experience.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--cream)] sm:text-4xl">
            {t.experience.title}
          </h2>
          <p className="mt-3 max-w-xl text-sm text-[var(--muted)]">
            {t.experience.note}{" "}
            <a
              href={siteConfig.cvPath}
              download
              className="font-medium text-[var(--copper)] transition-colors hover:text-[var(--copper-bright)]"
            >
              {t.experience.viewCv}
            </a>
          </p>
        </FadeIn>

        <ol className="mt-10 max-w-2xl space-y-0">
          {siteConfig.experience.map((job, i) => (
            <li key={`${job.company}-${job.period.en}`}>
              <FadeIn delay={i * 0.06}>
                <div className="flex flex-col gap-1 border-t border-[var(--border)] py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <div>
                    <p className="font-display text-lg text-[var(--cream)]">
                      {job.company}
                    </p>
                    <p className="mt-1 text-sm text-[var(--concrete-light)]">
                      {job.role[locale]}
                    </p>
                  </div>
                  <p className="text-sm tracking-wide text-[var(--muted)] tabular-nums">
                    {job.period[locale]}
                  </p>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

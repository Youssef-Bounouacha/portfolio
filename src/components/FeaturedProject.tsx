"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { screenshotsMeta } from "@/content/copy";
import { useLocale } from "@/context/locale";
import { FadeIn } from "@/components/motion";
import { OfficialLogo } from "@/components/OfficialLogo";
import { ScreenshotFrame } from "@/components/ScreenshotFrame";

export function FeaturedProject() {
  const { t, locale } = useLocale();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const reduced = Boolean(useReducedMotion());
  const p = t.project;

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") {
        setLightbox((i) => (i === null ? i : (i + 1) % screenshotsMeta.length));
      }
      if (e.key === "ArrowLeft") {
        setLightbox((i) =>
          i === null
            ? i
            : (i - 1 + screenshotsMeta.length) % screenshotsMeta.length,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox]);

  const activeShot = lightbox !== null ? screenshotsMeta[lightbox] : null;
  const activeMeta = activeShot ? activeShot[locale] : null;

  return (
    <section id="project" className="section-pad bg-[var(--ink)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <p className="eyebrow">{p.eyebrow}</p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="w-[min(100%,18rem)] sm:w-[min(100%,22rem)]">
              <OfficialLogo width={360} />
            </div>
            <p className="text-xs tracking-[0.14em] text-[var(--concrete)] uppercase sm:pb-2">
              {p.badge}
            </p>
          </div>
          <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-[var(--muted)] sm:text-base">
            {p.pitch}
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-14">
          <FadeIn delay={0.05}>
            <h3 className="font-display text-xl text-[var(--cream)]">
              {p.problemTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              {p.problem}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h3 className="font-display text-xl text-[var(--copper)]">
              {p.solutionTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              {p.solution}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.08}>
          <p className="mt-14 font-display text-xs tracking-[0.16em] text-[var(--copper)] uppercase">
            {p.scopeTitle}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {p.scope.map((item) => (
              <li
                key={item}
                className="border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-sm text-[var(--concrete-light)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-14 font-display text-xs tracking-[0.16em] text-[var(--copper)] uppercase">
            {p.engineeringTitle}
          </p>
          <ul className="mt-4 max-w-3xl space-y-3">
            {p.engineering.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-[var(--concrete-light)]"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--copper)]"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <div className="mt-16" id="screenshots">
          <FadeIn>
            <h3 className="font-display text-2xl tracking-tight text-[var(--cream)] sm:text-3xl">
              {p.screenshotsTitle}
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
              {p.screenshotsNote}
            </p>
          </FadeIn>

          <div className="mt-12 space-y-16 sm:space-y-20">
            {screenshotsMeta.map((shot, index) => {
              const meta = shot[locale];
              const imageLeft = index % 2 === 0;

              return (
                <FadeIn key={shot.id} delay={0.04}>
                  <article
                    className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                      imageLeft ? "" : "lg:[&>*:first-child]:order-2"
                    }`}
                  >
                    <motion.button
                      type="button"
                      onClick={() => setLightbox(index)}
                      className="group relative w-full overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--navy-deep)] text-left shadow-[0_24px_60px_-32px_rgba(0,0,0,0.85)] transition-colors hover:border-[var(--copper)]/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--copper)]"
                      whileHover={
                        reduced
                          ? undefined
                          : { y: -4, transition: { duration: 0.2 } }
                      }
                    >
                      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                        <span className="ml-2 truncate text-[10px] tracking-wide text-white/35">
                          {meta.title}
                        </span>
                      </div>
                      <div className="relative aspect-[2/1]">
                        <ScreenshotFrame
                          file={shot.file}
                          alt={meta.title}
                          label={p.placeholder}
                          bare
                          priority={index === 0}
                          quality={100}
                          sizes="(max-width: 1024px) 100vw, 640px"
                        />
                      </div>
                    </motion.button>

                    <div
                      className={
                        imageLeft ? "lg:pl-2" : "lg:pr-2 lg:text-right"
                      }
                    >
                      <p className="font-display text-xs tracking-[0.22em] text-[var(--copper)] uppercase">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h4 className="mt-3 font-display text-2xl tracking-tight text-[var(--cream)] sm:text-3xl">
                        {meta.title}
                      </h4>
                      <p
                        className={`mt-3 text-[0.95rem] leading-relaxed text-[var(--muted)] ${
                          imageLeft ? "max-w-md" : "max-w-md lg:ml-auto"
                        }`}
                      >
                        {meta.caption}
                      </p>
                      <button
                        type="button"
                        onClick={() => setLightbox(index)}
                        className="mt-5 inline-flex text-sm font-medium text-[var(--copper)] transition-colors hover:text-[var(--copper-bright)]"
                      >
                        {p.viewLarger}
                      </button>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>

      {lightbox !== null && activeShot && activeMeta && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeMeta.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <div>
                <p className="font-display text-lg text-[var(--cream)]">
                  {activeMeta.title}
                </p>
                <p className="text-sm text-[var(--muted)]">
                  {activeMeta.caption}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setLightbox((i) =>
                      i === null
                        ? i
                        : (i - 1 + screenshotsMeta.length) %
                          screenshotsMeta.length,
                    )
                  }
                  className="rounded-sm border border-white/20 px-3 py-1.5 text-sm text-[var(--cream)] hover:bg-white/10"
                  aria-label="Previous"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setLightbox((i) =>
                      i === null ? i : (i + 1) % screenshotsMeta.length,
                    )
                  }
                  className="rounded-sm border border-white/20 px-3 py-1.5 text-sm text-[var(--cream)] hover:bg-white/10"
                  aria-label="Next"
                >
                  →
                </button>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="rounded-sm border border-white/20 px-3 py-1.5 text-sm text-[var(--cream)] hover:bg-white/10"
                >
                  {p.close}
                </button>
              </div>
            </div>
            <ScreenshotFrame
              file={activeShot.file}
              alt={activeMeta.title}
              label={p.placeholder}
              aspect="aspect-[2/1]"
              quality={100}
              sizes="100vw"
              className="w-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}

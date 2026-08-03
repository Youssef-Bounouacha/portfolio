"use client";

import Image from "next/image";
import { siteConfig } from "@/content/site";
import { useLocale } from "@/context/locale";
import { HeroEntrance } from "@/components/motion";

export function Hero() {
  const { t } = useLocale();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-[var(--ink)]"
    >
      <div className="absolute inset-0">
        <Image
          src="/hero-jobsite.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(160deg,rgba(4,7,10,0.92)_0%,rgba(7,11,16,0.88)_50%,rgba(16,40,56,0.75)_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(248,136,56,0.14),transparent_50%)]"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-5 pt-28 pb-16 sm:px-8 lg:grid-cols-[minmax(220px,300px)_1fr] lg:gap-14 lg:pt-32">
        <HeroEntrance>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[260px] overflow-hidden rounded-sm border border-white/15 bg-[var(--surface)] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.75)] sm:max-w-[280px] lg:mx-0 lg:max-w-none">
            <Image
              src="/portrait.jpg"
              alt={siteConfig.name}
              fill
              priority
              className="object-cover object-[center_18%]"
              sizes="(max-width: 1024px) 280px, 300px"
            />
            <div
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
              aria-hidden
            />
          </div>
        </HeroEntrance>

        <div className="min-w-0 text-center lg:text-left">
          <HeroEntrance delay={0.08}>
            <p className="font-display text-xs tracking-[0.22em] text-[var(--copper)] uppercase">
              {t.hero.role}
            </p>
          </HeroEntrance>

          <HeroEntrance delay={0.14}>
            <h1 className="mt-4 font-display text-5xl leading-none font-semibold tracking-[-0.03em] text-[var(--cream)] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              {t.hero.name}
            </h1>
          </HeroEntrance>

          <HeroEntrance delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--concrete-light)] sm:text-xl lg:mx-0 mx-auto">
              {t.hero.support}
            </p>
          </HeroEntrance>

          <HeroEntrance delay={0.28}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#project"
                className="inline-flex items-center justify-center rounded-sm bg-[var(--copper)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition-colors hover:bg-[var(--copper-bright)]"
              >
                {t.hero.ctaProject}
              </a>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center justify-center rounded-sm border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-[var(--cream)] backdrop-blur-sm transition-colors hover:border-[var(--copper)]/50 hover:bg-white/10"
              >
                {t.hero.ctaContact}
              </a>
              <a
                href={siteConfig.cvPath}
                download
                className="inline-flex items-center justify-center rounded-sm border border-transparent px-5 py-3 text-sm font-medium text-[var(--concrete-light)] transition-colors hover:text-[var(--cream)]"
              >
                {t.hero.ctaCv}
              </a>
            </div>
          </HeroEntrance>
        </div>
      </div>
    </section>
  );
}

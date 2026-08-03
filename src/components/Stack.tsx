"use client";

import { motion, useReducedMotion } from "framer-motion";
import { techStack } from "@/content/stack";
import { useLocale } from "@/context/locale";
import { FadeIn } from "@/components/motion";
import { TechIcon } from "@/components/TechIcon";

export function Stack() {
  const { t } = useLocale();
  const reduced = Boolean(useReducedMotion());

  return (
    <section id="stack" className="section-pad bg-[var(--charcoal)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <p className="eyebrow">{t.stack.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--cream)] sm:text-4xl">
            {t.stack.title}
          </h2>
        </FadeIn>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
          {techStack.map((tech, i) => (
            <li key={tech.id}>
              <FadeIn delay={i * 0.03} y={12}>
                <motion.div
                  className="group flex h-full cursor-default flex-col items-center justify-center gap-3 border border-[var(--border)] bg-[var(--surface)] px-4 py-5 text-center transition-colors hover:border-[var(--copper)]/45 hover:bg-[var(--surface-elevated)]"
                  whileHover={
                    reduced
                      ? undefined
                      : { y: -6, scale: 1.04, transition: { duration: 0.22 } }
                  }
                  whileTap={reduced ? undefined : { scale: 0.98 }}
                >
                  <span className="inline-flex transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6">
                    <TechIcon
                      id={tech.id}
                      title={tech.label}
                      className="h-8 w-8 sm:h-9 sm:w-9"
                    />
                  </span>
                  <span className="text-sm tracking-wide text-[var(--concrete-light)] transition-colors group-hover:text-[var(--cream)]">
                    {tech.label}
                  </span>
                </motion.div>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { skillCategories, type SkillCategoryId } from "@/content/skills";
import { useLocale } from "@/context/locale";
import { FadeIn } from "@/components/motion";

export function AboutMe() {
  const { t } = useLocale();
  const reduced = Boolean(useReducedMotion());
  const [active, setActive] = useState<SkillCategoryId>("frontend");
  const [paused, setPaused] = useState(false);

  const activeCategory =
    skillCategories.find((c) => c.id === active) ?? skillCategories[0];

  useEffect(() => {
    if (reduced || paused) return;
    const id = window.setInterval(() => {
      setActive((current) => {
        const index = skillCategories.findIndex((c) => c.id === current);
        const next = skillCategories[(index + 1) % skillCategories.length];
        return next.id;
      });
    }, 4200);
    return () => window.clearInterval(id);
  }, [paused, reduced]);

  return (
    <section id="about" className="section-pad bg-[var(--charcoal)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-14">
          <FadeIn>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--cream)] sm:text-4xl">
              {t.about.title}
            </h2>
            <div className="mt-6 space-y-4">
              {t.about.body.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="text-[0.95rem] leading-relaxed text-[var(--muted)]"
                >
                  {para}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div
              className="rounded-sm border border-[var(--border)] bg-[var(--surface)]/80 p-5 sm:p-6"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocusCapture={() => setPaused(true)}
              onBlurCapture={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setPaused(false);
                }
              }}
            >
              <div className="flex flex-wrap items-end justify-between gap-3">
                <p className="font-display text-xs tracking-[0.16em] text-[var(--copper)] uppercase">
                  {t.about.skillsTitle}
                </p>
                <p className="text-xs text-[var(--muted)]">
                  {t.about.skillsHint}
                </p>
              </div>

              <div
                className="mt-5 flex flex-wrap gap-x-1 gap-y-2 border-b border-[var(--border)] pb-1"
                role="tablist"
                aria-label={t.about.skillsTitle}
              >
                {skillCategories.map((category) => {
                  const selected = category.id === active;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActive(category.id)}
                      className={`relative px-2.5 py-2 font-display text-[0.7rem] tracking-[0.14em] uppercase transition-colors sm:text-xs ${
                        selected
                          ? "text-[var(--copper)]"
                          : "text-[var(--muted)] hover:text-[var(--concrete-light)]"
                      }`}
                    >
                      {t.about.skillCategories[category.id]}
                      {selected && (
                        <motion.span
                          layoutId={reduced ? undefined : "skills-tab"}
                          className="absolute inset-x-1 -bottom-1 h-0.5 rounded-full bg-[var(--copper)]"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="relative mt-5 min-h-[10rem]" role="tabpanel">
                <p className="mb-3 font-display text-sm text-[var(--cream)]">
                  {t.about.skillCategories[activeCategory.id]}
                </p>
                <AnimatePresence mode="wait">
                  <motion.ul
                    key={activeCategory.id}
                    className="grid grid-cols-2 gap-2.5 sm:grid-cols-3"
                    initial={reduced ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduced ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {activeCategory.items.map((skill, index) => (
                      <motion.li
                        key={skill}
                        initial={
                          reduced ? false : { opacity: 0, scale: 0.92, y: 10 }
                        }
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                          delay: reduced ? 0 : 0.035 * index,
                          duration: 0.28,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={
                          reduced
                            ? undefined
                            : {
                                y: -3,
                                scale: 1.03,
                                transition: { duration: 0.18 },
                              }
                        }
                        className="flex cursor-default items-center gap-2.5 rounded-sm border border-[var(--border)] bg-[linear-gradient(145deg,var(--navy-mid),var(--navy-deep))] px-3 py-3 text-sm text-[var(--cream)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-[var(--copper)]/55"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--copper)]"
                          aria-hidden
                        />
                        <span className="leading-snug">{skill}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </div>

              <div className="mt-5 flex gap-1.5" aria-hidden>
                {skillCategories.map((category) => (
                  <span
                    key={category.id}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      category.id === active
                        ? "bg-[var(--copper)]"
                        : "bg-[var(--border-strong)]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

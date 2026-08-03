"use client";

import { useReducedMotion, motion } from "framer-motion";
import type { ReactNode } from "react";

const easeOut = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

function useReduced() {
  return Boolean(useReducedMotion());
}

export function FadeIn({
  children,
  delay = 0,
  y = 18,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduced = useReduced();
  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...easeOut, delay }}
    >
      {children}
    </motion.div>
  );
}

export function HeroEntrance({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReduced();
  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...easeOut, delay }}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReduced();
  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ ...easeOut, delay: 0.35, duration: 0.9 }}
    >
      {children}
    </motion.div>
  );
}

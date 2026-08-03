"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import { screenshotPath } from "@/lib/screenshots";

type Props = {
  file: string;
  alt: string;
  label?: string;
  className?: string;
  priority?: boolean;
  aspect?: string;
  bare?: boolean;
  quality?: number;
  sizes?: string;
};

const cache = new Map<string, boolean>();
const listeners = new Map<string, Set<() => void>>();

function subscribe(file: string, onChange: () => void) {
  let set = listeners.get(file);
  if (!set) {
    set = new Set();
    listeners.set(file, set);
  }
  set.add(onChange);

  if (!cache.has(file)) {
    const img = new window.Image();
    img.onload = () => {
      cache.set(file, true);
      listeners.get(file)?.forEach((l) => l());
    };
    img.onerror = () => {
      cache.set(file, false);
      listeners.get(file)?.forEach((l) => l());
    };
    img.src = screenshotPath(file);
  }

  return () => {
    set?.delete(onChange);
  };
}

function getSnapshot(file: string): boolean | null {
  return cache.has(file) ? (cache.get(file) as boolean) : null;
}

export function ScreenshotFrame({
  file,
  alt,
  label,
  className = "",
  priority = false,
  aspect = "aspect-[2/1]",
  bare = false,
  quality = 95,
  sizes = "(max-width: 768px) 100vw, 1400px",
}: Props) {
  const exists = useSyncExternalStore(
    (onChange) => subscribe(file, onChange),
    () => getSnapshot(file),
    () => null,
  );

  return (
    <div
      className={
        bare
          ? `relative h-full w-full overflow-hidden bg-[var(--navy-deep)] ${className}`
          : `relative overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--navy-deep)] ${aspect} ${className}`
      }
    >
      {exists === true ? (
        <Image
          src={screenshotPath(file)}
          alt={alt}
          fill
          quality={quality}
          className="object-contain object-center"
          sizes={sizes}
          priority={priority}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed border-[var(--border-strong)] bg-[linear-gradient(135deg,var(--surface)_0%,var(--surface-elevated)_100%)] p-6 text-center">
          <span className="font-display text-xs tracking-[0.2em] text-[var(--copper)] uppercase">
            {file}
          </span>
          <span className="max-w-xs text-sm text-[var(--muted)]">
            {label ?? alt}
          </span>
          {exists === null && (
            <span className="sr-only">Checking for screenshot</span>
          )}
        </div>
      )}
    </div>
  );
}

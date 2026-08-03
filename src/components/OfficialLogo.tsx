"use client";

import Image from "next/image";
import { siteConfig } from "@/content/site";

type Props = {
  className?: string;
  width?: number;
  priority?: boolean;
};

export function OfficialLogo({
  className = "",
  width = 360,
  priority = false,
}: Props) {
  const height = Math.round(width * (247 / 939));

  return (
    <Image
      src="/logo.png"
      alt={siteConfig.productName}
      width={width}
      height={height}
      priority={priority}
      className={`h-auto w-full ${className}`}
    />
  );
}

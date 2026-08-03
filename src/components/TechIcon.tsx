import type { SVGProps } from "react";
import {
  siGit,
  siGithub,
  siGitlab,
  siJavascript,
  siNextdotjs,
  siOpenapiinitiative,
  siReact,
  siRedux,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siZod,
} from "simple-icons";
import type { TechId } from "@/content/stack";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function BrandIcon({
  path,
  hex,
  title,
  className,
  ...rest
}: IconProps & { path: string; hex: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      className={className}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path fill={`#${hex}`} d={path} />
    </svg>
  );
}

function ZustandIcon({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/tech/zustand.svg"
      alt={title ?? "Zustand"}
      className={className}
      width={36}
      height={36}
      decoding="async"
    />
  );
}

const icons: Record<
  TechId,
  { path?: string; hex?: string; Custom?: typeof ZustandIcon }
> = {
  react: { path: siReact.path, hex: siReact.hex },
  nextjs: { path: siNextdotjs.path, hex: "E8EEF3" },
  typescript: { path: siTypescript.path, hex: siTypescript.hex },
  javascript: { path: siJavascript.path, hex: siJavascript.hex },
  tailwind: { path: siTailwindcss.path, hex: siTailwindcss.hex },
  supabase: { path: siSupabase.path, hex: siSupabase.hex },
  zustand: { Custom: ZustandIcon },
  redux: { path: siRedux.path, hex: siRedux.hex },
  zod: { path: siZod.path, hex: siZod.hex },
  rest: { path: siOpenapiinitiative.path, hex: siOpenapiinitiative.hex },
  git: { path: siGit.path, hex: siGit.hex },
  github: { path: siGithub.path, hex: "E8EEF3" },
  gitlab: { path: siGitlab.path, hex: siGitlab.hex },
};

export function TechIcon({
  id,
  className = "h-7 w-7",
  title,
}: {
  id: TechId;
  className?: string;
  title?: string;
}) {
  const icon = icons[id];
  if (icon.Custom) {
    const CustomIcon = icon.Custom;
    return <CustomIcon className={className} title={title} />;
  }
  return (
    <BrandIcon
      path={icon.path!}
      hex={icon.hex!}
      className={className}
      title={title}
    />
  );
}

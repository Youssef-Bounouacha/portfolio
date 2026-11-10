import type { SVGProps } from "react";
import {
  siClaude,
  siCursor,
  siGit,
  siGithub,
  siGithubcopilot,
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

function GptIcon({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      className={className}
    >
      {title ? <title>{title}</title> : null}
      <path
        fill="#E8EEF3"
        d="M11.2 2.4c.3-.8 1.3-.8 1.6 0l1.5 4.1a2 2 0 0 0 1.2 1.2l4.1 1.5c.8.3.8 1.3 0 1.6l-4.1 1.5a2 2 0 0 0-1.2 1.2l-1.5 4.1c-.3.8-1.3.8-1.6 0l-1.5-4.1a2 2 0 0 0-1.2-1.2L4.4 10.8c-.8-.3-.8-1.3 0-1.6l4.1-1.5a2 2 0 0 0 1.2-1.2l1.5-4.1Z"
      />
      <path
        fill="#E8EEF3"
        d="M18.1 14.2c.2-.5.8-.5 1 0l.6 1.6c.1.3.3.5.6.6l1.6.6c.5.2.5.8 0 1l-1.6.6a1 1 0 0 0-.6.6l-.6 1.6c-.2.5-.8.5-1 0l-.6-1.6a1 1 0 0 0-.6-.6l-1.6-.6c-.5-.2-.5-.8 0-1l1.6-.6a1 1 0 0 0 .6-.6l.6-1.6Z"
      />
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
  cursor: { path: siCursor.path, hex: "E8EEF3" },
  claude: { path: siClaude.path, hex: siClaude.hex },
  copilot: { path: siGithubcopilot.path, hex: "E8EEF3" },
  gpt: { Custom: GptIcon },
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

export type TechId =
  | "react"
  | "nextjs"
  | "typescript"
  | "javascript"
  | "tailwind"
  | "supabase"
  | "zustand"
  | "redux"
  | "zod"
  | "rest"
  | "git"
  | "github"
  | "gitlab";

export const techStack: { id: TechId; label: string }[] = [
  { id: "react", label: "React" },
  { id: "nextjs", label: "Next.js" },
  { id: "typescript", label: "TypeScript" },
  { id: "javascript", label: "JavaScript" },
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "supabase", label: "Supabase" },
  { id: "zustand", label: "Zustand" },
  { id: "redux", label: "Redux" },
  { id: "zod", label: "Zod" },
  { id: "rest", label: "REST APIs" },
  { id: "git", label: "Git" },
  { id: "github", label: "GitHub" },
  { id: "gitlab", label: "GitLab" },
];

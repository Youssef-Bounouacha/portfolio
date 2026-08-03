export const skillCategoryIds = [
  "frontend",
  "state",
  "backend",
  "mobile",
  "architecture",
  "auth",
  "visualization",
  "quality",
  "tools",
  "design",
] as const;

export type SkillCategoryId = (typeof skillCategoryIds)[number];

export const skillCategories: {
  id: SkillCategoryId;
  items: string[];
}[] = [
  {
    id: "frontend",
    items: [
      "React",
      "Next.js (App Router)",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Shadcn UI",
      "Material UI (MUI)",
    ],
  },
  {
    id: "state",
    items: ["Zustand", "Redux", "Context API", "React Hook Form", "Zod"],
  },
  {
    id: "backend",
    items: ["Laravel (PHP)", "REST APIs", "MySQL", "Supabase", "Firebase"],
  },
  {
    id: "mobile",
    items: ["React Native", "Flutter", "Dart"],
  },
  {
    id: "architecture",
    items: [
      "Frontend Architecture",
      "Design Systems",
      "Reusable Component Design",
      "Performance Optimization",
      "SSR / CSR",
    ],
  },
  {
    id: "auth",
    items: ["Authentication", "Role-Based Access Control (RBAC)"],
  },
  {
    id: "visualization",
    items: ["React Flow"],
  },
  {
    id: "quality",
    items: [
      "Jest",
      "ESLint",
      "Prettier",
      "Husky",
      "Linting & Formatting Automation",
    ],
  },
  {
    id: "tools",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Jira",
      "Trello",
      "Bitbucket",
      "Slack",
      "Postman",
      "XAMPP",
    ],
  },
  {
    id: "design",
    items: ["Figma", "Adobe XD"],
  },
];

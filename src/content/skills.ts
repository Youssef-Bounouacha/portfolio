export const skillCategoryIds = [
  "frontend",
  "state",
  "backend",
  "ai",
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
    items: [
      "Zustand",
      "Redux",
      "TanStack Query",
      "Context API",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    id: "backend",
    items: [
      "Node.js",
      "Laravel (PHP)",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "Row Level Security",
      "Supabase",
      "Firebase",
      "Java/Spring Boot",
    ],
  },
  {
    id: "ai",
    items: [
      "Claude API",
      "LLM-assisted schema mapping",
      "Prompt-based data mapping",
    ],
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
      "Module Federation",
    ],
  },
  {
    id: "auth",
    items: ["Authentication", "Role-Based Access Control (RBAC)"],
  },
  {
    id: "visualization",
    items: ["React Flow", "D3"],
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
      "GitHub Copilot",
      "Cursor",
      "Claude",
      "GPT",
      "Prompt engineering",
      "GitLab",
      "Jira",
      "Agile/Scrum",
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

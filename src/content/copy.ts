import { siteConfig } from "./site";

export type Locale = "en" | "fr";

export const screenshotsMeta = [
  {
    id: "01-dashboard",
    file: "01-dashboard.png",
    en: {
      title: "Operations overview",
      caption: "Company KPIs, cash position, and outstanding pay",
    },
    fr: {
      title: "Vue d’ensemble",
      caption: "KPI entreprise, position de caisse et reste à payer",
    },
  },
  {
    id: "02-projects",
    file: "02-projects.png",
    en: {
      title: "Projects",
      caption: "Create and edit projects with quotes and financial summary",
    },
    fr: {
      title: "Projets",
      caption: "Créer et éditer des projets avec devis et résumé financier",
    },
  },
  {
    id: "04-workforce-pointage",
    file: "04-workforce-pointage.png",
    en: {
      title: "Workforce",
      caption: "Attendance, earned pay, and remaining balances",
    },
    fr: {
      title: "Main-d’œuvre",
      caption: "Présence, gains et soldes restants",
    },
  },
  {
    id: "06-suppliers",
    file: "06-suppliers.png",
    en: {
      title: "Partners & supply",
      caption: "Suppliers, furniture, advances, and project links",
    },
    fr: {
      title: "Partenaires & fournitures",
      caption: "Fournisseurs, bons, acomptes et liens projets",
    },
  },
  {
    id: "09-cash-balance",
    file: "09-cash-balance.png",
    en: {
      title: "Financial overview",
      caption: "Company cash balance from advances minus cash out",
    },
    fr: {
      title: "Vue financière",
      caption: "Solde de caisse : acomptes moins sorties",
    },
  },
  {
    id: "12-company-settings",
    file: "12-company-settings.png",
    en: {
      title: "Company settings",
      caption:
        "Branding and company profile",
    },
    fr: {
      title: "Paramètres entreprise",
      caption:
        "Branding et profil entreprise",
    },
  },
] as const;

export const copy = {
  en: {
    nav: {
      about: "About",
      project: "Project",
      experience: "Experience",
      stack: "Stack",
      contact: "Contact",
      downloadCv: "Download CV",
    },
    hero: {
      name: siteConfig.name,
      role: "Frontend Engineer",
      support: `React, Next.js, and TypeScript, with AI integration — ${siteConfig.yearsExperience} years building production web applications.`,
      ctaProject: "View featured project",
      ctaContact: "Contact me",
      ctaCv: "Download CV",
    },
    about: {
      eyebrow: "About me",
      title: "Full-stack with product instincts",
      body: [
        `Frontend Engineer with ${siteConfig.yearsExperience} years building production React and Next.js applications for industrial operations, insurance, and SaaS. Led frontend architecture and a team of 6 developers on a factory-operations platform, shipped a multi-tenant SaaS end to end, and integrated LLM APIs into business workflows.`,
        "Outside of work I keep building products that solve real problems.",
      ],
      skillsTitle: "Technical skills",
      skillsHint: "Select a category, then explore the tools",
      skillCategories: {
        frontend: "Frontend",
        state: "State & Forms",
        backend: "Backend",
        ai: "AI integration",
        mobile: "Mobile",
        architecture: "Architecture",
        auth: "Auth",
        visualization: "Visualization",
        quality: "Quality",
        tools: "Tools",
        design: "Design",
      },
    },
    project: {
      eyebrow: "Featured project",
      title: siteConfig.productName,
      badge: "Production SaaS · Actively evolving",
      pitch:
        "A multi-tenant construction operations product I designed, shipped, and maintain — live with 2 paying clients. Live walkthrough available on request.",
      problemTitle: "The challenge",
      problem:
        "Construction teams often run day-to-day work across spreadsheets and chat. Owners need one place for projects, people, partners, and money — without generic tools that ignore how sites actually run.",
      solutionTitle: "What I shipped",
      solution:
        "A company-scoped SaaS where one record replaced a separate spreadsheet per topic, so cash flow and what is still owed stay visible without recalculating across files. Invoices and financial statements download from those live figures. Trilingual UI (EN / FR / AR, including RTL), role-based permissions, and PostgreSQL row-level security.",
      scopeTitle: "Product scope",
      scope: [
        "Multi-tenant company workspaces",
        "Projects & site operations",
        "Workforce tracking",
        "Partners, supply & logistics",
        "Vehicles & transport",
        "Bank, cash & financial overview",
        "EN / FR / AR",
        "Role-based permissions",
      ],
      engineeringTitle: "Technical highlights",
      engineering: [
        "Multi-tenant SaaS: company-scoped data access so one workspace never leaks into another",
        "Authentication plus role- and permission-based authorization (owner vs operational users)",
        "Claude API Excel/CSV import maps each client’s spreadsheet columns to the data model, with mapping confirmation and a preview before anything is saved",
        "Invoices and financial statements download from live figures, replacing hand-filled Excel and Word",
        "Dense operational UIs — complex tables, filtering, dialogs, and financial workflows (quotes, pay, cash, remaining balances)",
        "Reusable component architecture so projects, workforce, partners, and finance stay consistent",
        "Responsive application architecture that holds up from desktop to on-site mobile use",
        "EN / FR / AR internationalization, including RTL layout for Arabic — not a surface-level language toggle",
        "Production deployment and ongoing maintenance, live with 2 paying clients",
      ],
      screenshotsTitle: "Product UI",
      screenshotsNote: `Sanitized screenshots (fake ${siteConfig.demoCompany} data only).`,
      placeholder: "Screenshot coming soon",
      close: "Close",
      viewLarger: "View larger →",
    },
    experience: {
      eyebrow: "Experience",
      title: "Where I’ve worked",
      note: "Want more detail on roles and impact? View my CV for the full experience write-up.",
      viewCv: "Download CV",
    },
    stack: {
      eyebrow: "Tech stack",
      title: "Tools I use to ship",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s talk",
      body: "Open to frontend engineering roles where ownership, craft, and shipping matter. Glad to walk through my work and experience in more detail.",
      email: "Email me",
      linkedIn: "LinkedIn",
      phone: "Call me",
      downloadCv: "Download CV",
    },
    footer: {
      line: `${siteConfig.name} · Frontend Engineer`,
      disclaimer: "Personal portfolio — Frontend Engineer.",
      copyright: `© ${new Date().getFullYear()} ${siteConfig.name}`,
      cv: "CV",
    },
    a11y: {
      primaryNav: "Primary",
      mobileNav: "Mobile",
      language: "Language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      menu: "Menu",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      project: "Projet",
      experience: "Expérience",
      stack: "Stack",
      contact: "Contact",
      downloadCv: "Télécharger le CV",
    },
    hero: {
      name: siteConfig.name,
      role: "Ingénieur frontend",
      support: `React, Next.js et TypeScript, avec intégration IA — ${siteConfig.yearsExperience} ans à construire des applications web en production.`,
      ctaProject: "Voir le projet phare",
      ctaContact: "Me contacter",
      ctaCv: "Télécharger le CV",
    },
    about: {
      eyebrow: "À propos",
      title: "Full-stack avec instinct produit",
      body: [
        `Ingénieur frontend avec ${siteConfig.yearsExperience} ans d’expérience, à construire des applications React et Next.js en production pour l’industrie, l’assurance et le SaaS. Lead de l’architecture frontend et d’une équipe de 6 développeurs sur une plateforme d’opérations d’usine, SaaS multi-tenant livré de bout en bout, et intégration d’API LLM dans les workflows métier.`,
        "En dehors du travail, je continue à construire des produits qui répondent à de vrais besoins.",
      ],
      skillsTitle: "Compétences techniques",
      skillsHint: "Choisis une catégorie, puis explore les outils",
      skillCategories: {
        frontend: "Frontend",
        state: "State & formulaires",
        backend: "Backend",
        ai: "Intégration IA",
        mobile: "Mobile",
        architecture: "Architecture",
        auth: "Auth",
        visualization: "Visualisation",
        quality: "Qualité",
        tools: "Outils",
        design: "Design",
      },
    },
    project: {
      eyebrow: "Projet phare",
      title: siteConfig.productName,
      badge: "SaaS en production · En évolution",
      pitch:
        "Un produit multi-tenant d’ops construction que j’ai conçu, livré et que je maintiens — en production chez 2 clients payants. Démo live disponible sur demande.",
      problemTitle: "Le défi",
      problem:
        "Les équipes BTP font souvent tourner le quotidien via tableurs et chat. Les dirigeants ont besoin d’un lieu pour projets, gens, partenaires et argent — sans outils génériques qui ignorent le chantier réel.",
      solutionTitle: "Ce que j’ai livré",
      solution:
        "Un SaaS scopé par entreprise : un enregistrement remplace un tableur par sujet, pour que la trésorerie et le reste dû restent visibles sans recalculer d’un fichier à l’autre. Factures et états financiers se téléchargent depuis ces chiffres à jour. UI trilingue (EN / FR / AR, RTL compris), permissions par rôle, et row-level security PostgreSQL.",
      scopeTitle: "Périmètre produit",
      scope: [
        "Espaces entreprise multi-tenant",
        "Projets & ops chantier",
        "Suivi main-d’œuvre",
        "Partenaires, fournitures & logistique",
        "Véhicules & transport",
        "Banque, caisse & vue financière",
        "EN / FR / AR",
        "Permissions par rôle",
      ],
      engineeringTitle: "Points techniques",
      engineering: [
        "SaaS multi-tenant : accès aux données scopé par entreprise, sans fuite d’un workspace vers un autre",
        "Authentification et autorisation par rôles / permissions (owner vs utilisateurs opérationnels)",
        "Import Excel/CSV via l’API Claude : mapping des colonnes de chaque client vers le modèle de données, avec confirmation du mapping et un aperçu avant enregistrement",
        "Factures et états financiers téléchargés depuis les chiffres à jour, à la place de fichiers Excel et Word remplis à la main",
        "UI opérationnelle dense — tableaux complexes, filtres, dialogs et workflows financiers (devis, paie, caisse, soldes)",
        "Architecture de composants réutilisables pour garder projets, main-d’œuvre, partenaires et finance cohérents",
        "Architecture responsive qui tient du desktop au mobile sur chantier",
        "Internationalisation EN / FR / AR, dont le layout RTL pour l’arabe — pas un simple switch de langue",
        "Déploiement en production et maintenance continue, chez 2 clients payants",
      ],
      screenshotsTitle: "UI produit",
      screenshotsNote: `Captures anonymisées (données fictives ${siteConfig.demoCompany} uniquement).`,
      placeholder: "Capture à venir",
      close: "Fermer",
      viewLarger: "Agrandir →",
    },
    experience: {
      eyebrow: "Expérience",
      title: "Parcours",
      note: "Plus de détail sur les rôles et l’impact ? Consultez mon CV pour le parcours complet.",
      viewCv: "Télécharger le CV",
    },
    stack: {
      eyebrow: "Stack",
      title: "Outils avec lesquels je livre",
    },
    contact: {
      eyebrow: "Contact",
      title: "Discutons",
      body: "Ouvert aux rôles d’ingénieur frontend où l’ownership, le craft et le shipping comptent. Avec plaisir pour détailler mon travail et mon parcours.",
      email: "M’écrire",
      linkedIn: "LinkedIn",
      phone: "M’appeler",
      downloadCv: "Télécharger le CV",
    },
    footer: {
      line: `${siteConfig.name} · Ingénieur frontend`,
      disclaimer: "Portfolio personnel — Ingénieur frontend.",
      copyright: `© ${new Date().getFullYear()} ${siteConfig.name}`,
      cv: "CV",
    },
    a11y: {
      primaryNav: "Navigation principale",
      mobileNav: "Navigation mobile",
      language: "Langue",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      menu: "Menu",
    },
  },
} as const;

export type Copy = (typeof copy)[Locale];

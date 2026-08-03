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
        "Branding and company profile — owner/admin permission UI still shipping",
    },
    fr: {
      title: "Paramètres entreprise",
      caption:
        "Branding et profil entreprise — UI permissions owner/admin encore en cours",
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
      support: `${siteConfig.yearsExperience} years building scalable React & Next.js products — clean UX, solid architecture, production delivery.`,
      ctaProject: "View featured project",
      ctaContact: "Contact me",
      ctaCv: "Download CV",
    },
    about: {
      eyebrow: "About me",
      title: "Frontend with product instincts",
      body: [
        `Frontend Engineer with ${siteConfig.yearsExperience} years of experience specializing in React, Next.js, and TypeScript. Passionate about building scalable applications, reusable component systems, and clean user experiences. I enjoy solving complex problems, improving frontend architecture, and delivering high-quality products.`,
        "Outside of work, I enjoy building personal products that solve real-world problems and continuously exploring new frontend technologies to improve my skills.",
      ],
      skillsTitle: "Technical skills",
      skillsHint: "Select a category, then explore the tools",
      skillCategories: {
        frontend: "Frontend",
        state: "State & Forms",
        backend: "Backend",
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
        "A multi-tenant construction operations product I designed and shipped end to end — used by real companies in production. The product is still evolving. Live walkthrough available on request.",
      problemTitle: "The challenge",
      problem:
        "Construction teams often run day-to-day work across spreadsheets and chat. Owners need one place for projects, people, partners, and money — without generic tools that ignore how sites actually run.",
      solutionTitle: "What I shipped",
      solution:
        "A company-scoped SaaS with bilingual UI (EN/FR), role-based access, and a production-ready interface for operational and financial workflows. Owner/admin roles and permissions are enforced today; I’m building a new in-app UI so owners can configure user access themselves (currently managed in the database while that interface ships).",
      scopeTitle: "Product scope",
      scope: [
        "Multi-tenant company workspaces",
        "Projects & site operations",
        "Workforce tracking",
        "Partners, supply & logistics",
        "Financial overview for owners",
        "Bilingual EN / FR",
        "Role-based access (UI in progress)",
      ],
      engineeringTitle: "Engineering highlights",
      engineering: [
        "End-to-end ownership: product thinking and Next.js / TypeScript implementation",
        "Multi-tenant architecture with authenticated, company-scoped data access",
        "Data-heavy UI — tables, filters, dialogs, responsive navigation",
        "Internationalization and permission-aware interfaces",
        "Shipped and maintained in production — still iterating on owner/admin permission management UX",
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
      body: "Open to frontend roles where ownership, craft, and shipping matter. Glad to walk through my work and experience in more detail.",
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
      support: `${siteConfig.yearsExperience} ans à construire des produits React & Next.js scalables — UX soignée, architecture solide, livraison production.`,
      ctaProject: "Voir le projet phare",
      ctaContact: "Me contacter",
      ctaCv: "Télécharger le CV",
    },
    about: {
      eyebrow: "À propos",
      title: "Frontend avec instinct produit",
      body: [
        `Ingénieur frontend avec ${siteConfig.yearsExperience} ans d’expérience, spécialisé React, Next.js et TypeScript. Passionné par les applications scalables, les systèmes de composants réutilisables et les expériences utilisateur soignées. J’aime résoudre des problèmes complexes, améliorer l’architecture frontend et livrer des produits de qualité.`,
        "En dehors du travail, je construis des produits perso qui répondent à de vrais besoins et j’explore en continu de nouvelles technologies frontend.",
      ],
      skillsTitle: "Compétences techniques",
      skillsHint: "Choisis une catégorie, puis explore les outils",
      skillCategories: {
        frontend: "Frontend",
        state: "State & formulaires",
        backend: "Backend",
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
        "Un produit multi-tenant d’ops construction que j’ai conçu et livré de bout en bout — utilisé par de vraies entreprises en production. Le produit continue d’évoluer. Démo live disponible sur demande.",
      problemTitle: "Le défi",
      problem:
        "Les équipes BTP font souvent tourner le quotidien via tableurs et chat. Les dirigeants ont besoin d’un lieu pour projets, gens, partenaires et argent — sans outils génériques qui ignorent le chantier réel.",
      solutionTitle: "Ce que j’ai livré",
      solution:
        "Un SaaS scopé par entreprise, UI bilingue (EN/FR), accès par rôles, et une interface prête pour la production sur les workflows ops et financiers. Les rôles owner/admin sont déjà appliqués ; je construis une nouvelle UI pour que les owners configurent les accès utilisateurs dans l’app (géré en base pour l’instant, le temps que cette interface sorte).",
      scopeTitle: "Périmètre produit",
      scope: [
        "Espaces entreprise multi-tenant",
        "Projets & ops chantier",
        "Suivi main-d’œuvre",
        "Partenaires, fournitures & logistique",
        "Vue financière pour les dirigeants",
        "Bilingue EN / FR",
        "Accès par rôles (UI en cours)",
      ],
      engineeringTitle: "Points techniques",
      engineering: [
        "Ownership de bout en bout : vision produit et implémentation Next.js / TypeScript",
        "Architecture multi-tenant avec accès authentifié scopé entreprise",
        "UI riche en données — tableaux, filtres, dialogs, navigation responsive",
        "Internationalisation et interfaces conscientes des permissions",
        "Livré et maintenu en production — itération en cours sur l’UX de gestion des permissions owner/admin",
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
      body: "Ouvert aux rôles frontend où l’ownership, le craft et le shipping comptent. Avec plaisir pour détailler mon travail et mon parcours.",
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

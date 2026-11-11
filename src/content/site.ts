export const siteConfig = {
  name: "Youssef Bounouacha",
  role: "Software Engineer",
  yearsExperience: "4+",

  contactEmail: "bnyoussef00@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/youssef-bounouacha/",
  phone: "+212610353236",
  cvPath: "/Youssef-Bounouacha-Software-Engineer-CV.pdf",

  experience: [
    {
      company: "ABA Technology",
      role: {
        en: "Full-Stack Engineer",
        fr: "Ingénieur full-stack",
      },
      period: {
        en: "Sep 2024 — Present",
        fr: "Sep 2024 — Présent",
      },
      detail: {
        en: "Building a library of reusable custom D3 (SVG) widgets that extend Fusion AI Analytics Studio beyond its native charts, for multiple clients rather than one use case, plugged in through typed configuration, manifest metadata, and Module Federation. Previously Frontend Engineer, then Frontend Lead on Connected Workers, a digital factory platform in Tangier and Kenitra: owned the frontend of a 4-module product with 64+ pages, led 6 developers, and shipped the Next.js architecture, a React Flow workflow editor, and responsive tools for desktop and factory tablets.",
        fr: "Bibliothèque de widgets D3 (SVG) réutilisables qui étendent Fusion AI Analytics Studio au-delà de ses graphiques natifs, conçue pour plusieurs clients, branchée via une configuration typée, des métadonnées de manifest et Module Federation. Auparavant Frontend Engineer, puis Frontend Lead sur Connected Workers, plateforme d’usine digitale à Tanger et Kénitra : frontend d’un produit à 4 modules et 64+ pages, lead de 6 développeurs, architecture Next.js, éditeur de workflows React Flow, et interfaces desktop et tablettes d’usine.",
      },
    },
    {
      company: "ConstruFlow",
      role: {
        en: "Full-Stack Engineer",
        fr: "Ingénieur full-stack",
      },
      period: {
        en: "Apr 2026 — Present",
        fr: "Avr 2026 — Présent",
      },
      detail: {
        en: "Independent production multi-tenant construction SaaS, live with 2 paying clients, shipped alongside full-time work. 28 screens across projects, quotations, invoices, suppliers, subcontractors, workforce, vehicles, and cash. A Claude API Excel/CSV import maps each client’s spreadsheet columns to the data model, with mapping confirmation and a preview before anything is saved. PostgreSQL row-level security, role-based permissions, and English, French, and Arabic with RTL.",
        fr: "SaaS BTP multi-tenant indépendant, en production chez 2 clients payants, livré en parallèle du temps plein. 28 écrans : projets, devis, factures, fournisseurs, sous-traitants, main-d’œuvre, véhicules et caisse. Un import Excel/CSV via l’API Claude mappe les colonnes des tableurs clients vers le modèle de données, avec confirmation du mapping et un aperçu avant enregistrement. Row Level Security PostgreSQL, permissions par rôle, et interfaces anglais, français et arabe avec RTL.",
      },
    },
    {
      company: "InsureBT",
      role: {
        en: "Frontend Engineer",
        fr: "Frontend Engineer",
      },
      period: {
        en: "Apr 2023 — Sep 2024",
        fr: "Avr 2023 — Sep 2024",
      },
      detail: {
        en: "Led the migration of 2 large insurance platforms (vehicle, dental, and health) from legacy React/Node to Next.js and Node LTS with 2 developers over about 6 weeks, as the only person on the team with Next.js experience. Replaced deprecated dependencies, removed unused code and pages, and supported Ubuntu deployments with load balancing in a 10-developer team.",
        fr: "Pilotage de la migration de 2 grandes plateformes d’assurance (véhicule, dentaire et santé) de React/Node legacy vers Next.js et Node LTS, avec 2 développeurs en environ 6 semaines, seul membre de l’équipe déjà à l’aise avec Next.js. Remplacement des dépendances dépréciées, suppression du code et des pages inutilisés, et déploiements Ubuntu avec répartition de charge dans une équipe de 10 développeurs.",
      },
    },
    {
      company: "Botticelli Web",
      role: {
        en: "Freelance Full-Stack Developer",
        fr: "Développeur full-stack freelance",
      },
      period: {
        en: "Feb 2023 — Apr 2023",
        fr: "Fév 2023 — Avr 2023",
      },
      detail: {
        en: "iOS and Android apps with React Native, and React web apps on a Laravel/MySQL backend.",
        fr: "Applications iOS et Android en React Native, et applications web React sur un backend Laravel/MySQL.",
      },
    },
    {
      company: "Kubicbit",
      role: {
        en: "Freelance Full-Stack Developer",
        fr: "Développeur full-stack freelance",
      },
      period: {
        en: "Aug 2022 — Feb 2023",
        fr: "Aoû 2022 — Fév 2023",
      },
      detail: {
        en: "Formerly Pull4YOU Services. Transportation-service web app with React, Redux, and REST APIs.",
        fr: "Anciennement Pull4YOU Services. Application web de transport avec React, Redux et API REST.",
      },
    },
    {
      company: "Hirschmann Automotive",
      role: {
        en: "Software Development Intern",
        fr: "Stagiaire en développement logiciel",
      },
      period: {
        en: "Mar 2022 — Aug 2022",
        fr: "Mar 2022 — Aoû 2022",
      },
      detail: {
        en: "Cross-platform Flutter app for technician interventions, with Firebase auth and realtime data. UI designed in Adobe XD.",
        fr: "Application Flutter multiplateforme pour les interventions techniciens, avec authentification Firebase et données temps réel. UI conçue dans Adobe XD.",
      },
    },
  ] as const,

  productName: "ConstruFlow Pro",
  demoCompany: "Atlas Builders",

  seo: {
    title: "Youssef Bounouacha — Software Engineer",
    description:
      "Software Engineer with 4+ years delivering production web applications for industrial operations, insurance, and SaaS. Frontend architecture and a team of 6, multi-tenant products, and LLM API integration.",
    url: "https://portfolio-youssefbounouacha.vercel.app",
  },
} as const;

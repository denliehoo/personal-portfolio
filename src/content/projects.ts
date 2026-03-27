import { IProject } from "@/src/types";

export const pinnedProjects: IProject[] = [
  {
    _id: "recurcrypt",
    imgSrc: "/images/projects/recur-crypt.png",
    imgAlt: "recurcrypt",
    name: "RecurCrypt",
    shortDescription:
      "A full-stack recurring crypto payments platform \u2014 Stripe, but for cryptocurrency. Features smart contract-based transfers, serverless billing via AWS Lambda, and automated monorepo deployments.",
    medium:
      "https://medium.com/@denliehoo/building-recurcrypt-a-recurring-cryptocurrency-payments-application-af72cf61d918",
    website: "",
    github: "https://github.com/denliehoo/recurring-crypto-payments",
    longDescription: [],
    path: "recurcrypt",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "TypeScript", "Solidity", "AWS", "GitHub Actions"],
  },
  {
    _id: "multiswap",
    imgSrc: "/images/projects/multiswap.png",
    imgAlt: "multiswap",
    name: "Multiswap",
    shortDescription:
      "Multi-chain token swapping across decentralized exchanges like Uniswap and Spookyswap. Built with test-driven Solidity development and a Next.js frontend for contract interaction.",
    medium:
      "https://medium.com/@denliehoo/developing-multiswap-a-decentralized-application-for-swapping-to-and-fro-multiple-coins-tokens-20b10d45f1b",
    website: "https://multiswap.denliehoo.com",
    github: "https://github.com/denliehoo/multi-swap",
    longDescription: [],
    path: "multiswap",
    tags: ["React", "Solidity", "Next.js", "Web3.js", "Redux"],
  },
  {
    _id: "snap-cals",
    imgSrc: "",
    imgAlt: "snap-cals",
    name: "Snap Cals",
    shortDescription:
      "An AI-powered mobile calorie tracker built end-to-end with a multi-agent AI workflow \u2014 PM, builder, and QA agents with separated concerns, structured skills, and architecture docs guiding code generation across sessions.",
    medium: "",
    website: "",
    github: "https://github.com/denliehoo/snap-cals",
    longDescription: [],
    path: "snap-cals",
    tags: ["React Native", "TypeScript", "Node.js", "Gemini API", "PostgreSQL", "Agentic AI"],
  },
];

export const otherProjects: IProject[] = [
  {
    _id: "portfolio",
    imgSrc: "/images/projects/personal-portfolio.png",
    imgAlt: "portfolio",
    name: "Personal Portfolio",
    shortDescription:
      "This portfolio site \u2014 built with Next.js 16 and deployed on Vercel with fully static content.",
    medium: "",
    website: "",
    github: "https://github.com/denliehoo/personal-portfolio",
    longDescription: [],
    path: "personal-portfolio",
    tags: ["Next.js", "TypeScript", "Vercel"],
  },
  {
    _id: "farming-app",
    imgSrc: "/images/projects/farming-app.png",
    imgAlt: "farming-app",
    name: "Farming app",
    shortDescription:
      "Cryptocurrency Decentralised Finance (DeFi) farming application which allows users to deposit tokens to earn yield. This dApp was made to better understand how farming works in DeFi.",
    medium: "",
    website: "https://farming-app-36a08.web.app/",
    github: "https://github.com/denliehoo/farming-app",
    longDescription: [],
    path: "farming-app",
    tags: ["React", "Solidity"],
  },
  {
    _id: "project-tracker",
    imgSrc: "/images/projects/project-tracker.png",
    imgAlt: "project-tracker",
    name: "Project Tracker",
    shortDescription:
      "Project Tracker application to help people track their projects' progress. Integrated with OAuth2.0 and Stripe. Created to understand how Stripe works and as a test project to integrate RecurCrypt\u2019s APIs and Webhooks.",
    medium: "",
    website: "",
    github: "https://github.com/denliehoo/project-tracker",
    longDescription: [],
    path: "project-tracker",
    tags: ["MongoDB", "Express", "React", "Node"],
  },
  {
    _id: "expense-tracker",
    imgSrc: "/images/projects/expense-tracker.png",
    imgAlt: "expense-tracker",
    name: "Expense Tracker",
    shortDescription:
      "Expense tracker to help users track expenses. Application is a terminal application built on Python. Application was built by my team for a programming module I took in university.",
    medium: "",
    website: "",
    github: "https://github.com/denliehoo/expense-tracker-python",
    longDescription: [],
    path: "expense-tracker",
    tags: ["Python"],
  },
];

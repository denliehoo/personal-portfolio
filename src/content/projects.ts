import { IProject } from "@/src/types";

export const pinned: IProject[] = [
  {
    _id: "recurcrypt",
    imgSrc: "https://i.imgur.com/aergOSA.png",
    imgAlt: "recurcrypt",
    name: "RecurCrypt",
    shortDescription:
      "Software-as-a-Service platform that enables vendors to accept recurring cryptocurrency payments (e.g. stables coins like USDT and USDC); Stripe but for cryptocurrency.",
    medium:
      "https://medium.com/@denliehoo/building-recurcrypt-a-recurring-cryptocurrency-payments-application-af72cf61d918",
    website: "",
    github: "https://github.com/denliehoo/recurring-crypto-payments",
    longDescription: [],
    path: "recurcrypt",
    isPinned: true,
    tags: ["React", "Solidity", "Express", "Node", "MongoDB", "AWS", "Material UI"],
  },
  {
    _id: "multiswap",
    imgSrc: "https://i.imgur.com/YyfKwiD.png",
    imgAlt: "multiswap",
    name: "Multiswap",
    shortDescription:
      "Swap multiple cryptocurrency coins/tokens to and fro within one transaction. Swap is routed through Decentralised Exchanges (DeX) such as Uniswap and Spookyswap.",
    medium:
      "https://medium.com/@denliehoo/developing-multiswap-a-decentralized-application-for-swapping-to-and-fro-multiple-coins-tokens-20b10d45f1b",
    website: "https://multiswap.denliehoo.com",
    github: "https://github.com/denliehoo/multi-swap",
    longDescription: [],
    path: "multiswap",
    isPinned: true,
    tags: ["React", "Solidity"],
  },
  {
    _id: "portfolio",
    imgSrc: "https://i.imgur.com/izzmlnk.png",
    imgAlt: "portfolio",
    name: "Personal Portfolio",
    shortDescription:
      "A personal portfolio application built with Next.js to display projects and experiences - you're on this page now!",
    medium: "",
    website: "",
    github: "https://github.com/denliehoo/personal-portfolio",
    longDescription: [],
    path: "personal-portfolio",
    isPinned: true,
    tags: ["NextJS", "React"],
  },
];

export const others: IProject[] = [
  {
    _id: "farming-app",
    imgSrc: "https://i.imgur.com/MTVAz5x.png",
    imgAlt: "farming-app",
    name: "Farming app",
    shortDescription:
      "Cryptocurrency Decentralised Finance (DeFi) farming application which allows users to deposit tokens to earn yield. This dApp was made to better understand how farming works in DeFi.",
    medium: "",
    website: "https://farming-app-36a08.web.app/",
    github: "https://github.com/denliehoo/farming-app",
    longDescription: [],
    path: "farming-app",
    isPinned: false,
    tags: ["React", "Solidity"],
  },
  {
    _id: "project-tracker",
    imgSrc: "https://i.imgur.com/89BV8Vr.png",
    imgAlt: "project-tracker",
    name: "Project Tracker",
    shortDescription:
      "Project Tracker application to help people track their projects' progress. Integrated with OAuth2.0 and Stripe. Created to understand how Stripe works and as a test project to integrate RecurCrypt\u2019s APIs and Webhooks.",
    medium: "",
    website: "",
    github: "https://github.com/denliehoo/project-tracker",
    longDescription: [],
    path: "project-tracker",
    isPinned: false,
    tags: ["MongoDB", "Express", "React", "Node"],
  },
  {
    _id: "expense-tracker",
    imgSrc: "https://i.imgur.com/zTNfy6u.png",
    imgAlt: "expense-tracker",
    name: "Expense Tracker",
    shortDescription:
      "Expense tracker to help users track expenses. Application is a terminal application built on Python. Application was built by my team for a programming module I took in university.",
    medium: "",
    website: "",
    github: "https://github.com/denliehoo/expense-tracker-python",
    longDescription: [],
    path: "expense-tracker",
    isPinned: false,
    tags: ["Python"],
  },
];

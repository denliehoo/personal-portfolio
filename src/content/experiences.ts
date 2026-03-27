import { IExperience } from "@/src/types";

export const pinnedExperiences: IExperience[] = [
  {
    _id: "aquariux",
    date: "NOV 2023 - PRESENT",
    title: "Software Engineer",
    company: "Aquariux Fintech",
    pointers: [
      "Architected a cross-platform trading application using React and React Native with a microfrontend and monorepo architecture, serving US$20B+ in trading volume across Android, iOS, and web",
      "Led the migration from Webpack to Rspack across projects, achieving 9\u00D7 faster build times and a 10% reduction in bundle size. Conducted a company-wide tech sharing on the architectural evaluation and implementation strategy",
      "Engineered a multi-package UI component ecosystem for React and React Native, decoupling shared components and core utilities into reusable NPM modules to ensure design parity across web and mobile",
      "Developed a custom MCP server integrated with Jira and GitLab APIs to automate ticket context retrieval and AI-driven code reviews, accelerating team development velocity",
    ],
  },
  {
    _id: "tlv-dev",
    date: "DEC 2021 - OCT 2023",
    title: "Web Developer",
    company: "TLV Fintech Solutions",
    pointers: [
      "Developed and maintained the frontend for a cryptocurrency exchange and admin panel using React, owning feature delivery end-to-end in an Agile remote team",
      "Designed wireframes and system architectures for complex features including Crypto Travel Rule, Digital Banks, and Crypto Staking, translating stakeholder requirements into technical specifications using Figma and Miro",
    ],
  },
];

export const otherExperiences: IExperience[] = [
  {
    _id: "tlv-intern",
    date: "FEB 2021 \u2013 NOV 2021",
    title: "Support & Compliance Intern",
    company: "TLV Fintech Solutions",
    pointers: [
      "Supported infrastructure of digital bank project offering financial services, including debit card solutions, cryptocurrency trading, and bank transfers.",
      "Streamlined operations by programming JavaScript algorithms in Google Sheets (Google Scripts) for automating data entry and e-mail sending",
    ],
  },
  {
    _id: "sgcash",
    date: "DEC 2020 \u2013 JAN 2021",
    title: "Credit & Risk Management Intern",
    company: "SG Cash",
    pointers: [
      "Automated repetitive tasks to increase efficiency and reduce errors by developing Excel templates using VBA",
      "Assessed the creditworthiness of SMEs",
    ],
  },
];

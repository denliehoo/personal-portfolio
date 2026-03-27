import { IExperience } from "@/src/types";

export const experiences: IExperience[] = [
  {
    _id: "aquariux",
    date: "NOV 2023 - PRESENT",
    title: "Software Engineer",
    company: "Aquariux Fintech",
    pointers: [
      "Built a payments gateway and cross-platform trading platform using TypeScript, React and React Native, ensuring seamless experiences across Android, iOS, and web",
      "Used a micro-frontend and monorepo architecture, and refactored shared components into a GitLab Private Registry",
      "Integrated multiple third-party services, including TradingView with a custom WebSocket data feed for real-time market data and advanced charting, Sumsub for Compliance, and Mixpanel for data analytics",
      "Configured CI/CD pipelines with Jenkins, deployed to AWS S3, and set up CloudFront functions",
    ],
  },
  {
    _id: "tlv-dev",
    date: "DEC 2021 - OCT 2023",
    title: "Web Developer",
    company: "TLV Fintech Solutions",
    pointers: [
      "Developed the frontend of a cryptocurrency exchange using React",
      "Contributed to a Solidity Smart Contract which functions like an ETF by investing in multiple liquidity pool",
      "Developed a Proof Of Concept for a full-stack cryptocurrency invoicing application which integrated WalletConnect2.0",
      "Designed wireframes and architectures for features, including Crypto Travel Rule, Digital Banks, Crypto Staking and Earning using Miro and Figma",
      "Improved workflow efficiency by creating Node.js and Batch scripts",
    ],
  },
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

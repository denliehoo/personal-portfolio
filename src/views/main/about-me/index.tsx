"use client";
import { useFadeIn } from "@/src/hooks/useFadeIn";
import classes from "./index.module.css";

const TECH_STACK = [
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Solidity",
  "AWS",
  "Rspack",
  "Microfrontend",
];

const About = () => {
  const ref = useFadeIn();

  return (
    <div ref={ref} className="fade-in">
      <h2 className="section-title">About</h2>
      <p>
        I&apos;m a frontend engineer who builds high-scale trading platforms and
        developer tooling. At Aquariux, I architect cross-platform applications
        supporting US$20B+ in trading volume, lead build system migrations, and
        design reusable component ecosystems across web and mobile.
      </p>
      <p>
        My expertise spans the full stack — from React and React Native on the
        frontend, to Node.js and MongoDB on the backend, to Solidity smart
        contracts on-chain. I&apos;m driven by solving complex frontend
        architecture problems: microfrontend design, build performance,
        cross-platform UI parity, and developer experience tooling.
      </p>
      <p>
        I started programming with Microsoft Excel VBA before my studies at
        Nanyang Business School in 2017, initially aiming for a career in
        finance. During my final year, I discovered my true passion for
        programming. I took a semester off, interned at a fintech company, and
        transitioned to a full-time engineering role after graduating in 2021.
        Since then, I&apos;ve been committed to pushing the boundaries of
        frontend engineering — from optimizing build pipelines to architecting
        component ecosystems that scale across platforms.
      </p>
      <div className={classes.techStack}>
        {TECH_STACK.map((tech) => (
          <span key={tech} className={classes.badge}>
            {tech}
          </span>
        ))}
      </div>
      <div className={classes.certifications}>
        AWS Certified Cloud Practitioner · Certified Scrum Master
      </div>
    </div>
  );
};

export default About;

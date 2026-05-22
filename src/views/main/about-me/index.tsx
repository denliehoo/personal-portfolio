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
  "RAG",
  "MCP",
  "Rspack",
  "Microfrontend",
];

const About = () => {
  const ref = useFadeIn();

  return (
    <div ref={ref} className="fade-in">
      <h2 className="section-title">About</h2>
      <p>
        Frontend and AI engineer specializing in web development with React. My
        experience spans the full stack, from mobile development with React
        Native to backend development with Node.js and MongoDB.
      </p>
      <p>
        I started programming with Microsoft Excel VBA in 2017 before my studies
        at Nanyang Business School, initially aiming for a career in finance.
        During my final year, I discovered my true passion for programming. I
        took a semester off, interned at a fintech company, and transitioned to
        a full-time engineering role after graduating in 2021.
      </p>
      <p>
        Since then, I've focused on frontend and AI engineering. My work ranges
        from architecting scalable cross-platform component ecosystems and
        optimizing developer tooling and build pipelines, to streamlining
        workflows using AI and RAG-enhanced solutions.
      </p>
      <div className={classes.techStack}>
        {TECH_STACK.map((tech) => (
          <span key={tech} className={classes.badge}>
            {tech}
          </span>
        ))}
      </div>
      <div className={classes.certifications}>
        AWS Certified Cloud Practitioner · AWS Certified AI Practitioner ·
        Certified Scrum Master
      </div>
    </div>
  );
};

export default About;

"use client";
import { useFadeIn } from "@/src/hooks/useFadeIn";
import classes from "./index.module.css";

const TECH_STACK = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "React Native",
  "Solidity",
  "AWS",
  "Git",
];

const About = () => {
  const ref = useFadeIn();

  return (
    <div ref={ref} className="fade-in">
      <h2 className="section-title">About</h2>
      <p>
        My name is Denlie Hoo. I&apos;m a software engineer specializing in
        frontend development with React, and I have experience in backend
        development (Node.js, Express, MongoDB), cross-platform mobile
        development (React Native), and smart contract development (Solidity).
        My professional background focuses on Fintech, Cryptocurrency, and Web3.
      </p>
      <p>
        I started programming with Microsoft Excel VBA before my studies at
        Nanyang Business School in 2017, initially aiming for a career in
        finance. But during my final year, I discovered my true passion for
        programming.
      </p>
      <p>
        I took a semester off, interned at a fintech company, and transitioned
        to a programming role after graduating in 2021. Since then, I&apos;ve
        been committed to honing my skills, exploring new technologies, and
        working on personal projects in my free time.
      </p>
      <div className={classes.techStack}>
        {TECH_STACK.map((tech) => (
          <span key={tech} className={classes.badge}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default About;

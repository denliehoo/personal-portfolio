"use client";
import classes from "./index.module.css";
import React, { useEffect, FC } from "react";
import About from "./about-me";
import { IMainProps } from "@/src/types";
import ProjectList from "./projects";
import ExperienceList from "./experiences";

const Main: FC<IMainProps> = ({ pinned, others, experiences }) => {
  const scrollToSection = (sectionId: string) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const ids = ["about", "projects", "experiences"];
    ids.forEach((id) => {
      document
        .getElementById(`${id}Link`)
        ?.addEventListener("click", () => scrollToSection(id));
    });
  }, []);

  return (
    <div className={classes.container}>
      <section id="about" className={classes.about}>
        <About />
      </section>
      <section id="projects" className={classes.projects}>
        <ProjectList pinned={pinned} others={others} />
      </section>
      <section id="experiences" className={classes.experiences}>
        <ExperienceList experiences={experiences} />
      </section>
    </div>
  );
};

export default Main;

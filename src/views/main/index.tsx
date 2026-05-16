"use client";
import classes from "./index.module.css";
import React, { useEffect } from "react";
import About from "./about-me";
import ProjectList from "./projects";
import ExperienceList from "./experiences";
import ArticleList from "./articles";

const Main = () => {
  const scrollToSection = (sectionId: string) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const ids = ["about", "projects", "experiences", "articles"];
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
      <section id="experiences" className={classes.experiences}>
        <ExperienceList />
      </section>
      <section id="projects" className={classes.projects}>
        <ProjectList />
      </section>
      <section id="articles" className={classes.articles}>
        <ArticleList />
      </section>
    </div>
  );
};

export default Main;

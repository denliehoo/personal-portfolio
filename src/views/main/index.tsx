"use client";
import classes from "./index.module.css";
import Project from "../../components/Projects";
import Experience from "../../components/experience";
import React, { useEffect, useState, FC } from "react";
import About from "./about-me";
import { IExperience, IMainProps, IProject } from "@/src/types";
import ProjectList from "./projects";
import ExperienceList from "./experiences";

const Main: FC<IMainProps> = ({ pinned, others, experiences }) => {
  const scrollOptions: ScrollIntoViewOptions = {
    behavior: "smooth",
  };
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView(scrollOptions);
    }
  };
  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  useEffect(() => {
    document.getElementById("aboutLink")?.addEventListener("click", () => {
      handleNavClick("about");
    });
    document.getElementById("projectsLink")?.addEventListener("click", () => {
      handleNavClick("projects");
    });
    document
      .getElementById("experiencesLink")
      ?.addEventListener("click", () => {
        handleNavClick("experiences");
      });
    // Add more event listeners for other links
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

        {/* <div>
          <div className={classes.technologies}>Technologies Worked With</div>
          <div>
            Javascript, React, Solidity, HTML, CSS, MongoDB, Express, Node.js,
            Git, TypeScript, Redux, VBA, Python, Postman, Chai, Truffle,
            Ganache, AWS, Azure, Firebase
          </div>
        </div> */}

        {/* <div className={classes.view}> View full resume &rarr;</div> */}
      </section>
    </div>
  );
};

export default Main;

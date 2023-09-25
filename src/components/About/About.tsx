"use client";
import classes from "./About.module.css";
import Project from "../Projects/Project";
import Experience from "../Experiences/Experience";
import { useEffect } from "react";

const About = (props: any) => {
  const { projects, experiences } = props;

  useEffect(() => {
    const scrollOptions: ScrollIntoViewOptions = {
      behavior: "smooth",
    };
    const scrollToSection = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView(scrollOptions);
      }
    };
    // Handle navigation click events
    const handleNavClick = (sectionId: string) => {
      scrollToSection(sectionId);
    };
    // Example: Scroll to a section with ID 'section1' when a link is clicked
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
      <section id="about">
        <p>
          My name is Denlie Hoo. I’m a Software engineer specialised in
          full-stack web development and blockchain development.
        </p>
        <p>
          I mainly use is React for the frontend, Node.js and MongoDB for the
          backend and Solidity for blockchain development. My professional
          experience mainly revolves around the fintech, cryptocurrency and web3
          industry.
        </p>
        <p>
          In 2017, before I began my studies at Nanyang Business School, Nanyang
          Technological University, I had my first exposure to programming.
          Initially, my focus was on pursuing a career in finance, so I decided
          to start with Microsoft Excel VBA, considering it a valuable asset in
          the finance field.
        </p>
        <p>
          As I progressed through my academic journey, my perspective began to
          shift. During my last semester in 2021, I had a realization that my
          true passion lay in programming, not finance. This epiphany prompted
          me to make a career switch.
        </p>
        <p>
          To fully explore my newfound interest, I took a semester off from my
          studies to immerse myself in programming. During this time, I secured
          an internship at a fintech company as a support role, but later
          transitioned into a programming position within the same company.
        </p>
        <p>
          At the end of 2021, upon completing my degree, I officially embraced
          the role of a web developer. Since then, I've been continuously honing
          my skills, exploring new technologies, and working on personal
          projects in my free time.
        </p>
        {/* <p>
          My name is Denlie Hoo. I’m a Software engineer specialised in
          full-stack web development and blockchain development.
        </p>
        <p>
          The tech stack that I mainly use is React for the frontend, Node.js
          and MongoDB for the backend and Solidity for blockchain development.
          My professional experience mainly revolves around the fintech,
          cryptocurrency and web3 industry.
        </p> */}
      </section>
      <section id="projects">
        {projects.map((p: any) => (
          <Project
            key={p._id.toString()}
            project={{ ...p, _id: p._id.toString() }}
          />
        ))}
      </section>
      <section id="experiences">
        {experiences.map((e: any) => (
          <Experience
            key={e._id.toString()}
            experience={{ ...e, _id: e._id.toString() }}
          />
        ))}
      </section>
    </div>
  );
};

export default About;

{
  /* <p className={classes.helloWorld}>HELLO WORLD!</p>
      <p>
        My name is Denlie Hoo. I’m a Software engineer specialised in full-stack
        web development and blockchain development.
      </p>
      <p></p>
      <p>
        The tech stack that I mainly use is React for the frontend, Node.js and
        MongoDB for the backend and Solidity for blockchain development. My
        professional experience mainly revolves around the fintech,
        cryptocurrency and web3 industry.
      </p>
       */
}

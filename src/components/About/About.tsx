"use client";
import classes from "./About.module.css";
import Project from "../Projects/Project";
import Experience from "../Experiences/Experience";
import { useEffect } from "react";

const About = (props: any) => {
  const { pinned, others, experiences } = props;

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
    document.getElementById("pinnedLink")?.addEventListener("click", () => {
      handleNavClick("pinned");
    });
    document
      .getElementById("experiencesLink")
      ?.addEventListener("click", () => {
        handleNavClick("experiences");
      });
    document.getElementById("othersLink")?.addEventListener("click", () => {
      handleNavClick("others");
    });
    // Add more event listeners for other links
  }, []);
  return (
    <div className={classes.container}>
      <section id="about" className={classes.about}>
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
          true passion lay in programming, not finance.
        </p>
        <p>
          I took a semester off from university to immerse myself in
          programming. During this time, I secured an internship at a fintech
          company as a support role, but later transitioned into a programming
          position within the same company.
        </p>
        <p>
          Upon completing my degree at the end of 2021, I officially embraced
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
      <section id="pinned" className={classes.projects}>
        {pinned.map((p: any) => (
          <Project
            key={p._id.toString()}
            project={{ ...p, _id: p._id.toString() }}
          />
        ))}
        <div className={classes.view} onClick={() => handleNavClick("others")}>
          View other projects &rarr;
        </div>
      </section>
      <section id="experiences" className={classes.experiences}>
        {experiences.map((e: any) => (
          <Experience
            key={e._id.toString()}
            experience={{ ...e, _id: e._id.toString() }}
          />
        ))}

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

      <section id="others" className={classes.archives}>
        {others.map((p: any) => (
          <Project
            key={p._id.toString()}
            project={{ ...p, _id: p._id.toString() }}
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

"use client";
import classes from "./Main.module.css";
import Project from "../Projects/Project";
import Experience from "../Experiences/Experience";
import { useEffect, useState } from "react";
import About from "../About/About";

const Main = (props: any) => {
  const { pinned, others, experiences } = props;
  const [viewOthers, setViewOthers] = useState(false);

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
        {pinned.map((p: any) => (
          <Project
            key={p._id.toString()}
            project={{ ...p, _id: p._id.toString() }}
          />
        ))}
        <div
          style={{
            display: viewOthers ? "inline" : "none",
          }}
        >
          {others.map((p: any) => (
            <Project
              key={p._id.toString()}
              project={{ ...p, _id: p._id.toString() }}
            />
          ))}
        </div>
        <button
          className={classes.view}
          onClick={() => setViewOthers(!viewOthers)}
        >
          {viewOthers ? (
            <>&larr; Hide other projects</>
          ) : (
            <>View other projects &rarr;</>
          )}
        </button>
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

      {/* <section id="others" className={classes.archives}>
        {others.map((p: any) => (
          <Project
            key={p._id.toString()}
            project={{ ...p, _id: p._id.toString() }}
          />
        ))}
      </section> */}
    </div>
  );
};

export default Main;

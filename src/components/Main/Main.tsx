"use client";
import classes from "./Main.module.css";
import Project from "../Projects/Project";
import Experience from "../Experiences/Experience";
import React, { useEffect, useState, FC } from "react";
import About from "../About/About";
import { IExperience, IMainProps, IProject } from "@/src/types";

const Main: FC<IMainProps> = ({ pinned, others, experiences }) => {
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
        {pinned.map((p: IProject) => (
          <Project key={p._id.toString()} {...p} />
        ))}
        <div
          style={{
            display: viewOthers ? "inline" : "none",
          }}
        >
          {others.map((p: IProject) => (
            <Project key={p._id.toString()} {...p} />
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
        {/* For testing of experience */}
        {/* <Experience key={"asdasdasd"} experience={{ ...exp }} /> */}
        {experiences.map((e: IExperience) => (
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

// const exp = {
//   _id: "123",
//   date: "NOV 2023 - PRESENT",
//   title: "Software Engineer",
//   company: "Aquariux Fintech",
//   pointers: [
//     "Built a payments gateway and cross-platform trading platform using TypeScript, React and React Native, ensuring seamless experiences across Android, iOS, and web",
//     "Used a micro-frontend and monorepo architecture, and refactored shared components into a GitLab Private Registry",
//     "Integrated multiple third-party services, including TradingView with a custom WebSocket data feed for real-time market data and advanced charting, Sumsub for Compliance, and Mixpanel for data analytics",
//     "Configured CI/CD pipelines with Jenkins, deployed to AWS S3, and set up CloudFront functions",
//   ],
// };
// 650977a1c8c3b14e09cfeeeb

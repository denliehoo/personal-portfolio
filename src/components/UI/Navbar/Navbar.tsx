"use client";
import Link from "next/link";
import classes from "./Navbar.module.css";
import LogoRedirect from "../LogoRedirect/LogoRedirect";
import TypingEffect from "./TypingEffect";
import { useEffect, useState } from "react";

const Navbar = (props: any) => {
  const { isSmallScreen, closeMenu, rightDivRef, setActive } = props;
  const onClickLink = () => {
    if (isSmallScreen) {
      closeMenu();
    }
  };

  const [currentSection, setCurrentSection] = useState("about"); // Set an initial value

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "experiences"]; // List of section IDs

      // Find the section that is closest to being in view
      let closestSection = null;
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Calculate the distance between the section's top and the top of the viewport
          const distance = Math.abs(rect.top);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
          }
        }
      });

      // Update the active link based on the closestSection
      if (closestSection && closestSection !== currentSection) {
        setCurrentSection(closestSection);
        setActive(closestSection);
      }
    };

    // Attach the scroll event listener
    rightDivRef?.current?.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      rightDivRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  return (
    <div className={classes.container}>
      <div className={classes.name}>DENLIE HOO</div>
      <div className={classes.title}>
        <TypingEffect />
      </div>

      <nav className={classes.navLinks}>
        <Link
          href="/#about"
          className={
            isSmallScreen
              ? ""
              : currentSection === "about"
              ? classes.active
              : ""
          }
          onClick={onClickLink}
          id="aboutLink"
        >
          About
        </Link>
        <Link
          id="projectsLink"
          href="/#projects"
          className={
            isSmallScreen
              ? ""
              : currentSection === "projects"
              ? classes.active
              : ""
          }
          onClick={onClickLink}
        >
          Projects
        </Link>
        <Link
          id="experiencesLink"
          href="/#experiences"
          className={
            isSmallScreen
              ? ""
              : currentSection === "experiences"
              ? classes.active
              : ""
          }
          onClick={onClickLink}
        >
          Experiences
        </Link>
      </nav>

      <div className={classes.icons}>
        <LogoRedirect
          width={50}
          height={50}
          url="https://github.com/denliehoo"
          icon="github"
        />
        <LogoRedirect
          width={50}
          height={50}
          url="https://www.linkedin.com/in/denlie-hoo/"
          icon="linkedIn"
        />
      </div>
    </div>
  );
};

export default Navbar;

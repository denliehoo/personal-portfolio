"use client";
import Link from "next/link";
import classes from "./Navbar.module.css";
import LogoRedirect from "../LogoRedirect/LogoRedirect";
import TypingEffect from "./TypingEffect";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = (props: any) => {
  const pathname = usePathname();
  const { isSmallScreen, closeMenu, setActive } = props;
  const onClickLink = () => {
    if (isSmallScreen) {
      closeMenu();
    }
  };

  const [currentSection, setCurrentSection] = useState("about"); // Set an initial value

  const getLinkClassName = (section: string) => {
    if (isSmallScreen) return "";
    if (pathname.startsWith("/project")) return "";
    if (currentSection === section) return classes.active;
    return "";
  };

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
        // console.log(closestSection);
        setCurrentSection(closestSection);
        // console.log(setActive);
        setActive && setActive(closestSection);
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("scroll", handleScroll);
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
          className={getLinkClassName("about")}
          onClick={onClickLink}
          id="aboutLink"
        >
          About
        </Link>
        <Link
          id="projectsLink"
          href="/#projects"
          className={getLinkClassName("projects")}
          onClick={onClickLink}
        >
          Projects
        </Link>
        <Link
          id="experiencesLink"
          href="/#experiences"
          className={getLinkClassName("experiences")}
          onClick={onClickLink}
        >
          Experiences
        </Link>
        {/* 
        <Link
          id="othersLink"
          href="/#others"
          className={getLinkClassName("others")}
          onClick={onClickLink}
        >
          Other Projects
        </Link> */}
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

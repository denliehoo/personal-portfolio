"use client";
import Link from "next/link";
import classes from "./index.module.css";
import LogoRedirect from "../logo-redirect";
import TypingEffect from "./typing-effect";
import { FC, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { EInteractableIcons } from "@/src/enum";

interface INavbar {
  isSmallScreen?: boolean;
  closeMenu?: () => void;
  setActive?: (section: string) => void;
}

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experiences", label: "Experiences" },
  { id: "projects", label: "Projects" },
];

const Navbar: FC<INavbar> = ({ isSmallScreen, closeMenu, setActive }) => {
  const pathname = usePathname();
  const [currentSection, setCurrentSection] = useState("about");

  const onClickLink = (e: React.MouseEvent, sectionId: string) => {
    if (isSmallScreen && closeMenu) {
      e.preventDefault();
      closeMenu();
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 350);
    }
  };

  const getLinkClassName = (section: string) => {
    if (pathname.startsWith("/project")) return "";
    return currentSection === section ? classes.active : "";
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((n) => n.id);
      let closestSection: string | null = null;
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const distance = Math.abs(el.getBoundingClientRect().top);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
          }
        }
      });

      if (closestSection && closestSection !== currentSection) {
        setCurrentSection(closestSection);
        setActive?.(closestSection);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [currentSection, setActive]);

  return (
    <div className={classes.container}>
      <div className={classes.name}>DENLIE HOO</div>
      <div className={classes.title}>
        <TypingEffect />
      </div>

      <nav className={classes.navLinks}>
        {NAV_ITEMS.map(({ id, label }) => (
          <Link
            key={id}
            id={`${id}Link`}
            href={`/#${id}`}
            className={getLinkClassName(id)}
            onClick={(e) => onClickLink(e, id)}
          >
            <span className={classes.indicator} />
            {label}
          </Link>
        ))}
      </nav>

      <div className={classes.icons}>
        <LogoRedirect
          width={40}
          height={40}
          url="https://github.com/denliehoo"
          icon={EInteractableIcons.GITHUB}
        />
        <LogoRedirect
          width={40}
          height={40}
          url="https://www.linkedin.com/in/denlie-hoo/"
          icon={EInteractableIcons.LINKEDIN}
        />
        <LogoRedirect
          width={40}
          height={40}
          url="https://medium.com/@denliehoo"
          icon={EInteractableIcons.MEDIUM}
        />
      </div>
    </div>
  );
};

export default Navbar;

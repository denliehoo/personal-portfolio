"use client";

import Link from "next/link";
import classes from "./Navbar.module.css";
import { usePathname } from "next/navigation";
import LogoRedirect from "../LogoRedirect/LogoRedirect";
import TypingEffect from "./TypingEffect";

const Navbar = () => {
  const path = usePathname();

  return (
    <>
      <div className={classes.name}>DENLIE HOO</div>
      <div className={classes.title}>
        <TypingEffect />
        {/* Full-Stack Developer | Blockchain Developer */}
      </div>

      <nav className={classes.navLinks}>
        <Link href="/" className={path === "/" ? classes.active : ""}>
          About
        </Link>
        <Link
          href="/projects"
          className={path.startsWith("/projects") ? classes.active : ""}
        >
          Projects
        </Link>
        <Link
          href="/experiences"
          className={path === "/experiences" ? classes.active : ""}
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
    </>
  );
};

export default Navbar;

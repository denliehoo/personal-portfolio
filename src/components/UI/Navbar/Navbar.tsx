"use client";

import Link from "next/link";
import classes from "./Navbar.module.css";
import { usePathname } from "next/navigation";
import LogoRedirect from "../LogoRedirect/LogoRedirect";
import TypingEffect from "./TypingEffect";

const Navbar = (props: any) => {
  const { isSmallScreen, closeMenu } = props;
  const onClickLink = () => {
    if (isSmallScreen) {
      closeMenu();
    }
  };
  const path = usePathname();

  return (
    <div className={classes.container}>
      <div className={classes.name}>DENLIE HOO</div>
      <div className={classes.title}>
        <TypingEffect />
      </div>

      <nav className={classes.navLinks}>
        <Link
          href="/"
          className={path === "/" ? classes.active : ""}
          onClick={onClickLink}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={path.startsWith("/projects") ? classes.active : ""}
          onClick={onClickLink}
        >
          Projects
        </Link>
        <Link
          href="/experiences"
          className={path === "/experiences" ? classes.active : ""}
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

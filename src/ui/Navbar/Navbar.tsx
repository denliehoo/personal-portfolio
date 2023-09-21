"use client";

import Link from "next/link";
import classes from "./Navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  return (
    <>
      <div>
        <h1>DENLIE HOO</h1>
        <p>Full-Stack Developer | Blockchain Developer</p>
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
    </>
  );
};

export default Navbar;

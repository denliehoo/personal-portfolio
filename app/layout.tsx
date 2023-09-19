"use client";

import Link from "next/link";
import classes from "./layout.module.css";
import LogoRedirect from "@/src/ui/LogoRedirect/LogoRedirect";
import "./globals.css";
import type { Metadata } from "next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ overflow: "hidden" }}>
        <div className={classes.container}>
          <div className={classes.left}>
            <div>
              <h1>DENLIE HOO</h1>
              <p>Full-Stack Developer | Blockchain Developer</p>
            </div>
            <nav className={classes.navLinks}>
              <Link href="/"> About </Link>
              <Link href="/projects"> Projects </Link>
              <Link href="/experiences"> Experiences </Link>
            </nav>
            <div>
              <LogoRedirect
                src="/github.svg"
                alt="Github Logo"
                width={50}
                height={50}
                url="https://github.com/denliehoo"
              />
              <LogoRedirect
                src="/linkedin.svg"
                alt="LinkedIn Logo"
                width={50}
                height={50}
                url="https://www.linkedin.com/in/denlie-hoo/"
              />
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.children}>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}

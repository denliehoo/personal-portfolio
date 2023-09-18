"use client";
import Image from "next/image";
import Link from "next/link";
import classes from "./page.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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
              <Image
                src="/github.svg"
                alt="Github Logo"
                width={50}
                height={50}
                priority
                className={classes.logo}
                onClick={() =>
                  window.open("https://github.com/denliehoo", "_blank")
                }
              />
              <Image
                src="/linkedin.svg"
                alt="LinkedIn Logo"
                width={50}
                height={50}
                priority
                className={classes.logo}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/denlie-hoo/",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
          <div className={classes.right}>{children}</div>
        </div>
      </body>
    </html>
  );
}

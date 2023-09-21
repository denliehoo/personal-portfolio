import Link from "next/link";
import classes from "./layout.module.css";
import LogoRedirect from "@/src/ui/LogoRedirect/LogoRedirect";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/src/ui/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Denlie Hoo",
  description: "Denlie Hoo's developer portfolio",
};

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
            <Navbar />

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
          <div className={classes.right}>{children}</div>
        </div>
      </body>
    </html>
  );
}

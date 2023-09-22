import Link from "next/link";
import classes from "./layout.module.css";
import LogoRedirect from "@/src/ui/LogoRedirect/LogoRedirect";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/src/ui/Navbar/Navbar";
import Hamburger from "@/src/ui/Navbar/Hamburger";

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
      <body>
        <div className={classes.container}>
          <div className={classes.left}>
            <Navbar />
          </div>
          <div className={classes.top}>
            <Hamburger />
            {/* <Navbar /> */}
          </div>
          <div className={classes.right}>{children}</div>
        </div>
      </body>
    </html>
  );
}

import classes from "./layout.module.css";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/src/ui/Navbar/Navbar";
import MenuNavbar from "@/src/ui/Navbar/MenuNavbar";

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
            <MenuNavbar />
          </div>
          <div className={classes.right}>{children}</div>
        </div>
      </body>
    </html>
  );
}

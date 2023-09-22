import classes from "./layout.module.css";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/src/ui/Navbar/Navbar";
import MenuNavbar from "@/src/ui/Navbar/MenuNavbar";
import Layout from "@/src/ui/Layout/Layout";

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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

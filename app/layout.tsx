import Layout from "@/src/components/Layout";
import "./globals.css";
import type { Metadata } from "next";

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

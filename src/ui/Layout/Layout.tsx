"use client";
import { useWindowSize } from "@/src/hooks/useWindowSize";
import MenuNavbar from "../Navbar/MenuNavbar";
import Navbar from "../Navbar/Navbar";
import classes from "./Layout.module.css";
import { use, useEffect, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { width } = useWindowSize();
  const [isJustOpened, setIsJustOpened] = useState(true);

  useEffect(() => {
    setIsJustOpened(false);
  }, []);

  return (
    <>
      <div className={classes.container}>
        {width && width > 680 ? (
          <div className={classes.left}>
            <Navbar />
          </div>
        ) : (
          <div className={classes.top}>
            <MenuNavbar isJustOpened={isJustOpened} />
          </div>
        )}

        <div className={classes.right}>{children}</div>
      </div>
    </>
  );
};

export default Layout;

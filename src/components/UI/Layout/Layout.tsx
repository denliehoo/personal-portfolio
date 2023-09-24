"use client";
import { useWindowSize } from "@/src/hooks/useWindowSize";
import MenuNavbar from "../Navbar/MenuNavbar";
import Navbar from "../Navbar/Navbar";
import classes from "./Layout.module.css";
import { useEffect, useState } from "react";
import Backdrop from "../Modal/Backdrop";
import Loader from "../Loader/Loader";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { width } = useWindowSize();
  const [backdrop, setBackDrop] = useState(true);
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount(1);
  }, []);
  useEffect(() => {
    // width is 0px upon first render. Hence, we put renderCount(1) on the first render
    // to "delay" it. And then, we setBackdrop to false only when renderCount is 1 (i.e. after )
    // we have the width. As such, this would:
    // should the menunavbar upon entering the first time (if less than 680)
    // or, show the loading screen and backdrop if > 680 for the first time
    renderCount === 1 && setBackDrop(false);
  }, [renderCount]);

  return (
    <>
      <div className={classes.container}>
        {backdrop && (
          <Backdrop isOpen={backdrop} onClose={() => {}}>
            <Loader />
          </Backdrop>
        )}
        {width && width > 680 ? (
          <div className={classes.left}>
            <Navbar />
          </div>
        ) : (
          <div className={classes.top}>
            <MenuNavbar isJustOpened={backdrop} />
          </div>
        )}

        <div className={classes.right}>{children}</div>
      </div>
    </>
  );
};

export default Layout;

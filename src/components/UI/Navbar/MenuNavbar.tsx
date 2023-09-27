"use client";
import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Backdrop from "../Modal/Backdrop";

const MenuNavbar = (props: any) => {
  const { isJustOpened, width, clickMenuCount } = props;
  const [menu, setMenu] = useState(isJustOpened);

  useEffect(() => {
    clickMenuCount > 0 && setMenu(true);
  }, [clickMenuCount]);

  useEffect(() => {
    menu && width > 700 && setMenu(false);
  }, [width]);

  return (
    <>
      {
        <Backdrop isOpen={menu} onClose={() => setMenu(false)} closable={true}>
          <Navbar isSmallScreen={true} closeMenu={() => setMenu(false)} />
        </Backdrop>
      }
    </>
  );
};

export default MenuNavbar;

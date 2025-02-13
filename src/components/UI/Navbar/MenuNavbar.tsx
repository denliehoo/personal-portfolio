"use client";
import { FC, useEffect, useState } from "react";

import Navbar from "./Navbar";
import Backdrop from "../Modal/Backdrop";

interface IMenuNavBar {
  isJustOpened: boolean;
  width: number | undefined;
  clickMenuCount: number;
}

const MenuNavbar: FC<IMenuNavBar> = ({
  isJustOpened,
  width,
  clickMenuCount,
}) => {
  const [menu, setMenu] = useState(isJustOpened);

  useEffect(() => {
    clickMenuCount > 0 && setMenu(true);
  }, [clickMenuCount]);

  useEffect(() => {
    menu && width && width > 700 && setMenu(false);
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

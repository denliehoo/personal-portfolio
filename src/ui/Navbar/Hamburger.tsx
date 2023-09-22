"use client";
import { useState } from "react";
import classes from "./Hamburger.module.css";
import { usePathname } from "next/navigation";
import Modal from "../Modal/Modal";
import Navbar from "./Navbar";

const Hamburger = () => {
  const [menu, setMenu] = useState(true); // true by default
  const path = usePathname();
  console.log(path);

  const getActivePath = (path: string) => {
    if (path === "/") {
      return "About";
    } else if (path === "/experiences") {
      return "Experiences";
    } else if (path.startsWith("/projects")) {
      return "Projects";
    } else {
      // means path not found
      return "You're Lost!";
    }
  };

  const activePath = getActivePath(path);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.path}>Denlie Hoo - {activePath}</div>
        {/* <div onClick={() => setMenu(true)} className={classes.icon}>
          {icon}
        </div> */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            onClick={() => setMenu(true)}
            className={classes.icon}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
      </div>
      {menu && (
        <Modal isOpen={menu} onClose={() => setMenu(false)} title="">
          <Navbar isSmallScreen={true} closeMenu={() => setMenu(false)} />
        </Modal>
      )}
    </>
  );
};

export default Hamburger;
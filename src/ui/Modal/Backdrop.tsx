"use client";

import React, { useEffect, useState } from "react";
import classes from "./Backdrop.module.css";

interface BackdropProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({ isOpen, onClose, children }) => {
  const [isBackDropOpen, setIsBackDropOpen] = useState(isOpen);

  useEffect(() => {
    setIsBackDropOpen(isOpen);
  }, [isOpen]);

  const handleDrawerClose = () => {
    setIsBackDropOpen(false);
    onClose();
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleDrawerClose();
      }
    };

    if (isBackDropOpen) {
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isBackDropOpen]);

  return (
    <div
      className={[classes.overlay, isBackDropOpen ? classes.open : ""].join(
        " "
      )}
    >
      <div className={classes.content}>
        <>
          <div className={classes.closeContainer}>
            <div
              className={classes.close}
              style={{ cursor: "pointer", color: "wheat" }}
              onClick={() => {
                handleDrawerClose();
              }}
            >
              &times;
            </div>
          </div>
          {children}
        </>
      </div>
    </div>
  );
};

export default Backdrop;

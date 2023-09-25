"use client";

import React, { useEffect, useState } from "react";
import classes from "./Backdrop.module.css";

interface BackdropProps {
  isOpen: boolean;
  onClose: () => void;
  closable?: boolean;
  children: React.ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({
  isOpen,
  onClose,
  children,
  closable,
}) => {
  const [isBackDropOpen, setIsBackDropOpen] = useState(isOpen);

  useEffect(() => {
    setIsBackDropOpen(isOpen);
  }, [isOpen]);

  const handleDrawerClose = () => {
    setIsBackDropOpen(false);
    onClose();
  };

  return (
    <div
      className={[classes.overlay, isBackDropOpen ? classes.open : ""].join(
        " "
      )}
    >
      <div className={classes.content}>
        <>
          {closable && (
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
          )}
          {children}
        </>
      </div>
    </div>
  );
};

export default Backdrop;

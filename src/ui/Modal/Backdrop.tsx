"use client";

import React, { useEffect } from "react";
import classes from "./Backdrop.module.css";

interface BackdropProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({ isOpen, onClose, children }) => {
  const closeModal = () => {
    onClose();
  };
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className={classes.overlay}>
      <div className={classes.content}>
        <div className={classes.closeContainer}>
          <div
            className={classes.close}
            style={{ cursor: "pointer", color: "wheat" }}
            onClick={() => {
              onClose();
            }}
          >
            &times;
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Backdrop;

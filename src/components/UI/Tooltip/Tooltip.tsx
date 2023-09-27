import React, { useState, ReactNode, ReactElement } from "react";
import styles from "./Tooltip.module.css"; // Import your CSS module

interface TooltipProps {
  text: string;
  children: ReactNode;
}

const Tooltip = ({ text, children }: TooltipProps): ReactElement => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div className={`${styles.tooltip} ${showTooltip ? styles.show : ""}`}>
        {text}
      </div>
    </div>
  );
};

export default Tooltip;

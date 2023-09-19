"use client";

import Image from "next/image";
import classes from "./LogoRedirect.module.css";

interface LogoRedirectProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  url: string;
}

const LogoRedirect: React.FC<LogoRedirectProps> = ({
  src,
  alt,
  width,
  height,
  url,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority
      className={classes.logo}
      onClick={() => window.open(url, "_blank")}
    />
  );
};

export default LogoRedirect;

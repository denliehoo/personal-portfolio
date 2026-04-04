"use client";

import classes from "./index.module.css";
import Image from "next/image";
import { IProject } from "../../types";
import { FC } from "react";
import ProjectIcons from "./Icons";
import { useFadeIn } from "@/src/hooks/useFadeIn";

const Project: FC<IProject> = ({
  imgSrc,
  imgAlt,
  name,
  medium,
  website,
  github,
  shortDescription,
  tags,
}) => {
  const ref = useFadeIn();

  return (
    <div ref={ref} className={`fade-in ${classes.container}`}>
      <div className={classes.imageWrapper}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={500}
          height={243}
          priority
          className={classes.image}
        />
      </div>
      <div className={classes.details}>
        <div className={classes.name}>{name}</div>
        <div className={classes.description}>{shortDescription}</div>
        <div className={classes.tags}>
          {tags.map((t) => (
            <span className={classes.tag} key={`${name}-${t}`}>
              {t}
            </span>
          ))}
        </div>
        <ProjectIcons github={github} medium={medium} website={website} />
      </div>
    </div>
  );
};

export default Project;

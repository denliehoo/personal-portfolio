"use client";
import { FC } from "react";
import { IExperience } from "../../types";
import classes from "./index.module.css";
import { useFadeIn } from "@/src/hooks/useFadeIn";

const Experience: FC<{ experience: IExperience }> = ({ experience }) => {
  const { date, title, company, pointers } = experience;
  const ref = useFadeIn();

  return (
    <div ref={ref} className={`fade-in ${classes.container}`}>
      <div className={classes.timeline}>
        <div className={classes.dot} />
        <div className={classes.line} />
      </div>
      <div className={classes.content}>
        <div className={classes.date}>{date}</div>
        <div className={classes.title}>{title}</div>
        <div className={classes.company}>{company}</div>
        <ul className={classes.pointers}>
          {pointers.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;

import { FC } from "react";
import { IExperience } from "../../types";
import classes from "./Experience.module.css";

const Experience: FC<{ experience: IExperience }> = ({ experience }) => {
  const { date, title, company, pointers } = experience;
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.title}>{title}</div>
        <div className={classes.date}>{date}</div>
      </div>

      <div className={classes.company}>{company}</div>
      <div className={classes.pointers}>
        {pointers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </div>
    </div>
  );
};

export default Experience;

import { IExperience } from "../types";
import classes from "./Experience.module.css";

const Experience: React.FC<{ experience: IExperience }> = ({ experience }) => {
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

// const date = "DEC 2021 - PRESENT";
// const title = "Web Developer";
// const company = "TLV Fintech Solutions";
// const pointers = [
//   "Did XXX",
//   "Did yyy in 10 working days to do something and something test test and that",
//   "Did ZZZ later finish more test",
// ];

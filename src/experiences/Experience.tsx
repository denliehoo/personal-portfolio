import classes from "./Experience.module.css";

const date = "DEC 2021 - PRESENT";
const title = "Web Developer";
const company = "TLV Fintech Solutions";
const pointers = [
  "Did XXX",
  "Did yyy in 10 working days to do something and something test test and that",
  "Did ZZZ later finish more test",
];

const Experience = () => {
  return (
    <div className={classes.container}>
      <div className={classes.date}>{date}</div>
      <div className={classes.details}>
        <div className={classes.title}>{title}</div>
        <div className={classes.company}>{company}</div>
        <div className={classes.pointers}>
          {pointers.map((p) => (
            <li>{p}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

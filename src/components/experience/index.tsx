"use client";
import { FC } from "react";
import { IExperience } from "../../types";
import classes from "./index.module.css";
import { useFadeIn } from "@/src/hooks/useFadeIn";

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={12}
    height={12}
    fill="currentColor"
  >
    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
  </svg>
);

const Experience: FC<{ experience: IExperience }> = ({ experience }) => {
  const { date, title, company, pointers, articles } = experience;
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
        {articles && articles.length > 0 && (
          <div className={classes.articles}>
            {articles.map((a) => (
              <a
                key={a.url}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.articleLink}
              >
                <ExternalLinkIcon />
                {a.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;

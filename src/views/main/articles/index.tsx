"use client";
import React from "react";
import { articles } from "@/src/content/articles";
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

const ArticleCard = ({ article }: { article: (typeof articles)[0] }) => {
  const ref = useFadeIn<HTMLAnchorElement>();

  return (
    <a
      ref={ref}
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`fade-in ${classes.card}`}
    >
      <div className={classes.header}>
        <span className={classes.sourceLabel}>{article.sourceLabel}</span>
        <ExternalLinkIcon />
      </div>
      <div className={classes.title}>{article.title}</div>
      <div className={classes.description}>{article.description}</div>
      {/* <div className={classes.tags}>
        {article.tags.map((tag) => (
          <span key={tag} className={classes.tag}>
            {tag}
          </span>
        ))}
      </div> */}
    </a>
  );
};

const ArticleList = () => {
  return (
    <>
      <h2 className="section-title">Articles</h2>
      <div className={classes.grid}>
        {articles.map((a) => (
          <ArticleCard key={a._id} article={a} />
        ))}
      </div>
    </>
  );
};

export default ArticleList;

"use client";
import Project from "@/src/components/Projects";
import classes from "./index.module.css";
import { IMainProps } from "@/src/types";
import React, { FC, useState } from "react";

interface IProjectList extends Pick<IMainProps, "pinned" | "others"> {}

const ProjectList: FC<IProjectList> = ({ pinned, others }) => {
  const [viewOthers, setViewOthers] = useState(false);

  return (
    <>
      <h2 className="section-title">Projects</h2>
      {pinned.map((p) => (
        <Project key={p._id.toString()} {...p} />
      ))}
      {viewOthers &&
        others.map((p) => <Project key={p._id.toString()} {...p} />)}
      <button
        className={classes.view}
        onClick={() => setViewOthers(!viewOthers)}
      >
        {viewOthers ? (
          <>&larr; Hide other projects</>
        ) : (
          <>View other projects &rarr;</>
        )}
      </button>
    </>
  );
};

export default ProjectList;

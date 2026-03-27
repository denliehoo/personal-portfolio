"use client";
import Project from "@/src/components/Projects";
import classes from "./index.module.css";
import React, { useState } from "react";
import { pinned, others } from "@/src/content/projects";

const ProjectList = () => {
  const [viewOthers, setViewOthers] = useState(false);

  return (
    <>
      <h2 className="section-title">Projects</h2>
      {pinned.map((p) => (
        <Project key={p._id} {...p} />
      ))}
      {viewOthers &&
        others.map((p) => <Project key={p._id} {...p} />)}
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

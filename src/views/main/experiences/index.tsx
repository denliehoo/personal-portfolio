"use client";
import Experience from "@/src/components/experience";
import React, { useState } from "react";
import { pinnedExperiences, otherExperiences } from "@/src/content/experiences";
import classes from "./index.module.css";

const ExperienceList = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <h2 className="section-title">Experiences</h2>
      {pinnedExperiences.map((e) => (
        <Experience key={e._id} experience={e} />
      ))}
      {showMore && otherExperiences.map((e) => (
        <Experience key={e._id} experience={e} />
      ))}
      {otherExperiences.length > 0 && (
        <button className={classes.view} onClick={() => setShowMore(!showMore)}>
          {showMore ? <>&larr; Hide earlier experiences</> : <>Show earlier experiences &rarr;</>}
        </button>
      )}
    </>
  );
};

export default ExperienceList;

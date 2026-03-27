"use client";
import Experience from "@/src/components/experience";
import React from "react";
import { experiences } from "@/src/content/experiences";

const ExperienceList = () => {
  return (
    <>
      <h2 className="section-title">Experiences</h2>
      {experiences.map((e) => (
        <Experience key={e._id} experience={e} />
      ))}
    </>
  );
};

export default ExperienceList;

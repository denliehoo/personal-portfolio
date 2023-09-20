"use client;";

import React, { FC, useState } from "react";
import classes from "./ProjectModal.module.css";
import Modal from "../ui/Modal/Modal";
import LogoRedirect from "../ui/LogoRedirect/LogoRedirect";

interface ProjectModalProps {
  longDescription: string[];
  medium: string;
  github: string;
  website: string;
  name: string;
  isOpen: boolean;
  imgSrc: string;
  imgAlt: string;
  onClose: () => void;
}

const ProjectModal: FC<ProjectModalProps> = ({
  longDescription,
  medium,
  github,
  website,
  name,
  isOpen,
  onClose,
  imgSrc,
  imgAlt,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={name}>
      <img
        src={imgSrc}
        style={{ height: "70%", width: "100%", margin: "10px 0" }}
      />
      <div>
        {website && (
          <LogoRedirect width={30} height={30} url={website} icon="website" />
        )}
        {github && (
          <LogoRedirect width={30} height={30} url={github} icon="github" />
        )}

        {medium && (
          <LogoRedirect width={30} height={30} url={medium} icon="medium" />
        )}
      </div>
      {longDescription.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </Modal>
  );
};

export default ProjectModal;

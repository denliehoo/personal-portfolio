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
          <LogoRedirect
            src="/website.svg"
            alt="Website Logo"
            width={30}
            height={30}
            url={website}
          />
        )}
        {github && (
          <LogoRedirect
            src="/github.svg"
            alt="Github Logo"
            width={30}
            height={30}
            url={github}
          />
        )}

        {medium && (
          <LogoRedirect
            src="/medium.svg"
            alt="Medium Logo"
            width={30}
            height={30}
            url={medium}
          />
        )}
      </div>
      {longDescription.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </Modal>
  );
};

export default ProjectModal;

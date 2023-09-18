"use client;";

import React, { FC, useState } from "react";
import classes from "./ProjectModal.module.css";
import Modal from "../ui/Modal/Modal";
import Image from "next/image";

interface ProjectModalProps {
  longDescription: string;
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
      <img src={imgSrc} style={{ height: "75%", width: "100%" }} />
      <div>
        {website && (
          <Image
            src="/website.svg"
            alt="Website Logo"
            width={30}
            height={30}
            priority
            className={classes.logo}
            onClick={() => window.open(website, "_blank")}
          />
        )}
        {github && (
          <Image
            src="/github.svg"
            alt="Github Logo"
            width={30}
            height={30}
            priority
            className={classes.logo}
            onClick={() => window.open(github, "_blank")}
          />
        )}

        {medium && (
          <Image
            src="/medium.svg"
            alt="Medium Logo"
            width={30}
            height={30}
            priority
            className={classes.logo}
            onClick={() => window.open(medium, "_blank")}
          />
        )}
      </div>
      <p>{longDescription}</p>
    </Modal>
  );
};

export default ProjectModal;

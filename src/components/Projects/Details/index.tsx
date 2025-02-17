import Link from "next/link";
import classes from "./index.module.css";
import LogoRedirect from "@/src/components/logo-redirect";
import { IProject } from "@/src/types/index";
import Image from "next/image";
import { EInteractableIcons } from "@/src/enum";
import { FC } from "react";

// Currenty not used

const ProjectDetails: FC<{ project: IProject }> = ({ project }) => {
  const {
    imgSrc,
    imgAlt,
    name,
    longDescription,
    medium,
    website,
    github,
    isPinned,
  } = project;
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <Link
          href={isPinned ? "/#pinned" : "/#others"}
          className={classes.back}
        >
          &#8592; Back To {isPinned ? "Pinned" : "Other"} Projects
        </Link>

        <div className={classes.name}>{name}</div>
      </div>
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div className={classes.icons}>
        {website && (
          <LogoRedirect
            width={30}
            height={30}
            url={website}
            icon={EInteractableIcons.WEBSITE}
          />
        )}
        {github && (
          <LogoRedirect
            width={30}
            height={30}
            url={github}
            icon={EInteractableIcons.GITHUB}
          />
        )}

        {medium && (
          <LogoRedirect
            width={30}
            height={30}
            url={medium}
            icon={EInteractableIcons.MEDIUM}
          />
        )}
      </div>
      {longDescription?.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  );
};

export default ProjectDetails;

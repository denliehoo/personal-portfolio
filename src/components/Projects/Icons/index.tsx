import { EInteractableIcons } from "@/src/enum";
import { IProject } from "@/src/types";
import { FC } from "react";
import ProjectIcon from "./ProjectIcon";
import classes from "./index.module.css";

interface IProjectIcons
  extends Pick<IProject, "github" | "website" | "medium"> {}

const ProjectIcons: FC<IProjectIcons> = ({ github, website, medium }) => {
  const iconList = [
    { url: github, icon: EInteractableIcons.GITHUB },
    { url: website, icon: EInteractableIcons.WEBSITE },
    { url: medium, icon: EInteractableIcons.MEDIUM },
  ];
  return (
    <div className={classes.icons}>
      {iconList.map(({ url, icon }) => (
        <ProjectIcon url={url} icon={icon} />
      ))}
    </div>
  );
};

export default ProjectIcons;

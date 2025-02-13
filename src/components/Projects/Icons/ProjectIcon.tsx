import { FC } from "react";
import Tooltip from "../../UI/Tooltip/Tooltip";
import LogoRedirect from "../../UI/LogoRedirect/LogoRedirect";
import { EInteractableIcons } from "@/src/enum";

interface IProjectIcon {
  url: string | undefined;
  icon: EInteractableIcons;
}

const ICON_TOOLTIP_TEXT_MAPPING: Record<EInteractableIcons, string> = {
  [EInteractableIcons.GITHUB]: "Code",
  [EInteractableIcons.WEBSITE]: "Website",
  [EInteractableIcons.MEDIUM]: "Learn More",
  [EInteractableIcons.LINKEDIN]: "",
};

const ProjectIcon: FC<IProjectIcon> = ({ url, icon }) => {
  if (!url) {
    return null;
  }
  return (
    <Tooltip text={ICON_TOOLTIP_TEXT_MAPPING[icon]}>
      <LogoRedirect width={30} height={30} url={url} icon={icon} />
    </Tooltip>
  );
};

export default ProjectIcon;

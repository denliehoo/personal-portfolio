"use client";

import classes from "./Project.module.css";
import Image from "next/image";
// import Link from "next/link";
import { IProject } from "../../types";
import LogoRedirect from "../UI/LogoRedirect/LogoRedirect";
import Tooltip from "../UI/Tooltip/Tooltip";

const Project: React.FC<{ project: IProject }> = ({ project }) => {
  const {
    imgSrc,
    imgAlt,
    name,
    longDescription,
    medium,
    website,
    github,
    path,
    shortDescription,
    tags,
  } = project;

  return (
    <div className={classes.container}>
      <Image
        src={imgSrc}
        alt={imgAlt}
        // width={100}
        // height={48.61}
        width={125}
        height={60.76}
        priority
        className={classes.image}
      />
      <div className={classes.details}>
        <div className={classes.name}>{name}</div>
        <div className={classes.description}>{shortDescription}</div>
        <div className={classes.tags}>
          {tags.map((t) => (
            <div className={classes.tag} key={`${name}-${t}`}>
              {t}
            </div>
          ))}
        </div>
        <div className={classes.icons}>
          {website && (
            <Tooltip text="Website">
              <LogoRedirect
                width={30}
                height={30}
                url={website}
                icon="website"
              />
            </Tooltip>
          )}
          {github && (
            <Tooltip text="Code">
              <LogoRedirect width={30} height={30} url={github} icon="github" />
            </Tooltip>
          )}

          {medium && (
            <Tooltip text="Learn More">
              <LogoRedirect width={30} height={30} url={medium} icon="medium" />
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;

// const imgSrc = "/multiswap.png";
// const imgAlt = "multiswap";
// const name = "Project Name";
// const path = "multiswap";
// const shortDescription =
//   "This is the project's short description which shouldnt be too long. Perhaps maybe just 30 words or so? Just keep it short cheers and see how it goes for now. Maybe can increase if needed";
// const longDescription = [
//   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic iusto fugiat voluptatem obcaecati libero praesentium autem rem nihil optio ullam consequuntur nam vel reiciendis suscipit.",
//   "Doloremque, repellat, architecto eos sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic iusto fugiat voluptatem obcaecati libero praesentium autem rem nihil optio ullam consequuntur nam vel reiciendis suscipit doloremque, repellat, architecto eos sit.",
//   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic iusto fugiat voluptatem obcaecati libero praesentium autem rem nihil optio ullam consequuntur nam vel reiciendis.",
//   "Suscipit doloremque, repellat, architecto eos sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic iusto fugiat voluptatem obcaecati libero praesentium autem rem nihil optio ullam consequuntur nam vel reiciendis suscipit doloremque, repellat, architecto.",
//   "Eos sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic iusto fugiat voluptatem.",
//   "Obcaecati libero praesentium autem rem nihil optio ullam consequuntur nam vel reiciendis suscipit doloremque, repellat, architecto eos sit.",
// ];
// const medium =
//   "https://medium.com/@denliehoo/developing-multiswap-a-decentralized-application-for-swapping-to-and-fro-multiple-coins-tokens-20b10d45f1b";
// const website = "https://multiswap-b2243.web.app/";
// const github = "https://github.com/denliehoo/multi-swap";

import Link from "next/link";
import classes from "./ProjectDetails.module.css";
import LogoRedirect from "@/src/components/UI/LogoRedirect/LogoRedirect";
import { IProject } from "@/src/types/index";
import Image from "next/image";

const ProjectDetails: React.FC<{ project: IProject }> = ({ project }) => {
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
          <LogoRedirect width={30} height={30} url={website} icon="website" />
        )}
        {github && (
          <LogoRedirect width={30} height={30} url={github} icon="github" />
        )}

        {medium && (
          <LogoRedirect width={30} height={30} url={medium} icon="medium" />
        )}
      </div>
      {longDescription.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  );
};

export default ProjectDetails;

// const imgSrc = "/multiswap.png";
// const imgAlt = "multiswap";
// const name = "Project Name";
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

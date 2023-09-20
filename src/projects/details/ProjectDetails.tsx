import Link from "next/link";
import classes from "./ProjectDetails.module.css";
import Image from "next/image";
import LogoRedirect from "@/src/ui/LogoRedirect/LogoRedirect";

const imgSrc = "/multiswap.png";
const imgAlt = "multiswap";
const name = "Project Name";
const path = "multiswap";
const shortDescription =
  "This is the project's short description which shouldnt be too long. Perhaps maybe just 30 words or so? Just keep it short cheers and see how it goes for now. Maybe can increase if needed";
const longDescription = [
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic iusto fugiat voluptatem obcaecati libero praesentium autem rem nihil optio ullam consequuntur nam vel reiciendis suscipit.",
  "Doloremque, repellat, architecto eos sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic iusto fugiat voluptatem obcaecati libero praesentium autem rem nihil optio ullam consequuntur nam vel reiciendis suscipit doloremque, repellat, architecto eos sit.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic iusto fugiat voluptatem obcaecati libero praesentium autem rem nihil optio ullam consequuntur nam vel reiciendis.",
  "Suscipit doloremque, repellat, architecto eos sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic iusto fugiat voluptatem obcaecati libero praesentium autem rem nihil optio ullam consequuntur nam vel reiciendis suscipit doloremque, repellat, architecto.",
  "Eos sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic iusto fugiat voluptatem.",
  "Obcaecati libero praesentium autem rem nihil optio ullam consequuntur nam vel reiciendis suscipit doloremque, repellat, architecto eos sit.",
];
const medium =
  "https://medium.com/@denliehoo/developing-multiswap-a-decentralized-application-for-swapping-to-and-fro-multiple-coins-tokens-20b10d45f1b";
const website = "https://multiswap-b2243.web.app/";
const github = "https://github.com/denliehoo/multi-swap";

const ProjectDetails = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <Link href="/projects" className={classes.back}>
          &#8592; Back To Projects
        </Link>

        <h2>{name}</h2>
      </div>

      <img src={imgSrc} className={classes.image} />
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
      {longDescription.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </div>
  );
};

export default ProjectDetails;

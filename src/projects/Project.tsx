"use client";

import { useState } from "react";
import classes from "./Project.module.css";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

const imgSrc = "/multiswap.png";
const imgAlt = "multiswap";
const name = "Project Name";
const shortDescription =
  "This is the project's short description which shouldnt be too long. Perhaps maybe just 30 words or so? Just keep it short cheers and see how it goes for now. Maybe can increase if needed";
const longDescription =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic iusto fugiat voluptatem obcaecati libero praesentium autem rem nihil optio ullam consequuntur nam vel reiciendis suscipit doloremque, repellat, architecto eos sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic iusto fugiat voluptatem obcaecati libero praesentium autem rem nihil optio ullam consequuntur nam vel reiciendis suscipit doloremque, repellat, architecto eos sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic iusto fugiat voluptatem obcaecati libero praesentium autem rem nihil optio ullam consequuntur nam vel reiciendis suscipit doloremque, repellat, architecto eos sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic iusto fugiat voluptatem obcaecati libero praesentium autem rem nihil optio ullam consequuntur nam vel reiciendis suscipit doloremque, repellat, architecto eos sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic iusto fugiat voluptatem obcaecati libero praesentium autem rem nihil optio ullam consequuntur nam vel reiciendis suscipit doloremque, repellat, architecto eos sit.";
const medium =
  "https://medium.com/@denliehoo/developing-multiswap-a-decentralized-application-for-swapping-to-and-fro-multiple-coins-tokens-20b10d45f1b";
const website = "https://multiswap-b2243.web.app/";
const github = "https://github.com/denliehoo/multi-swap";
const Project = (props: any) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div
        className={classes.container}
        onClick={() => {
          console.log("open mod");
          setModal(true);
        }}
      >
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={100}
          height={56.25}
          priority
          className={classes.image}
        />
        <div className={classes.details}>
          <div className={classes.name}>{name}</div>
          <div className={classes.description}>{shortDescription}</div>
        </div>
      </div>
      <ProjectModal
        longDescription={longDescription}
        medium={medium}
        github={github}
        website={website}
        name={name}
        isOpen={modal}
        imgAlt={imgAlt}
        imgSrc={imgSrc}
        onClose={() => {
          console.log("closemodal");
          setModal(false);
        }}
      />
    </>
  );
};

export default Project;

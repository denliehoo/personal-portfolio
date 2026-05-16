export interface IProject {
  imgSrc: string;
  imgAlt: string;
  name: string;
  path?: string;
  shortDescription: string;
  longDescription?: string[];
  medium?: string;
  website?: string;
  github?: string;
  tags: string[];
  _id: string;
}

export interface IExperience {
  date: string;
  title: string;
  company: string;
  pointers: string[];
  articles?: { title: string; url: string }[];
  _id: string;
}

export interface IArticle {
  _id: string;
  title: string;
  url: string;
  description: string;
  tags: string[];
  source: "work" | "project";
  sourceLabel: string;
}

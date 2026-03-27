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
  _id: string;
}

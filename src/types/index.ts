export interface IProject {
  imgSrc: string;
  imgAlt: string;
  name: string;
  path: string;
  shortDescription: string;
  longDescription: string[];
  medium: string;
  website: string;
  github: string;
  isPinned: boolean;
}

export interface IExperience {
  date: string;
  title: string;
  company: string;
  pointers: string[];
}

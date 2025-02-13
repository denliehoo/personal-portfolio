import { ObjectId } from "mongodb";

export interface IProject {
  imgSrc: string;
  imgAlt: string;
  name: string;
  path?: string; // For future uses if we want to create a separate page
  shortDescription: string;
  longDescription?: string[]; // For future uses if we want to have more description
  medium?: string;
  website?: string;
  github?: string;
  isPinned: boolean;
  tags: string[];
  _id: ObjectId | string;
}

export interface IExperience {
  date: string;
  title: string;
  company: string;
  pointers: string[];
  _id: ObjectId | string;
}

export interface IMainProps {
  pinned: IProject[];
  others: IProject[];
  experiences: IExperience[];
}

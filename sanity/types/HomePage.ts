import type { ImageSanity } from "./ImageSanity";

export type History = {
  _key: string;
  style: string;
  children: {
    text: string;
  }[];
};

export type ActualityItem = {
  date?: string;
  image: ImageSanity;
  link: string;
  _key?: string;
  title: string;
  description?: string;
};

export type Actualities = ActualityItem[];

export interface HomePageData {
  history: History[];
  image: ImageSanity;
  actualitySection: Actualities;
}

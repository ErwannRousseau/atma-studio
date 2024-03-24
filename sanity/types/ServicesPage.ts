import type { ImageSanity } from "./ImageSanity";

export interface ServicesPageData {
  servicesList: TServicesList[];
}

export type TServicesList = {
  image: ImageSanity;
  description: string;
  _key: string;
  title: string;
};

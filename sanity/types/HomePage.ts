import type { ImageSanity } from "./ImageSanity";
import type { BlockContent } from "./objects/blockContent";

export type ActualityItem = {
  date?: string;
  image: ImageSanity;
  link: string;
  _key?: string;
  title: string;
  description?: string;
};

export interface HomePageData {
  history: BlockContent;
  image: ImageSanity;
  actualitySection: ActualityItem[];
}

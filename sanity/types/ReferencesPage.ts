import { ImageSanity } from './ImageSanity';

export interface ReferencePageData {
  referencesList: ReferenceItem[];
}

export type ReferenceItem = {
  link: string;
  artistName: string;
  _key: string;
  image: ImageSanity;
};

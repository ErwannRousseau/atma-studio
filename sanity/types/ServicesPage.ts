import { ImageSanity } from './ImageSanity';

export interface ServicesPageData {
  servicesList: ServicesList[];
}

export type ServicesList = {
  image: ImageSanity;
  description: string;
  _key: string;
  title: string;
};

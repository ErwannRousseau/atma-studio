import { ImageSanity } from './ImageSanity';

export interface StudioPageData {
  presentation: Presentation[];
  team: TeamMember[];
  imagePresentation: ImageSanity;
  equipmentsCategories: EquipmentsCategory[];
}

export type Presentation = {
  children: {
    text: string;
  }[];
  style: string;
};

export type TeamMember = {
  image: ImageSanity;
  role: string;
  name: string;
  quote: string;
  _key: string;
};

export type EquipmentsCategory = {
  icon: ImageSanity;
  title: string;
  _key: string;
  equipmentItem: EquipmentItem[];
};

export type EquipmentItem = {
  name: string;
  _key: string;
};

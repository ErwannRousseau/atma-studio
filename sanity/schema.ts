import type { SchemaTypeDefinition } from "sanity";

// import { imageAsset } from './schemas/imageAsset';

import { actualityItem, homePage } from "./schemas/homePage";
import { referenceItem, referencePage } from "./schemas/referencePage";
import { serviceItem, servicesPage } from "./schemas/servicesPage";
import {
  equipmentItem,
  equipmentsCategories,
  studioPage,
  teamMember,
} from "./schemas/studioPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    actualityItem,
    homePage,
    studioPage,
    equipmentsCategories,
    equipmentItem,
    teamMember,
    servicesPage,
    serviceItem,
    referenceItem,
    referencePage,
  ],
};

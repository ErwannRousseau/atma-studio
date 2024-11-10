import type { SchemaTypeDefinition } from "sanity";
import blockContent from "./schemas/objects/blockContent";
import { actualityItem, homePage } from "./schemas/singletons/homePage";
import {
  referenceItem,
  referencePage,
} from "./schemas/singletons/referencePage";
import { serviceItem, servicesPage } from "./schemas/singletons/servicesPage";
import {
  equipmentItem,
  equipmentsCategories,
  studioPage,
  teamMember,
} from "./schemas/singletons/studioPage";

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

    // Object types
    blockContent,
  ],
};

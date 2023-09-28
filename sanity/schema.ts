import { type SchemaTypeDefinition } from 'sanity';

// import { imageAsset } from './schemas/imageAsset';

import { homePage, actualityItem } from './schemas/homePage';
import { referencePage, referenceItem } from './schemas/referencePage';
import { servicesPage, serviceItem } from './schemas/servicesPage';
import { studioPage, equipmentsCategories, equipmentItem, teamMember } from './schemas/studioPage';

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

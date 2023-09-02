import { type SchemaTypeDefinition } from 'sanity';

import { actualiteItem } from './schemas/actualiteItem';
import { equipmentItem } from './schemas/equipmentItem';
import { homePage } from './schemas/homePage';
// import { imageAsset } from './schemas/imageAsset';
import { referenceItem } from './schemas/referenceItem';
import { referencePage } from './schemas/referencePage';
import { serviceItem } from './schemas/serviceItem';
import { studioPage } from './schemas/studioPage';
// import { tag } from './schemas/tag';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    actualiteItem,
    equipmentItem,
    homePage,
    // imageAsset,
    referenceItem,
    referencePage,
    serviceItem,
    studioPage,
    // tag,
  ],
};

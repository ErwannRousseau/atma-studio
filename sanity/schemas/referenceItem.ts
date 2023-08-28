import { defineField, defineType } from 'sanity';

export const referenceItem = defineType({
  name: 'referenceItem',
  title: 'Référence',
  type: 'object',
  fields: [
    defineField({
      name: 'artistName',
      title: "Nom de l'Artiste",
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description de la Référence',
      type: 'text',
    }),
    defineField({
      name: 'link',
      title: 'Lien',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Image de la Référence',
      type: 'reference',
      to: [{ type: 'imageAsset' }],
    }),
  ],
});

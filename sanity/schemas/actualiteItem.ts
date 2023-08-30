import { defineField, defineType } from 'sanity';

export const actualiteItem = defineType({
  name: 'actualiteItem',
  title: 'Actualités',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'imageRef', // Renommé en "imageRef"
      title: "Image de l'actualité",
      type: 'reference',
      to: [{ type: 'imageAsset' }],
    }),
  ],
});

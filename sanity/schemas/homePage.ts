import { defineArrayMember, defineField, defineType } from 'sanity';

export const homePage = defineType({
  name: 'homepage',
  type: 'document',
  title: 'Accueil',
  fields: [
    defineField({
      name: 'content',
      title: 'Histoire',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'imageHome',
      title: 'Image Page Accueil',
      type: 'reference',
      to: [{ type: 'imageAsset' }],
    }),
    defineField({
      name: 'newsSection',
      title: 'Section Actualités',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'actualiteItem',
        }),
      ],
    }),
  ],
});

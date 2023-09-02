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
      name: 'image',
      title: 'Image Page Accueil',
      type: 'image',
      options: {
        hotspot: true,
      },
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

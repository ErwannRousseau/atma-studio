import { defineField, defineType } from 'sanity';

export const serviceItem = defineType({
  name: 'serviceItem',
  title: 'Service',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre du Service',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description du Service',
      type: 'text',
    }),
    defineField({
      name: 'images',
      title: 'Image du service',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});

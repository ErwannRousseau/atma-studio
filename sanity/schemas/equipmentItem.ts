import { defineField, defineType } from 'sanity';

export const equipmentItem = defineType({
  name: 'equipmentItem',
  title: 'Équipement',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: "Nom de l'équipement",
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: "Description de l'équipement",
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: "Photo de l'Équipement",
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});

import { defineArrayMember, defineField, defineType } from 'sanity';

export const studioPage = defineType({
  name: 'studioPage',
  type: 'document',
  title: 'Le Studio',
  fields: [
    defineField({
      name: 'content',
      title: 'Description du Studio',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'studioEquipment',
      title: 'Équipements du Studio',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'equipmentItem',
        }),
      ],
    }),
  ],
});

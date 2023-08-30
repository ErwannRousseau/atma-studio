import { defineArrayMember, defineField, defineType } from 'sanity';

export const studioPage = defineType({
  name: 'studioPage',
  type: 'document',
  title: 'Le Studio',
  fields: [
    defineField({
      name: 'studioDescription',
      title: 'Description du Studio',
      type: 'text',
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

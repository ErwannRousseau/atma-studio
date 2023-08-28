import { defineType, defineField } from 'sanity';

export const tag = defineType({
  name: 'tag',
  type: 'document',
  title: 'Tag',
  fields: [
    defineField({
      name: 'label',
      title: 'Label du Tag',
      type: 'string',
    }),
  ],
});

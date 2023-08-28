import { defineType, defineField } from 'sanity';

export const imageAsset = defineType({
  name: 'imageAsset',
  type: 'document',
  title: 'Images',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'alt',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
        },
      ],
    }),
  ],
});

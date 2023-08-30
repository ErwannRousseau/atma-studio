import { defineField, defineType } from 'sanity';

export const imageAsset = defineType({
  name: 'imageAsset',
  type: 'document',
  title: 'Images',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Description',
          type: 'string',
        },
        {
          name: 'tags',
          title: 'Tags',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'tag' }],
            },
          ],
        },
      ],
    }),
  ],
});

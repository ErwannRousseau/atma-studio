import { defineArrayMember, defineField, defineType } from 'sanity';

export const referencePage = defineType({
  name: 'referencePage',
  type: 'document',
  title: 'Nos Références',
  fields: [
    defineField({
      name: 'references',
      title: 'Nos références',
      type: 'string',
    }),
    defineField({
      name: 'referencesList',
      title: 'Liste de Références',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'referenceItem',
        }),
      ],
    }),
  ],
});

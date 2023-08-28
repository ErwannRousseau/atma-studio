import { defineType, defineField, defineArrayMember } from 'sanity';

export const servicesPage = defineType({
  name: 'servicesPage',
  type: 'document',
  title: 'Nos Services',
  fields: [
    defineField({
      name: 'servicesList',
      title: 'Liste de Services',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'serviceItem',
        }),
      ],
    }),
  ],
});

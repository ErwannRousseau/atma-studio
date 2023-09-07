import { Settings } from 'lucide-react';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const servicesPage = defineType({
  name: 'servicesPage',
  type: 'document',
  title: 'Nos Services',
  fields: [
    defineField({
      name: 'title',
      title: 'Nos Services',
      type: 'string',
    }),
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

export const serviceItem = defineType({
  name: 'serviceItem',
  title: 'Service',
  type: 'object',
  icon: Settings,
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

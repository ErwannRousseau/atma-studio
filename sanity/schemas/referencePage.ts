import { User2 } from 'lucide-react';
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

export const referenceItem = defineType({
  name: 'referenceItem',
  title: 'Référence',
  type: 'object',
  icon: User2,
  fields: [
    defineField({
      name: 'artistName',
      title: "Nom de l'Artiste",
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description de la Référence',
      type: 'text',
    }),
    defineField({
      name: 'link',
      title: 'Lien',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Image de la Référence',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});

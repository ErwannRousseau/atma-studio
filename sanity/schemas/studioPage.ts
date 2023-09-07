// import { defineArrayMember, defineField, defineType } from 'sanity';
import { Briefcase, Mic2 } from 'lucide-react';

export const studioPage = {
  name: 'studioPage',
  title: 'Le Studio',
  type: 'document',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'equipmentsCategories',
      title: "Categories d'équipement",
      type: 'array',
      of: [{ type: 'equipmentsCategories' }],
    },
  ],
};

export const equipmentsCategories = {
  name: 'equipmentsCategories',
  title: "Categories d'équipement",
  type: 'object',
  icon: Briefcase,
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon de la catégorie',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'equipmentItem',
      title: 'Matériel',
      type: 'array',
      of: [{ type: 'equipmentItem' }],
    },
  ],
};

export const equipmentItem = {
  name: 'equipmentItem',
  title: 'Matériel/Outil',
  type: 'object',
  icon: Mic2,
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};

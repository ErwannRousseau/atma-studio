import { User2 } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

export const referencePage = defineType({
  name: "referencePage",
  type: "document",
  title: "Nos Références",
  fields: [
    defineField({
      name: "references",
      title: "Nos références",
      type: "string",
    }),
    defineField({
      name: "referencesList",
      title: "Liste de Références",
      type: "array",
      of: [
        defineArrayMember({
          type: "referenceItem",
        }),
      ],
    }),
  ],
});

export const referenceItem = defineType({
  name: "referenceItem",
  title: "Référence",
  type: "object",
  icon: User2,
  fields: [
    defineField({
      name: "artistName",
      title: "Nom de l'Artiste",
      type: "string",
      validation: (Rule) => Rule.required().error("Un nom est obligatoire."),
    }),
    defineField({
      name: "link",
      title: "Lien",
      type: "url",
      validation: (Rule) => Rule.required().error("Un lien est obligatoire."),
    }),
    defineField({
      name: "image",
      title: "Image de la Référence",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Une image est obligatoire."),
    }),
    defineField({
      name: "description",
      title: "Description de la Référence",
      type: "text",
    }),
  ],
});

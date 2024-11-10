import { defineArrayMember, defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homepage",
  type: "document",
  title: "Accueil",
  fields: [
    defineField({
      name: "history",
      title: "Histoire",
      type: "blockContent",
      validation: (Rule) =>
        Rule.required().error("L'histoire est obligatoire."),
    }),
    defineField({
      name: "image",
      title: "Image Page Accueil",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Une image est obligatoire."),
    }),
    defineField({
      name: "actualitySection",
      title: "Section Actualités",
      type: "array",
      of: [
        defineArrayMember({
          type: "actualityItem",
        }),
      ],
    }),
  ],
});

export const actualityItem = defineType({
  name: "actualityItem",
  title: "Actualités",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required().error("Un titre est obligatoire"),
    }),
    defineField({
      name: "image",
      title: "Image de l'actualité",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Une image est obligatoire."),
    }),
    defineField({
      name: "link",
      title: "Lien",
      type: "url",
      validation: (Rule) => Rule.required().error("Un lien est obligatoire."),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});

import { Settings } from "lucide-react";
import { ScrollText } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

export const servicesPage = defineType({
  name: "servicesPage",
  type: "document",
  title: "Nos Services",
  icon: ScrollText,
  fields: [
    defineField({
      name: "title",
      title: "Nos Services",
      type: "string",
    }),
    defineField({
      name: "servicesList",
      title: "Liste des services",
      type: "array",
      of: [
        defineArrayMember({
          type: "serviceItem",
        }),
      ],
    }),
  ],
});

export const serviceItem = defineType({
  name: "serviceItem",
  title: "Service",
  type: "object",
  icon: Settings,
  fields: [
    defineField({
      name: "title",
      title: "Titre du service",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Un titre de service est obligatoire."),
    }),
    defineField({
      name: "description",
      title: "Description du service",
      type: "text",
      validation: (Rule) =>
        Rule.required().error("Une description est obligatoire."),
    }),
    defineField({
      name: "images",
      title: "Illustration du service",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Une image est obligatoire."),
    }),
  ],
});

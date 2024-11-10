import { Briefcase } from "lucide-react";
import { KeyboardMusic } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

export const studioPage = defineType({
  name: "studioPage",
  title: "Le Studio",
  type: "document",
  icon: KeyboardMusic,
  fields: [
    defineField({
      name: "presentation",
      title: "Présentation",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required().error("Un contenu est obligatoire"),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Une image est obligatoire."),
    }),
    defineField({
      name: "equipmentsCategories",
      title: "Categories d'équipement",
      type: "array",
      of: [defineArrayMember({ type: "equipmentsCategories" })],
    }),
    {
      name: "team",
      title: "Équipe",
      type: "array",
      of: [{ type: "teamMember" }],
      validation: (Rule) =>
        Rule.required().error("Un membre d'équipe est obligatoire"),
    },
  ],
});

export const equipmentsCategories = defineType({
  name: "equipmentsCategories",
  title: "Categories d'équipement",
  type: "object",
  icon: Briefcase,
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (Rule) =>
        Rule.required().error(
          "Un nom de catégorie d'équipement est nécessaire",
        ),
    }),
    defineField({
      name: "icon",
      title: "Icon de la catégorie",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Une icon est obligatoire"),
    }),
    defineField({
      name: "equipmentItem",
      title: "Matériel",
      type: "array",
      of: [defineArrayMember({ type: "equipmentItem" })],
      validation: (Rule) =>
        Rule.required().error("Un équipement/matériel est nécessaire"),
    }),
  ],
});

export const equipmentItem = defineType({
  name: "equipmentItem",
  title: "Matériel/Outil",
  type: "object",
  icon: Briefcase,
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (Rule) =>
        Rule.required().error(
          "Un nom de catégorie d'équipement est nécessaire",
        ),
    }),
  ],
});

export const teamMember = defineType({
  name: "teamMember",
  title: "Membre de l'équipe",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Un nom de membre de l'équipe est obligatoire"),
    }),
    defineField({
      name: "role",
      title: "Rôle",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Un role de membre est obligatoire"),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Une description de membre est obligatoire"),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) =>
        Rule.required().error("Une photo de membre est obligatoire"),
    }),
  ],
});

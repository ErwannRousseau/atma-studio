import { defineType, defineField, defineArrayMember } from 'sanity';

// export const homepage = defineType({
//   name: 'homepage',
//   type: 'document',
//   title: 'Accueil',
//   fields: [
//     defineField({
//       name: 'newsSection',
//       title: 'Section Actualités',
//       type: 'array',
//       of: [
//         defineArrayMember({
//           type: 'newsItem',
//         }),
//       ],
//     }),
//     defineField({
//       name: 'imageHome',
//       title: 'Image Page Accueil',
//       type: 'image',
//       of: [
//         defineArrayMember({
//           type: 'imageAsset',
//         }),
//       ],
//     }),
//   ],
// });

export const homePage = defineType({
  name: 'homepage',
  type: 'document',
  title: 'Accueil',
  fields: [
    defineField({
      name: 'newsSection',
      title: 'Section Actualités',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'actualiteItem',
        }),
      ],
    }),
    defineField({
      name: 'imageHome',
      title: 'Image Page Accueil',
      type: 'reference',
      to: [{ type: 'imageAsset' }],
    }),
  ],
});

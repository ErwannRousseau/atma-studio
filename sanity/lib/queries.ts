import { groq } from 'next-sanity';

// Get homePage Data
export const homePageQuery = groq`*[_type == "homepage"][0]{
  history[]{
     style,
     _key,
    children[]{
      text
    }
  },
  "image": image.asset->{url, altText},
  actualitySection[]{
    "image": image.asset->{url, altText},
    link,
    _key,
    title,
    date
  }
}
 `;

export const studioPageQuery = groq`*[_type == "studioPage"][0] {
  presentation[]{
    children[]{
      text
    },
    _key,
    style
  },
  team[]{
    "image": image.asset->{url, altText},
    role,
    name,
    "quote": description
  },
  "imagePresentation": image.asset->{url, altText},
  equipmentsCategories[]{
    "icon": icon.asset->{url, altText},
    "title": name,
    _key,
    equipmentItem[]{
      name,
      _key
    }
  }
}
`;

export const referencePageQuery = groq`*[_type == "referencePage"][0]{
  referencesList[]{
    link,
    artistName,
    _key,
    "image": image.asset->{url, altText}
  }
}`;

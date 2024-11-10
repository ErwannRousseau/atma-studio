import { groq } from "next-sanity";

export const HOME_QUERY = groq`*[_type == "homepage"][0]{
  history,
  "image": image.asset->{url, altText},
  actualitySection[]{
    "image": image.asset->{url, altText},
    link,
    _key,
    title,
    description,
    date
  }
}
 `;

export const STUDIO_QUERY = groq`*[_type == "studioPage"][0] {
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

export const REFERENCES_QUERY = groq`*[_type == "referencePage"][0]{
  referencesList[]{
    link,
    artistName,
    _key,
    "image": image.asset->{url, altText}
  }
}
`;

export const SERVICES_QUERY = groq`*[_type == "servicesPage"][0]{
  servicesList[]{
    "image" : images.asset->{url, altText},
    description,
    _key,
    title
  }
}
`;

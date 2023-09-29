import { groq } from 'next-sanity';

import { HomePageData } from '../types/HomePage';
import { ReferencePageData } from '../types/ReferencesPage';
import { ServicesPageData } from '../types/ServicesPage';
import { StudioPageData } from '../types/StudioPage';

import { client } from './client';

// Get homePage Data
export async function getHomePageData(): Promise<HomePageData> {
  return client.fetch(
    groq`*[_type == "homepage"][0]{
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
 `
  );
}

// Get studioPage Data
export async function getStudioPageData(): Promise<StudioPageData> {
  return client.fetch(
    groq`*[_type == "studioPage"][0] {
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
`
  );
}

// Get referencesPage Data
export async function getReferencesPageData(): Promise<ReferencePageData> {
  return client.fetch(
    groq`*[_type == "referencePage"][0]{
     referencesList[]{
       link,
       artistName,
       _key,
       "image": image.asset->{url, altText}
     }
   }
 `
  );
}

// Get servicesPage Data
export async function getServicesPageData(): Promise<ServicesPageData> {
  return client.fetch(
    groq`*[_type == "servicesPage"][0]{
     servicesList[]{
       "image" : images.asset->{url, altText},
       description,
       _key,
       title
     }
   }
 `
  );
}

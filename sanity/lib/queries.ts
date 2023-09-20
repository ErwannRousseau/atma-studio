import { groq } from 'next-sanity';

// Get homePage Data
export const homePageQuery = groq`*[_type == "homepage"][0]{
  "history": history[]{
     style,
     _key,
    "children": children[]{
      text
    }
  },
  "image": image.asset->{url, altText},
  "actualitySection": actualitySection[]{
    "image": image.asset->{url, altText},
    link,
    _key,
    title,
    date
  }
}
 `;

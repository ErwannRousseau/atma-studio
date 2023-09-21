import type { ReferencePageData } from '@/sanity/types/ReferencesPage';

import ArtistsList from '@/components/ArtistsList';
import HeroReferences from '@/components/HeroReferences';
import { referencePageQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';

export const metadata = {
  title: 'Atma Studio - Nos références',
  description:
    "Explorez notre galerie d'artistes talentueux produits par ATMA Studio. Découvrez une sélection diversifiée de musiciens, chanteurs, et groupes qui ont choisi notre studio pour réaliser leurs projets musicaux. Plongez dans un univers de créativité et de musique exceptionnelle avec nos références artistiques.",
};

export default async function ReferencesPage() {
  const { referencesList } = await sanityFetch<ReferencePageData>({ query: referencePageQuery });
  // console.log(referencesList);

  return (
    <>
      <HeroReferences />
      <ArtistsList referencesList={referencesList} />
    </>
  );
}

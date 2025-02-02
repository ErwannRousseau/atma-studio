import ArtistsList from "@/components/ArtistsList";
import HeroReferences from "@/components/HeroReferences";
import { getReferencesPageData } from "@/sanity/lib/dataFetchers";

export const metadata = {
  title: "Nos références",
  description:
    "Explorez notre galerie d'artistes talentueux produits par ATMA Studio. Découvrez une sélection diversifiée de musiciens, chanteurs, et groupes qui ont choisi notre studio pour réaliser leurs projets musicaux. Plongez dans un univers de créativité et de musique exceptionnelle avec nos références artistiques.",
  alternates: {
    canonical: "/nos-references",
  },
};

export default async function ReferencesPage() {
  const { data } = await getReferencesPageData();

  return (
    <>
      <HeroReferences />
      <ArtistsList referencesList={data.referencesList} />
    </>
  );
}

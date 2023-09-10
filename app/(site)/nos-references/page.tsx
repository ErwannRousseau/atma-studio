import ArtistsList from '@/components/ArtistsList';
import HeroReferences from '@/components/HeroReferences';

export const metadata = {
  title: 'Atma Studio - Nos références',
  description:
    "Explorez notre galerie d'artistes talentueux produits par ATMA Studio. Découvrez une sélection diversifiée de musiciens, chanteurs, et groupes qui ont choisi notre studio pour réaliser leurs projets musicaux. Plongez dans un univers de créativité et de musique exceptionnelle avec nos références artistiques.",
};

export default function Home() {
  return (
    <>
      <HeroReferences />
      <ArtistsList />
    </>
  );
}

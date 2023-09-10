import EquipmentsList from '@/components/EquipmentsList';
import HeroStudio from '@/components/HeroStudio';
import StudioPres from '@/components/StudioPres';
import Team from '@/components/Team';

export const metadata = {
  title: 'Atma Studio - Le studio',
  description:
    "Découvrez notre studio de musique professionnel équipé de matériel haut de gamme. Réalisez vos projets musicaux avec une qualité sonore exceptionnelle. Explorez notre gamme complète d'instruments et d'équipements audio pour donner vie à votre créativité.",
};

export default function StudioPage() {
  return (
    <>
      <HeroStudio />
      <StudioPres />
      <EquipmentsList />
      <Team />
      {/* <Cta />
      <Features02 />
      <Features03 />
      <ActualityCarousel />
      <Features04 />
      <Pricing /> */}
    </>
  );
}

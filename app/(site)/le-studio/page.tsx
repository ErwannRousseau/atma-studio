import { revalidatePath } from 'next/cache';

import EquipmentsList from '@/components/EquipmentsList';
import HeroStudio from '@/components/HeroStudio';
import StudioPres from '@/components/StudioPres';
import Team from '@/components/Team';
import { getStudioPageData } from '@/sanity/lib/queries';

export const metadata = {
  title: 'Le studio',
  description:
    "Découvrez notre studio de musique professionnel équipé de matériel haut de gamme. Réalisez vos projets musicaux avec une qualité sonore exceptionnelle. Explorez notre gamme complète d'instruments et d'équipements audio pour donner vie à votre créativité.",
  alternates: {
    canonical: '/le-studio',
  },
};

export default async function StudioPage() {
  const { presentation, team, imagePresentation, equipmentsCategories } = await getStudioPageData();
  revalidatePath('/le-studio');

  return (
    <>
      <HeroStudio />
      <StudioPres presentation={presentation} imagePresentation={imagePresentation} />
      <EquipmentsList equipmentsCategories={equipmentsCategories} />
      <Team team={team} />
    </>
  );
}

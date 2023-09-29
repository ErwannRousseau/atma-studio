import { revalidatePath } from 'next/cache';

import EquipmentsList from '@/components/EquipmentsList';
import HeroStudio from '@/components/HeroStudio';
import StudioPres from '@/components/StudioPres';
import Team from '@/components/Team';
import { getStudioPageData, studioPageQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { StudioPageData } from '@/sanity/types/StudioPage';

export const metadata = {
  title: 'Atma Studio - Le studio',
  description:
    "Découvrez notre studio de musique professionnel équipé de matériel haut de gamme. Réalisez vos projets musicaux avec une qualité sonore exceptionnelle. Explorez notre gamme complète d'instruments et d'équipements audio pour donner vie à votre créativité.",
};

export default async function StudioPage() {
  const { presentation, team, imagePresentation, equipmentsCategories } = await getStudioPageData();

  return (
    <>
      <HeroStudio />
      <StudioPres presentation={presentation} imagePresentation={imagePresentation} />
      <EquipmentsList equipmentsCategories={equipmentsCategories} />
      <Team team={team} />
    </>
  );
}

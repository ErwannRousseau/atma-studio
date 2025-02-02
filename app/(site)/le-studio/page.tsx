import EquipmentsList from "@/components/EquipmentsList";
import HeroStudio from "@/components/HeroStudio";
import StudioPres from "@/components/StudioPres";
import Team from "@/components/Team";
import { getStudioPageData } from "@/sanity/lib/dataFetchers";

export const metadata = {
  title: "Le studio",
  description:
    "Découvrez notre studio de musique professionnel équipé de matériel haut de gamme. Réalisez vos projets musicaux avec une qualité sonore exceptionnelle. Explorez notre gamme complète d'instruments et d'équipements audio pour donner vie à votre créativité.",
  alternates: {
    canonical: "/le-studio",
  },
};

export default async function StudioPage() {
  const { data } = await getStudioPageData();

  return (
    <>
      <HeroStudio />
      <StudioPres
        presentation={data.presentation}
        imagePresentation={data.imagePresentation}
      />
      <EquipmentsList equipmentsCategories={data.equipmentsCategories} />
      <Team team={data.team} />
    </>
  );
}

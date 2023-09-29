import { revalidatePath } from 'next/cache';

import HeroServices from '@/components/HeroServices';
// import Pricing from '@/components/Pricing';
import ServicesList from '@/components/ServicesList';
import { getServicesPageData, servicesPageData } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { ServicesPageData } from '@/sanity/types/ServicesPage';

export const metadata = {
  title: 'Atma Studio - Nos services',
  description:
    "Chez ATMA, nous ne voyons pas l'enregistrement comme simple pression de bouton, mais comme une collaboration pour trouver votre voix, votre ton et votre style. Découvrez comment notre studio vous guide à chaque étape du processus d'enregistrement musical. Le mixage est une étape cruciale de la production musicale. Chez ATMA, nous recherchons les effets, nettoyons et agençons les pistes pour créer une expérience sonore cohérente et fidèle à votre vision artistique. Découvrez comment nous donnons vie à vos morceaux grâce à notre expertise en mixage. Le mastering est essentiel pour donner une couleur unique à votre musique et garantir une qualité sonore optimale sur divers supports d'écoute. Chez ATMA, nous apportons cette touche finale qui permet à votre musique de briller, que ce soit sur des enceintes multimédia, des écouteurs ou des enceintes de voiture. À ATMA, nous mettons à votre disposition le matériel et les instruments virtuels nécessaires pour composer des instrumentales sur-mesure ou pour modifier et enrichir vos propres compositions. Explorez nos capacités de composition et d'arrangement pour créer la musique dont vous rêvez.",
};

export default async function ServicesPage() {
  const { servicesList } = await getServicesPageData();

  return (
    <>
      <HeroServices />
      <ServicesList servicesList={servicesList} />
      {/* <Pricing /> */}
    </>
  );
}

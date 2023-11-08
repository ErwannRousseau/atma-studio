import { revalidatePath } from 'next/cache';

import HeroServices from '@/components/HeroServices';
import Pricing from '@/components/Pricing';
import ServicesList from '@/components/ServicesList';
import { getServicesPageData } from '@/sanity/lib/queries';

export const metadata = {
  title: 'Nos services',
  description:
    "Chez ATMA, nous collaborons avec vous pour trouver votre voix, votre ton et votre style dans l'enregistrement musical. Notre studio vous guide à chaque étape du processus, du mixage à la touche finale du mastering. Nous offrons également des outils de composition et d'arrangement pour créer la musique de vos rêves.",
};

export default async function ServicesPage() {
  const { servicesList } = await getServicesPageData();
  revalidatePath('/nos-services');
  return (
    <>
      <HeroServices />
      <ServicesList servicesList={servicesList} />
      <Pricing />
    </>
  );
}

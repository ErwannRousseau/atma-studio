import HeroServices from "@/components/HeroServices";
import ServicesList from "@/components/ServicesList";
import { getServicesPageData } from "@/sanity/lib/queries";

export const metadata = {
  title: "Nos services",
  description:
    "Chez ATMA, nous collaborons avec vous pour trouver votre voix, votre ton et votre style dans l'enregistrement musical. Notre studio vous guide à chaque étape du processus, du mixage à la touche finale du mastering. Nous offrons également des outils de composition et d'arrangement pour créer la musique de vos rêves.",
  alternates: {
    canonical: "/nos-services",
  },
};

export default async function ServicesPage() {
  const { servicesList } = await getServicesPageData();

  return (
    <>
      <HeroServices />
      <ServicesList servicesList={servicesList} />
    </>
  );
}

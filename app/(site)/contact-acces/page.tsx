export const metadata = {
  title: 'Atma Studio - Contact/Accès',
  description:
    "Découvrez notre studio de musique professionnel équipé de matériel haut de gamme. Réalisez vos projets musicaux avec une qualité sonore exceptionnelle. Explorez notre gamme complète d'instruments et d'équipements audio pour donner vie à votre créativité.",
};

import Image from 'next/image';

import ContactForm from '@/components/ContactForm';
import GoogleMap from '@/components/GoogleMap';
import Particles from '@/components/Particles';
import Illustration from '@/public/images/conic-gradient2.svg';

export default function ContactPage() {
  return (
    <div className="relative">
      {/* Illustration */}
      <div
        className="pointer-events-none absolute left-1/2 -z-10 -mt-36 -translate-x-1/2 opacity-70 blur-2xl md:block"
        aria-hidden="true"
      >
        <Image src={Illustration} className="max-w-none" width={1440} height={450} priority alt="Page Illustration" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Particles quantity={8} className="absolute inset-0 -z-10" />
        <div className="px-4 pb-16 sm:px-6">
          <div className="pt-32 md:pt-32">
            {/* Section header */}
            <div className="mx-auto max-w-3xl pb-8 text-center md:pb-12">
              <div>
                <div
                  data-aos="fade-down"
                  data-aos-delay="100"
                  className="inline-flex bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text pb-3 font-medium text-transparent"
                >
                  On vous explique tout
                </div>
              </div>
              <h1
                data-aos="fade-down"
                className="h1 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent"
              >
                Contact & Accès
              </h1>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-16">
              {/* Form */}
              <ContactForm />
              {/* Maps */}
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

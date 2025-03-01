import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";
import Particles from "@/components/Particles";
import Illustration from "@/public/images/conic-gradient2.svg";
import { GoogleTagManager } from "@next/third-parties/google";
import Image from "next/image";

export const metadata = {
  title: "Contact & Accès",
  description:
    "Contactez-nous chez ATMA Studio pour discuter de vos besoins musicaux. Que vous soyez un artiste émergent, un musicien confirmé ou une entreprise, nous sommes là pour répondre à vos questions, planifier une visite de notre studio et discuter de vos projets musicaux. Contactez-nous dès aujourd'hui pour concrétiser votre vision musicale. Trouvez facilement votre chemin vers ATMA Studio. Notre emplacement est pratique et accessible, que vous veniez en voiture, en transport en commun ou à pied. Consultez notre page d'accès pour obtenir des instructions détaillées et une carte pour planifier votre visite dans notre studio de musique professionnel.",
  alternates: {
    canonical: "/contact-acces",
  },
};

export default function ContactPage() {
  return (
    <>
      <div className="relative">
        {/* Illustration */}
        <div
          className="-z-10 -mt-36 -translate-x-1/2 pointer-events-none absolute left-1/2 opacity-70 blur-2xl md:block"
          aria-hidden="true"
        >
          <Image
            src={Illustration}
            className="max-w-none"
            width={1440}
            height={450}
            priority
            alt="Page Illustration"
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <Particles quantity={8} className="-z-10 absolute inset-0" />
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
                <ContactForm />
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </div>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
    </>
  );
}

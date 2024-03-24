import Link from "next/link";

import BackArrowIcon from "@/components/utils/BackArrowIcon";
import ZcalWidget from "@/components/utils/ZcalWidget";

export default function BookingPage() {
  return (
    <>
      <div className="mx-4 mt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div>
            <p
              data-aos="fade-down"
              data-aos-delay="100"
              className="inline-flex bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text pb-3 font-medium text-transparent"
            >
              Donnez vie à vos projets
            </p>
          </div>
          <h1
            data-aos="fade-down"
            className="h1 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent"
          >
            Réservation - 2h
          </h1>
          <p className="text-buttercup-50" data-aos="fade-down">
            Pour toutes autres demandes,{" "}
            <Link
              href="/contact-acces"
              className="inline-flex bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text text-transparent"
            >
              veuillez nous contacter
            </Link>{" "}
          </p>
        </div>
        {/* Widget Zcal */}
        <ZcalWidget />
      </div>
      <p data-aos="fade-up" className="pt-4 text-center text-buttercup-50">
        Si le calendrier de réservation ne s&apos;affiche pas, veuillez
        actualiser la page
      </p>
      <div data-aos="fade-up" className="m-auto mt-8 w-fit">
        <Link
          href="/"
          className="btn group w-full bg-gradient-to-r from-white/80 via-white to-white/80 text-slate-900 transition duration-150 ease-in-out hover:bg-white"
        >
          Retourner à la page d&apos;accueil
          <span className="ml-1 w-4 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
            <BackArrowIcon />
          </span>
        </Link>
      </div>
    </>
  );
}

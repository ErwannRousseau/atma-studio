import Link from 'next/link';
import Script from 'next/script';

import BackArrowIcon from '@/components/utils/BackArrowIcon';

export default function BookingPage() {
  return (
    <>
      <div className="mx-4 mt-32">
        <div className="mx-auto max-w-3xl  text-center ">
          <div>
            <div
              data-aos="fade-down"
              data-aos-delay="100"
              className="inline-flex bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text pb-3 font-medium text-transparent"
            >
              Donnez vie à vos projets
            </div>
          </div>
          <h1
            data-aos="fade-down"
            className="h1 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent"
          >
            Réservation
          </h1>
        </div>
        {/* Widget Zcal */}
        <Script src="https://static.zcal.co/embed/v1/embed.js" />
        <div className="zcal-inline-widget">
          <a href="https://zcal.co/i/OT5XlVa5"></a>
        </div>
      </div>
      <div className="m-auto w-fit">
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

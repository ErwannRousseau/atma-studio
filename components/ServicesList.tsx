import Particles from './Particles';

import Photo from '@/public/images/atma6.png';

export default function ServicesList() {
  return (
    <section>
      <div className="relative mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <Particles className="absolute inset-0 -z-10" />
        {/* Section content Musicale */}
        <div className=" md:pt-10">
          <div className="mx-auto flex max-w-xl flex-col-reverse items-center pb-12 md:max-w-none md:flex-row md:gap-24 md:pb-24 ">
            {/* Content */}
            <div
              className="order-1 pb-4  text-right max-md:text-center  md:order-none md:w-1/2 md:pb-0 md:pl-6 lg:pl-20 xl:pl-28"
              data-aos="fade-down"
            >
              {/* Content #1 */}
              <h3 className="h3 inline-flex bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text pb-3 text-transparent">
                Enregistrement
              </h3>
              <p className="mb-4 text-lg text-slate-100">
                L’enregistrement, ce n’est pas simplement appuyer sur un bouton et laisser tourner. Chez ATMA, nous vous
                accompagnons tout le long de cette étape afin de trouver votre bonne voix, le bon grain et le bon ton.
              </p>
            </div>
            {/* Image */}
            <div className="md:w-1/2">
              <div
                className="h-[315px] w-[315px] rounded-2xl border border-transparent bg-cover bg-center bg-no-repeat shadow-2xl"
                data-aos="fade-up"
                data-aos-delay="100"
                style={{
                  backgroundImage: `url(${Photo.src})`,
                }}
              />
            </div>
          </div>
          <div className="mx-auto flex max-w-xl flex-col-reverse items-center pb-12 md:max-w-none md:flex-row-reverse md:gap-24 md:pb-24 ">
            {/* Content */}
            <div
              className="order-1 pb-4 text-left  max-md:text-center md:order-none md:w-1/2 md:pb-0 md:pr-6 lg:pr-20 xl:pr-28"
              data-aos="fade-down"
            >
              {/* Content #2 */}
              <h3 className="h3 inline-flex bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text pb-3 text-transparent">
                Mixage
              </h3>
              <p className="mb-4 text-lg text-slate-100">
                Étape cruciale de la production musicale, le mixage comprend la recherche d’effets ainsi que le
                nettoyage et l’agencement des pistes entre elles de manière à rendre le tout cohérent et fidèle à votre
                vision.
              </p>
            </div>
            {/* Image */}
            <div className="flex justify-end md:w-1/2">
              <div
                className=" h-[315px] w-[315px] rounded-2xl border border-transparent bg-cover bg-center bg-no-repeat shadow-2xl"
                data-aos="fade-up"
                data-aos-delay="100"
                style={{
                  backgroundImage: `url(${Photo.src})`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

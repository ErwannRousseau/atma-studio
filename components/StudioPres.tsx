import Particles from './Particles';

import Photo from '@/public/images/atma2.png';

export default function StudioPres() {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="pointer-events-none absolute bottom-1/3 left-1/2 -z-10 translate-y-1/2 opacity-60 blur-2xl"
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="500">
            <defs>
              <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" stopColor="#f3a710" />
                <stop offset="100%" stopColor="#fce98b" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path fill="url(#bs5-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
          </svg>
        </div>
        <div
          className="pointer-events-none absolute bottom-1/4 left-2/3 -z-10 -mb-20 -translate-x-1/2 opacity-50 blur-2xl"
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="500">
            <defs>
              <linearGradient id="bs2-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" stopColor="#f3a710" />
                <stop offset="100%" stopColor="#fce98b" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path fill="url(#bs2-a)" fillRule="evenodd" d="m346 898 461 369-284 58z" transform="translate(-346 -898)" />
          </svg>
        </div>
        <Particles className="absolute inset-0 -z-10" />
        <div className="pb-12 pt-16 md:pb-20 md:pt-20">
          {/* Section content */}
          <div className="mx-auto flex max-w-xl flex-col space-y-8 space-y-reverse md:max-w-none md:flex-row md:space-x-8 md:space-y-0 lg:space-x-16 xl:space-x-20">
            {/* Content */}
            <div className="order-1 max-md:text-center md:order-none md:w-7/12 lg:w-1/2" data-aos="fade-down">
              {/* Content #1 */}
              <h3 className="h3 inline-flex bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text pb-3 text-transparent">
                Notre vision
              </h3>
              <p className="mb-8 text-justify text-lg text-slate-100 md:text-left">
                Le confort est primordial pour stimuler la créativité. Le salle de mixage et la cabine forment un
                véritable cocon insonorisé avec lumières ajustables pour vous plonger dans l’atmosphère qui vous
                convient. Nous disposons d’une salle de pause (Break Room) et d’une salle d’accueil. <br />
                Si vous voulez prendre l’air, nous bénéficions d’un accès direct à la Butte Sainte-Anne et à la vue
                qu’elle offre sur la ville. Plusieurs commerces sont à proximité (boulangerie, épicerie, bar, tabac).
              </p>
            </div>
            {/* Image */}
            <div className="grid place-items-center md:w-5/12 lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
              <div
                className="h-[320px] w-[320px] rounded-2xl border border-transparent bg-cover bg-no-repeat shadow-2xl lg:h-[360px] lg:w-[360px] "
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

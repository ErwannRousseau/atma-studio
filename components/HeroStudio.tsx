import Particles from './Particles';

export default function HeroStudio() {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Blurred shape */}
        <div
          className="pointer-events-none absolute bottom-1/3 left-20 -z-10 translate-y-1/2 opacity-60 blur-2xl"
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
        {/* Particles animation */}
        <Particles quantity={8} className="absolute inset-0 -z-10" />
        {/* Hero content */}
        <div className="pt-32 md:pb-12 md:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <div>
              <div
                data-aos="fade-down"
                className="inline-flex bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text pb-3 font-medium text-transparent"
              >
                Votre son, notre technologie.
              </div>
            </div>
            <h1
              className="h1 bg-gradient-to-r from-buttercup-50 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Studio & Matériel
            </h1>
            <p className="px-8 text-lg text-buttercup-50 lg:px-0" data-aos="fade-down" data-aos-delay="200">
              Matériel studio haut de gamme, créativité sans limites. Confort, vue, et inspiration à portée de main.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

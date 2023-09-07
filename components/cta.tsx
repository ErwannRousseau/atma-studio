import AtmaPicture from '@/public/images/atma7.webp';

export default function Cta() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-[3rem] bg-cover bg-center px-8 py-12 md:py-20"
          style={{ backgroundImage: `url(${AtmaPicture.src})` }}
        >
          {/* Radial gradient */}
          {/* <div
            className="pointer-events-none absolute left-1/3  top-1/2 -z-10 flex aspect-square w-1/3 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
            aria-hidden="true"
          >
            <div className="translate-z-0 absolute inset-0 rounded-full bg-buttercup-500 opacity-70 blur-[120px]" />
            <div className="translate-z-0 absolute h-1/4 w-1/4 rounded-full bg-buttercup-400 blur-[40px]" />
          </div> */}
          {/* Blurred shape */}
          <div
            className="pointer-events-none absolute bottom-1/3 left-0 -z-10 translate-y-1/2 opacity-60 blur-2xl"
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
          {/* Content */}
          <div className="mx-auto max-w-3xl pt-14 text-center">
            <div>
              <div className="inline-flex bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text pb-3 font-medium text-transparent">
                Le matériel qui transforme votre musique.
              </div>
            </div>
            <h2 className="h2 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent">
              Studio & Matériel
            </h2>
            <p className="mb-8 text-lg text-buttercup-50">
              Matériel studio haut de gamme, créativité sans limites. Confort, vue, et inspiration à portée de main.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

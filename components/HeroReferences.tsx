import Particles from "./Particles";

export default function HeroReferences() {
  return (
    <section className="relative">
      {/* Particles */}
      <Particles quantity={8} className="-z-10 absolute inset-0" />
      {/* Blurred shape */}
      <div
        className="-z-10 -translate-x-1/2 -translate-y-1/4 pointer-events-none absolute top-1/3 left-1/3 opacity-50 blur-2xl"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <title>Blurred shape</title>
          <defs>
            <linearGradient
              id="bs3-a"
              x1="19.609%"
              x2="50%"
              y1="14.544%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f3a710" />
              <stop offset="100%" stopColor="#fce98b" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            fill="url(#bs3-a)"
            fillRule="evenodd"
            d="m410 0 461 369-284 58z"
            transform="matrix(1 0 0 -1 -410 427)"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="pt-32 md:pt-32" data-aos="fade-down">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-8 text-center md:pb-12">
            <div>
              <div className="inline-flex bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text pb-3 font-medium text-transparent">
                Nos artistes en vedette.
              </div>
            </div>
            <h1 className="h1 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent">
              Nos références
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

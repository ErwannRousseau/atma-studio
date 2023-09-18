export default function EquipmentsList() {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Radial gradient */}
        <div className=" pointer-events-none absolute inset-0 -z-10 overflow-hidden " aria-hidden="true">
          <div className="absolute bottom-1/2 left-1/2 flex  aspect-square w-1/2 items-center justify-center sm:-bottom-1/2 sm:w-1/3 sm:-translate-x-1/2 sm:-translate-y-1/2 ">
            <div className="translate-z-0 absolute inset-0 rounded-full bg-buttercup-500 opacity-50 blur-[120px]" />
          </div>
        </div>
        <div className="py-16 md:pt-32">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2
              className="h2 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text text-transparent"
              data-aos="fade-down"
            >
              Liste des équipements
            </h2>
          </div>
          {/* Equipments list */}
          <div className="ml-8 grid gap-8 sm:ml-0 sm:grid-cols-3 sm:gap-12" data-aos="fade-up" data-aos-delay="300">
            {/* Equipement */}
            <div className="place-items-center sm:grid">
              <div>
                <div className="mb-1 flex items-center space-x-2">
                  <svg className="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M7.999 2.34a4.733 4.733 0 0 0-6.604 6.778l5.904 5.762a1 1 0 0 0 1.4 0l5.915-5.77a4.733 4.733 0 0 0-6.615-6.77Zm5.208 5.348-5.208 5.079-5.2-5.07a2.734 2.734 0 0 1 3.867-3.864c.182.19.335.404.455.638a1.04 1.04 0 0 0 1.756 0 2.724 2.724 0 0 1 5.122 1.294 2.7 2.7 0 0 1-.792 1.923Z" />
                  </svg>
                  <h4 className="font-medium text-slate-50">DAW</h4>
                </div>
                <p className="text-sm text-slate-400">Pro Tools 12</p>
                <p className="text-sm text-slate-400">FL Studio 21</p>
              </div>
            </div>
            {/* Equipement */}
            <div className="place-items-center sm:grid">
              <div>
                <div className="mb-1 flex items-center space-x-2">
                  <svg className="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" />
                  </svg>
                  <h4 className="font-medium text-slate-50">Enceintes monitoring</h4>
                </div>
                <p className="text-sm text-slate-400">Focal Alpha EVO 65</p>
                <p className="text-sm text-slate-400">Yamaha HS7</p>
              </div>
            </div>
            {/* Equipement */}
            <div className="place-items-center sm:grid">
              <div>
                <div className="mb-1 flex items-center space-x-2">
                  <svg className="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M14 0a2 2 0 0 1 2 2v4a1 1 0 0 1-2 0V2H2v12h4a1 1 0 0 1 0 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm-1.957 10.629 3.664 3.664a1 1 0 0 1-1.414 1.414l-3.664-3.664-.644 2.578a.5.5 0 0 1-.476.379H9.5a.5.5 0 0 1-.48-.362l-2-7a.5.5 0 0 1 .618-.618l7 2a.5.5 0 0 1-.017.965l-2.578.644Z" />
                  </svg>
                  <h4 className="font-medium text-slate-50">Micro</h4>
                </div>
                <p className="text-sm text-slate-400">Blue Bluebird</p>
              </div>
            </div>
            {/* Equipement */}
            <div className="place-items-center sm:grid">
              <div>
                <div className="mb-1 flex items-center space-x-2">
                  <svg className="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8ZM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1Z" />
                  </svg>
                  <h4 className="font-medium text-slate-50">Casque</h4>
                </div>
                <p className="text-sm text-slate-400">DT 770 pro</p>
              </div>
            </div>
            {/* Equipement */}
            <div className="place-items-center sm:grid">
              <div>
                <div className="mb-1 flex items-center space-x-2">
                  <svg className="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 14V2H2v12h12Zm-3-7H5a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z" />
                  </svg>
                  <h4 className="font-medium text-slate-50">Cartes sons</h4>
                </div>
                <p className="text-sm text-slate-400">Focusrite Scarlett 2i4</p>
                <p className="text-sm text-slate-400">Apollo Twin Duo USB Heritage</p>
              </div>
            </div>
            {/* Equipement */}
            <div className="place-items-center sm:grid">
              <div>
                <div className="mb-1 flex items-center space-x-2">
                  <svg className="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M14.574 5.67a13.292 13.292 0 0 1 1.298 1.842 1 1 0 0 1 0 .98C15.743 8.716 12.706 14 8 14a6.391 6.391 0 0 1-1.557-.2l1.815-1.815C10.97 11.82 13.06 9.13 13.82 8c-.163-.243-.39-.56-.669-.907l1.424-1.424ZM.294 15.706a.999.999 0 0 1-.002-1.413l2.53-2.529C1.171 10.291.197 8.615.127 8.49a.998.998 0 0 1-.002-.975C.251 7.29 3.246 2 8 2c1.331 0 2.515.431 3.548 1.038L14.293.293a.999.999 0 1 1 1.414 1.414l-14 14a.997.997 0 0 1-1.414 0ZM2.18 8a12.603 12.603 0 0 0 2.06 2.347l1.833-1.834A1.925 1.925 0 0 1 6 8a2 2 0 0 1 2-2c.178 0 .348.03.512.074l1.566-1.566C9.438 4.201 8.742 4 8 4 5.146 4 2.958 6.835 2.181 8Z" />
                  </svg>
                  <h4 className="font-medium text-slate-50">Clavier MIDI</h4>
                </div>
                <p className="text-sm text-slate-400">CASIO CDP-S100</p>
              </div>
            </div>
            {/* Equipement */}
            <div className="place-items-center sm:grid">
              <div>
                <div className="mb-1 flex items-center space-x-2">
                  <svg className="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M14.574 5.67a13.292 13.292 0 0 1 1.298 1.842 1 1 0 0 1 0 .98C15.743 8.716 12.706 14 8 14a6.391 6.391 0 0 1-1.557-.2l1.815-1.815C10.97 11.82 13.06 9.13 13.82 8c-.163-.243-.39-.56-.669-.907l1.424-1.424ZM.294 15.706a.999.999 0 0 1-.002-1.413l2.53-2.529C1.171 10.291.197 8.615.127 8.49a.998.998 0 0 1-.002-.975C.251 7.29 3.246 2 8 2c1.331 0 2.515.431 3.548 1.038L14.293.293a.999.999 0 1 1 1.414 1.414l-14 14a.997.997 0 0 1-1.414 0ZM2.18 8a12.603 12.603 0 0 0 2.06 2.347l1.833-1.834A1.925 1.925 0 0 1 6 8a2 2 0 0 1 2-2c.178 0 .348.03.512.074l1.566-1.566C9.438 4.201 8.742 4 8 4 5.146 4 2.958 6.835 2.181 8Z" />
                  </svg>
                  <h4 className="font-medium text-slate-50">Plugins UAD</h4>
                </div>
                <p className="text-sm text-slate-400">Brigade Chorus</p>
                <p className="text-sm text-slate-400">CS1</p>
                <p className="text-sm text-slate-400">Fairchild 660 & 670</p>
                <p className="text-sm text-slate-400">Helios type 69</p>
                <p className="text-sm text-slate-400">Precision bundle</p>
                <p className="text-sm text-slate-400">Pultec bundle</p>
                <p className="text-sm text-slate-400">Pure Plate</p>
                <p className="text-sm text-slate-400">Teletronix bundle</p>
                <p className="text-sm text-slate-400">1176 bundle</p>
                <p className="text-sm text-slate-400">UA 610-A & 610-B</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

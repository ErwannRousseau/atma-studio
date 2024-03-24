import Image from "next/image";

import type { EquipmentsCategory } from "@/sanity/types/StudioPage";

export default function EquipmentsList({
  equipmentsCategories,
}: { equipmentsCategories: EquipmentsCategory[] }) {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Radial gradient */}
        <div
          className="-z-10 pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="sm:-bottom-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 absolute bottom-1/2 left-1/2 flex aspect-square w-1/2 items-center justify-center sm:w-1/3">
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
          <div
            className="ml-8 grid gap-8 sm:ml-0 sm:grid-cols-3 sm:gap-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Equipement */}
            {equipmentsCategories.map(
              ({ icon, title, _key, equipmentItem }) => (
                <div className="place-items-center sm:grid" key={_key}>
                  <div>
                    <div className="mb-1 flex items-center space-x-2">
                      <Image
                        width={20}
                        height={20}
                        src={icon.url}
                        alt={`icon ${title}`}
                      />
                      <h4 className="font-medium text-slate-50">{title}</h4>
                    </div>
                    {equipmentItem.map(({ name, _key }) => (
                      <p key={_key} className="text-slate-400 text-sm">
                        {name}
                      </p>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

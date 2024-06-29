import Image from "next/image";

import Particles from "./Particles";

import { cn } from "@/lib/utils";
import type { TServicesList } from "@/sanity/types/ServicesPage";

export default function ServicesList({
  servicesList,
}: { servicesList: TServicesList[] }) {
  return (
    <section>
      <div className="relative mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <Particles className="-z-10 absolute inset-0" />
        {/* Section content Musicale */}
        <div className="md:pt-10">
          {/* Content odd */}
          {servicesList.map(({ _key, title, description, image }, index) => (
            <div
              key={_key}
              className={cn(
                "mx-auto flex max-w-xl flex-col-reverse items-center pb-12 md:max-w-none md:gap-32 md:pb-24",
                {
                  "md:flex-row": index % 2 === 0,
                  "md:flex-row-reverse": index % 2 !== 0,
                },
              )}
              data-aos="fade-down"
            >
              {/* Content */}
              <div
                className={cn("order-1 pb-4", {
                  "text-right max-md:text-center md:order-none md:w-1/2 md:pb-0 md:pl-6 lg:pl-20 xl:pl-28":
                    index % 2 === 0,
                  "text-left max-md:text-center md:order-none md:w-1/2 md:pr-6 md:pb-0 lg:pr-20 xl:pr-28":
                    index % 2 !== 0,
                })}
              >
                <h3 className="h3 inline-flex bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text pb-3 text-transparent">
                  {title}
                </h3>
                <p className="mb-4 text-lg text-slate-100">{description}</p>
              </div>
              {/* Image */}
              <div
                className={cn("md:w-1/2", {
                  "flex justify-end": index % 2 !== 0,
                })}
              >
                <div
                  className="relative h-[315px] w-[315px] rounded-2xl shadow-2xl"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <Image
                    src={image.url}
                    alt={title}
                    fill
                    className="rounded-[inherit]"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

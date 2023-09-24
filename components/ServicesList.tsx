import Particles from './Particles';

import { ServicesList } from '@/sanity/types/ServicesPage';

export default function ServicesList({ servicesList }: { servicesList: ServicesList[] }) {
  return (
    <section>
      <div className="relative mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <Particles className="absolute inset-0 -z-10" />
        {/* Section content Musicale */}
        <div className=" md:pt-10">
          {/* Content odd */}
          {servicesList.map(({ _key, title, description, image }, index) => (
            <div
              key={_key}
              className={`mx-auto flex max-w-xl flex-col-reverse items-center pb-12 md:max-w-none ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } md:gap-24 md:pb-24`}
              data-aos="fade-down"
            >
              {/* Content */}
              <div
                className={`order-1 pb-4 ${
                  index % 2 === 0
                    ? 'text-right max-md:text-center md:order-none md:w-1/2 md:pb-0 md:pl-6 lg:pl-20 xl:pl-28'
                    : 'text-left max-md:text-center md:order-none md:w-1/2 md:pb-0 md:pr-6 lg:pr-20 xl:pr-28'
                }`}
              >
                <h3 className="h3 inline-flex bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text pb-3 text-transparent">
                  {title}
                </h3>
                <p className="mb-4 text-lg text-slate-100">{description}</p>
              </div>
              {/* Image */}
              <div className={`${index % 2 === 0 ? '' : 'flex justify-end'} md:w-1/2`}>
                <div
                  className="h-[315px] w-[315px] rounded-2xl border border-transparent bg-cover bg-center bg-no-repeat shadow-2xl"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{
                    backgroundImage: `url(${image.url})`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

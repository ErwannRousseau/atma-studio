import Image from 'next/image';

import Particles from './Particles';

import type { History } from '@/sanity/types/HomePage';
import type { ImageSanity } from '@/sanity/types/ImageSanity';

import Illustration from '@/public/images/glow-top.svg';

export default function AtmaPres({ history, image }: { history: History[]; image: ImageSanity }) {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Particles className="absolute inset-0 -z-10" />
        {/* Illustration */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden rounded-t-[3rem]"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2">
            <Image src={Illustration} className="max-w-none" width={1404} height={658} alt="Features Illustration" />
          </div>
        </div>
        <div className="pb-12 pt-16 md:pb-20 md:pt-52">
          <div>
            {/* Section content */}
            <div className="mx-auto flex max-w-xl flex-col space-y-8 space-y-reverse md:max-w-none md:flex-row md:space-x-8 md:space-y-0 lg:space-x-16 xl:space-x-20">
              <div className="order-1 max-md:text-center md:order-none md:w-7/12 lg:w-1/2" data-aos="fade-down">
                <h3
                  className={`${history[0].style} inline-flex bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text pb-3 text-transparent`}
                >
                  {history[0].children[0].text}
                </h3>
                {history.slice(1).map(({ children, _key }) => (
                  <p key={_key} className="mb-8 text-lg text-slate-100">
                    {children[0].text}
                  </p>
                ))}
              </div>
              {/* Image */}
              <div className="md:w-5/12 lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
                <div className="relative -mt-12 py-24">
                  <div className="flex items-center justify-center">
                    <div className="relative flex h-48 w-48 items-center justify-center">
                      <div
                        className="absolute h-[320px] w-[320px] rounded-2xl border border-transparent bg-cover bg-center shadow-2xl before:absolute before:inset-0 before:rounded-2xl"
                        style={{
                          backgroundImage: `url(${image.url})`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

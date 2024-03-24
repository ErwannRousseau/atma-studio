import Image from "next/image";

import Particles from "./Particles";

import type { ImageSanity } from "@/sanity/types/ImageSanity";
import type { Presentation } from "@/sanity/types/StudioPage";

export default function StudioPres({
  presentation,
  imagePresentation,
}: {
  imagePresentation: ImageSanity;
  presentation: Presentation[];
}) {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Blurred shape */}
        <div
          className="-z-10 pointer-events-none absolute bottom-1/3 left-1/2 translate-y-1/2 opacity-60 blur-2xl"
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="500">
            <title>Blurred shape</title>
            <defs>
              <linearGradient
                id="bs5-a"
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
              fill="url(#bs5-a)"
              fillRule="evenodd"
              d="m0 0 461 369-284 58z"
              transform="matrix(1 0 0 -1 0 427)"
            />
          </svg>
        </div>
        {/* Blurred shape */}
        <div
          className="-z-10 -mb-20 -translate-x-1/2 pointer-events-none absolute bottom-1/4 left-2/3 opacity-50 blur-2xl"
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="500">
            <title>Blurred shape</title>
            <defs>
              <linearGradient
                id="bs2-a"
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
              fill="url(#bs2-a)"
              fillRule="evenodd"
              d="m346 898 461 369-284 58z"
              transform="translate(-346 -898)"
            />
          </svg>
        </div>
        <Particles className="-z-10 absolute inset-0" />
        <div className="pt-16 pb-12 md:pt-20 md:pb-20">
          <div className="mx-auto flex max-w-xl flex-col items-center space-y-8 space-y-reverse md:max-w-none md:flex-row lg:space-x-16 md:space-x-8 xl:space-x-20 md:space-y-0">
            {/* Content */}
            <div
              className="order-1 md:order-none lg:w-1/2 md:w-7/12 max-md:text-center"
              data-aos="fade-down"
            >
              <h3
                className={`${presentation[0].style}inline-flex bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text pb-3 text-transparent`}
              >
                {presentation[0].children[0].text}
              </h3>
              {presentation.slice(1).map(({ children, _key }) => (
                <p
                  key={_key}
                  className="text-left text-lg text-slate-100 md:text-left"
                >
                  {children[0].text}
                </p>
              ))}
            </div>
            {/* Image */}
            <div
              className="grid place-items-center lg:w-1/2 md:w-5/12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative h-[320px] w-[320px] rounded-2xl shadow-2xl lg:h-[360px] lg:w-[360px]">
                <Image
                  src={imagePresentation.url}
                  alt={imagePresentation?.altText || ""}
                  className="rounded-[inherit]"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

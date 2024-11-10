import Illustration from "@/public/images/glow-top.svg";
import type { ImageSanity } from "@/sanity/types/ImageSanity";
import type { BlockContent } from "@/sanity/types/objects/blockContent";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Particles from "./Particles";

export default function AtmaPres({
  history,
  image,
}: {
  history: BlockContent;
  image: ImageSanity;
}) {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Particles className="-z-10 absolute inset-0" />
        {/* Illustration */}
        <div
          className="-z-10 -mx-28 pointer-events-none absolute inset-0 overflow-hidden rounded-t-[3rem]"
          aria-hidden="true"
        >
          <div className="-z-10 -translate-x-1/2 absolute top-0 left-1/2">
            <Image
              src={Illustration}
              className="max-w-none"
              width={1404}
              height={658}
              alt="Features Illustration"
            />
          </div>
        </div>
        <div className="pt-16 pb-12 md:pt-32 md:pb-20">
          <div>
            {/* Section content */}
            <div className="mx-auto flex max-w-xl flex-col space-y-8 space-y-reverse md:max-w-none md:flex-row md:space-x-8 md:space-y-0 lg:space-x-16 xl:space-x-20">
              <div
                className="order-1 flex-col justify-center md:order-none md:flex md:w-7/12 lg:w-1/2"
                data-aos="fade-down"
              >
                <PortableText value={history} />
              </div>
              {/* Image */}
              <div
                className="md:w-5/12 lg:w-1/2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="relative py-24">
                  <div className="flex items-center justify-center">
                    <div className="relative flex h-48 w-48 items-center justify-center">
                      <div className="absolute z-10 h-[320px] w-[320px] rounded-2xl shadow-2xl">
                        <Image
                          src={image.url}
                          alt={image?.altText || ""}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

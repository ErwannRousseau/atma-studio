import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/utils/CarouselEmbla";
import type { ReferenceItem } from "@/sanity/types/ReferencesPage";

export default function ArtistsCarousel({
  nextArtists,
}: { nextArtists: ReferenceItem[] }) {
  return (
    <Carousel className="mb-10" opts={{ align: "start" }}>
      <CarouselContent>
        {/* Carousel items */}
        {nextArtists.map(({ _key, image, artistName, link }) => (
          <CarouselItem
            className="py-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            key={_key}
          >
            <div className="group/slide relative z-20 grid aspect-square w-full grow place-items-center overflow-hidden rounded-3xl">
              <Image
                src={image.url}
                alt={image?.altText || ""}
                className="rounded-[inherit]"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
              <p className="relative mb-1 inline-block bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text text-center font-bold text-lg text-transparent underline">
                {artistName}
              </p>
              <div className="group/arrow absolute right-4 bottom-4 md:right-5">
                <div className="relative inline-flex before:absolute before:inset-0 before:bg-buttercup-500 before:blur-md">
                  <Link
                    target="_blank"
                    href={link}
                    className="btn-sm group relative z-30 py-0.5 text-buttercup-50 shadow transition duration-150 ease-in-out [background:linear-gradient(theme(colors.buttercup.500),_theme(colors.buttercup.500))_padding-box,_linear-gradient(theme(colors.buttercup.500),_theme(colors.buttercup.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-buttercup-600/70 hover:text-white"
                  >
                    <span className="relative inline-flex items-center">
                      Découvrir{" "}
                      <span className="ml-1 text-buttercup-50 tracking-normal transition-transform duration-150 ease-in-out group-hover/arrow:translate-x-1">
                        -&gt;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="-bottom-14 absolute right-0 flex">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}

"use client";

import React, { useEffect, useState } from "react";

import ActualityCard from "./ActualityCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/utils/CarouselEmbla";
import type { Actualities } from "@/sanity/types/HomePage";

export default function ActualityCarouselV2({
  actualities,
}: { actualities: Actualities }) {
  const [activeActuality, setActiveActuality] = useState<
    string | undefined | null
  >(null);

  useEffect(() => {
    const clickRemoveRotateHandler = (event: MouseEvent) => {
      const isActuality = (event.target as HTMLElement).closest(
        ".actuality-card",
      );

      if (!isActuality) {
        setActiveActuality(null);
      }
    };

    document.addEventListener("click", clickRemoveRotateHandler);

    return () => {
      document.removeEventListener("click", clickRemoveRotateHandler);
    };
  }, []);

  return (
    <section>
      <div className="mx-auto mb-10 max-w-6xl px-4 sm:px-6">
        <div className="relative pt-12 md:pt-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-8 text-center md:pb-12">
            <div>
              <div className="inline-flex bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text pb-3 font-medium text-transparent">
                Nos dernières infos
              </div>
            </div>
            <h2 className="h2 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent">
              Actualités
            </h2>
          </div>
          <div
            className="-z-10 -ml-16 -mt-24 pointer-events-none absolute top-2/4 left-2/3 opacity-70 blur-2xl"
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
              <title>Blurred Shape</title>
              <defs>
                <linearGradient
                  id="bs4-a"
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
                fill="url(#bs4-a)"
                fillRule="evenodd"
                d="m0 0 461 369-284 58z"
                transform="matrix(1 0 0 -1 0 427)"
              />
            </svg>
          </div>
          <div className="before:-translate-x-full relative after:absolute before:absolute after:inset-0 before:inset-0 after:z-20 before:z-20 after:translate-x-full before:rounded-r-3xl after:bg-gradient-to-r before:bg-gradient-to-l after:from-transparent before:from-transparent after:to-20% after:to-buttercup-500/20 before:to-20% before:to-buttercup-500/20 after:blur before:blur">
            <Carousel opts={{ align: "start" }}>
              <CarouselContent>
                {/* Carousel items */}
                {actualities.map((actuality) => (
                  <CarouselItem
                    className="py-4 lg:basis-1/3 md:basis-1/2 sm:basis-full"
                    key={actuality._key}
                  >
                    <ActualityCard
                      actuality={actuality}
                      activeActuality={activeActuality}
                      setActiveActuality={() =>
                        setActiveActuality(actuality._key)
                      }
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="-bottom-14 absolute right-0 flex">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

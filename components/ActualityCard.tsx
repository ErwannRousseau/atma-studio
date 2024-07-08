"use client";

import Image from "next/image";
import Link from "next/link";

import Particles from "./Particles";
import FlipIcon from "./utils/FlipIcon";

import { cn } from "@/lib/utils";
import type { ActualityItem } from "@/sanity/types/HomePage";

type ActualityProps = {
  actuality: ActualityItem;
  activeActuality: string | undefined | null;
  setActiveActuality: React.Dispatch<
    React.SetStateAction<string | undefined | null>
  >;
};

export default function ActualityCard({
  actuality,
  activeActuality,
  setActiveActuality,
}: ActualityProps) {
  const { image, title, link, _key, description } = actuality;

  return (
    <div className="perspective-800 group/slide aspect-square">
      <div
        className={cn(
          "actuality-card transform-style-preserve relative mx-auto aspect-square rounded-2xl transition-transform duration-[0.5s]",
          { "rotateY-180": activeActuality === _key },
        )}
      >
        {/* front face */}
        <div className="backface-hidden absolute h-full w-full rounded-[inherit]">
          <Image
            src={image.url}
            alt={title}
            fill
            className="rounded-[inherit]"
            style={{
              objectFit: "cover",
            }}
          />
          {/* Particles animation */}
          <Particles
            className="absolute opacity-0 transition-opacity duration-500 ease-in-out group-hover/slide:opacity-100"
            quantity={5}
          />
          <div className="relative flex h-full flex-col p-6">
            <div className="grid grow place-items-center">
              <p className="relative mb-1 inline-block bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text text-center font-bold text-lg text-transparent underline">
                {title}
              </p>
            </div>
            {/* Button flip */}
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <div
              onClick={() => {
                setActiveActuality(_key);
              }}
              className="-m-4 absolute bottom-4 left-1 p-4 hover:cursor-pointer"
            >
              <FlipIcon className="relative h-10 w-10" />
            </div>
            {/* Button Link */}
            <div className="group/arrow absolute right-4 bottom-4 md:right-5">
              <div className="relative inline-flex before:absolute before:inset-0 before:bg-buttercup-500 before:blur-md">
                <Link
                  href={link}
                  target="_blank"
                  className="btn-sm group relative py-0.5 text-buttercup-50 shadow transition duration-150 ease-in-out [background:linear-gradient(theme(colors.buttercup.500),_theme(colors.buttercup.500))_padding-box,_linear-gradient(theme(colors.buttercup.500),_theme(colors.buttercup.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-buttercup-600/70 hover:text-white"
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
        </div>
        {/* back face */}
        <div className="backface-hidden rotateY-180 absolute grid h-full w-full place-items-center rounded-[inherit]">
          <Image
            src={image.url}
            alt={title}
            fill
            className="rounded-[inherit] blur-sm brightness-50"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="relative">
            <div className="grid place-items-center">
              <p className="relative inline-block bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text text-center font-bold text-2xl text-transparent underline">
                {title}
              </p>
              <div className="bold max-h-72 overflow-auto px-4 text-center font-semibold text-md text-slate-100">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

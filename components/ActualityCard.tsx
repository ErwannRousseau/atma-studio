'use client';

import Image from 'next/image';
import Link from 'next/link';

import Particles from './Particles';
import FlipIcon from './utils/FlipIcon';

import type { ActualityItem } from '@/sanity/types/HomePage';

type ActualityProps = {
  actuality: ActualityItem;
  activeActuality: string | undefined | null;
  setActiveActuality: React.Dispatch<React.SetStateAction<string | undefined | null>>;
};

export default function ActualityCard({ actuality, activeActuality, setActiveActuality }: ActualityProps) {
  const { image, title, link, _key, description } = actuality;

  return (
    <div className="perspective-800 swiper-slide group/slide aspect-square">
      <div
        className={`actuality-card transform-style-preserve relative mx-auto aspect-square rounded-2xl transition-transform duration-[0.5s] ${
          activeActuality === _key ? 'rotateY-180' : ''
        }`}
      >
        {/* front face */}
        <div className="backface-hidden absolute h-full w-full rounded-[inherit]">
          <Image
            src={image.url}
            alt={title}
            fill
            className="rounded-[inherit]"
            style={{
              objectFit: 'cover',
            }}
          />
          {/* Particles animation */}
          <Particles
            className="absolute opacity-0 transition-opacity duration-500 ease-in-out group-hover/slide:opacity-100 group-[.swiper-slide-active]/slide:opacity-100"
            quantity={5}
          />
          <div className="relative flex h-full flex-col p-6">
            <div className="grid grow place-items-center">
              <p className="relative mb-1 inline-block bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text text-lg font-bold text-transparent underline">
                {title}
              </p>
            </div>
            {/* Button flip */}
            <div
              onClick={() => {
                setActiveActuality(_key);
              }}
              className="absolute bottom-4 left-1 -m-4 p-4"
            >
              <FlipIcon className="relative h-10 w-10" />
            </div>
            {/* Button Link */}
            <div className="group/arrow absolute bottom-4 right-4 md:right-5">
              <div className="relative inline-flex before:absolute before:inset-0 before:bg-buttercup-500 before:blur-md">
                <Link
                  href={link}
                  target="_blank"
                  className="btn-sm group relative py-0.5 text-buttercup-50 shadow transition duration-150 ease-in-out [background:linear-gradient(theme(colors.buttercup.500),_theme(colors.buttercup.500))_padding-box,_linear-gradient(theme(colors.buttercup.500),_theme(colors.buttercup.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-buttercup-600/70 hover:text-white"
                >
                  <span className="relative inline-flex items-center">
                    Découvrir{' '}
                    <span className="ml-1 tracking-normal text-buttercup-50 transition-transform duration-150 ease-in-out group-hover/arrow:translate-x-1">
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
            className="rounded-[inherit] blur-sm brightness-50 "
            style={{
              objectFit: 'cover',
            }}
          />
          <div className="relative">
            <div className="grid place-items-center">
              <p className="relative inline-block bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text text-2xl font-bold text-transparent underline">
                {title}
              </p>
              <div className="bold text-md max-h-72 overflow-auto px-4 text-center font-semibold text-slate-100">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

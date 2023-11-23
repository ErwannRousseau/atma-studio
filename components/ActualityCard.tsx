import Image from 'next/image';
import Link from 'next/link';

import { HighlighterItem } from './Highlighter';
import Particles from './Particles';

import type { ActualityItem } from '@/sanity/types/HomePage';

export default function ActualityCard({ title, image, link }: ActualityItem) {
  return (
    <HighlighterItem className="swiper-slide group/slide aspect-square h-full w-full">
      <div className="relative z-20 mx-auto aspect-square h-full w-full overflow-hidden rounded-[inherit]">
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
          className="absolute inset-0 z-30 opacity-0 transition-opacity duration-500 ease-in-out group-hover/slide:opacity-100 group-[.swiper-slide-active]/slide:opacity-100"
          quantity={5}
        />
        <div className="relative flex h-full flex-col p-6">
          <div className="grid grow place-items-center">
            <p className="relative mb-1 inline-block bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text text-lg font-bold text-transparent underline">
              {title}
            </p>
          </div>
          <div className="group/arrow absolute bottom-4 right-4 md:right-5 ">
            <div className="relative inline-flex before:absolute before:inset-0 before:bg-buttercup-500 before:blur-md">
              <Link
                href={link}
                target="_blank"
                className="btn-sm group relative z-30 py-0.5 text-buttercup-50 shadow transition duration-150 ease-in-out [background:linear-gradient(theme(colors.buttercup.500),_theme(colors.buttercup.500))_padding-box,_linear-gradient(theme(colors.buttercup.500),_theme(colors.buttercup.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-buttercup-600/70 hover:text-white"
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
    </HighlighterItem>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Swiper, { Navigation } from 'swiper';

import ActualityCard from './ActualityCard';
import Highlighter from './Highlighter';

import type { Actualities } from '@/sanity/types/HomePage';

import 'swiper/swiper.min.css';
Swiper.use([Navigation]);

export default function ActualityCarousel({ actualities }: { actualities: Actualities }) {
  const [swiperInitialized, setSwiperInitialized] = useState<boolean>(false);

  useEffect(() => {
    new Swiper('.actuality-carousel', {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    });
    setSwiperInitialized(true);
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
            className=" pointer-events-none absolute left-2/3 top-2/4 -z-10 -ml-16 -mt-24 opacity-70 blur-2xl"
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
              <defs>
                <linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                  <stop offset="0%" stopColor="#f3a710" />
                  <stop offset="100%" stopColor="#fce98b" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path fill="url(#bs4-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
            </svg>
          </div>
          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* Custom styles in src/css/additional-styles/theme.scss */}
          <div className="relative before:absolute before:inset-0 before:z-20 before:-translate-x-full before:rounded-r-3xl before:bg-gradient-to-l before:from-transparent before:to-buttercup-500/20 before:to-20% before:blur after:absolute after:inset-0 after:z-20 after:translate-x-full after:bg-gradient-to-r after:from-transparent after:to-buttercup-500/20 after:to-20% after:blur">
            <div className="actuality-carousel swiper-container group">
              <Highlighter className="swiper-wrapper w-fit" refresh={swiperInitialized}>
                {/* Carousel items */}
                {actualities.map(({ _key, title, image, link }) => (
                  <ActualityCard key={_key} title={title} image={image} link={link} />
                ))}
              </Highlighter>
            </div>
          </div>
          {/* Arrows */}
          <div className="mt-8 flex justify-end">
            <button className="carousel-prev group relative z-20 flex h-12 w-12 items-center justify-center">
              <span className="sr-only">Previous</span>
              <svg
                className="h-4 w-4 fill-buttercup-50/80 transition duration-150 ease-in-out group-hover:fill-buttercup-500"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next group relative z-20 flex h-12 w-12 items-center justify-center">
              <span className="sr-only">Next</span>
              <svg
                className="h-4 w-4 fill-buttercup-50/80 transition duration-150 ease-in-out group-hover:fill-buttercup-500"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

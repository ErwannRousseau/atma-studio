'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Swiper, { Navigation } from 'swiper';

import Highlighter, { HighlighterItem } from './Highlighter';
import Particles from './Particles';

import CarouselImg02 from '@/public/images/carousel-icon-02.svg';
import CarouselImg03 from '@/public/images/carousel-icon-03.svg';
import CarouselImg04 from '@/public/images/carousel-icon-04.svg';
import CarouselImg05 from '@/public/images/carousel-icon-05.svg';
import ImageCarousel from '@/public/images/cover-tay1an.webp';

const CarouselImages = [ImageCarousel, CarouselImg02, CarouselImg03, CarouselImg04, CarouselImg05];

import 'swiper/swiper.min.css';
Swiper.use([Navigation]);

export default function ActualityCarousel() {
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
          <div className="relative before:absolute before:inset-0 before:z-20 before:-translate-x-full before:rounded-r-3xl before:bg-gradient-to-l before:from-transparent before:to-slate-900 before:to-20% before:blur after:absolute after:inset-0 after:z-20 after:translate-x-full after:bg-gradient-to-r after:from-transparent after:to-slate-900 after:to-20% after:blur">
            <div className="actuality-carousel swiper-container group h-[300px]">
              <Highlighter className="swiper-wrapper w-fit" refresh={swiperInitialized}>
                {/* Carousel items */}
                {CarouselImages.map((image, index) => (
                  <HighlighterItem key={index} className="swiper-slide group/slide h-max">
                    <div
                      className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-cover bg-center bg-no-repeat "
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                      style={{ backgroundImage: `url(${image.src})` }}
                    >
                      {/* Particles animation */}
                      <Particles
                        className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover/slide:opacity-100 group-[.swiper-slide-active]/slide:opacity-100"
                        quantity={5}
                        refresh={swiperInitialized}
                      />
                      {/* Radial gradient */}
                      <div
                        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/3 -translate-x-1/2 translate-y-1/2"
                        aria-hidden="true"
                      >
                        <div className="translate-z-0 absolute inset-0 rounded-full bg-slate-800 blur-[60px] transition-colors duration-500 ease-in-out group-[.swiper-slide-active]/slide:bg-buttercup-500" />
                      </div>
                      <div className="relative flex h-full flex-col p-6">
                        <div className="grid grow place-items-center">
                          <p className="relative mb-1 inline-block bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text text-lg font-bold text-transparent underline">
                            TAY1AN - CARTES EN MAIN
                            <span className="absolute inset-x-0 bottom-0 h-[2.5px] bg-gradient-to-r from-buttercup-500 to-buttercup-200 opacity-0 transition-opacity duration-300 group-hover/slide:opacity-100" />
                          </p>
                        </div>
                        <div className="group/arrow absolute bottom-5 right-6 text-right">
                          <Link
                            className="group inline-flex items-center text-sm font-medium text-buttercup-50 transition duration-150 ease-in-out hover:text-white"
                            href="#0"
                          >
                            Découvrir{' '}
                            <span className="ml-1 tracking-normal text-buttercup-500 transition-transform duration-150 ease-in-out group-hover/arrow:translate-x-1">
                              -&gt;
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </HighlighterItem>
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

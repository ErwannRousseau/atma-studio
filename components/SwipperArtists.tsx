'use client';

import Link from 'next/link';
import React from 'react';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { ReferenceItem } from '@/sanity/types/ReferencesPage';

export default function SwipperArtists({ nextArtists }: { nextArtists: ReferenceItem[] }) {
  return (
    <div className="col-span-12 mx-auto my-0" data-aos="fade-left">
      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        className="mySwiper"
      >
        {nextArtists.map(({ artistName, _key, link, image }) => (
          <SwiperSlide key={_key}>
            <div
              className="group/slide relative z-20 grid aspect-square w-full grow place-items-center overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat md:aspect-4/3.5 xl:aspect-square"
              style={{ backgroundImage: `url(${image.url})` }}
              aria-label={image?.altText}
            >
              <p className="relative mb-1 inline-block bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text text-center text-lg font-bold text-transparent underline">
                {artistName}
              </p>
              <div className="group/arrow absolute bottom-4 right-4 md:right-5  ">
                <div className="relative inline-flex before:absolute before:inset-0 before:bg-buttercup-500 before:blur-md">
                  <Link
                    href={link}
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
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-end gap-6 pr-2">
        <button className="button-prev group relative z-20 flex items-center justify-center">
          <span className="sr-only">Previous</span>
          <svg
            className="h-4 w-4 fill-buttercup-50/80 transition duration-150 ease-in-out group-hover:fill-buttercup-500"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
          </svg>
        </button>
        <button className="button-next group relative z-20 flex items-center justify-center">
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
  );
}

// Optional button link :
/* <div className="group/arrow absolute bottom-5 right-6 text-right">
    <Link
      className="group inline-flex items-center text-sm font-medium text-buttercup-50 transition duration-150 ease-in-out hover:text-white"
      href="#0"
    >
      Découvrir{' '}
      <span className="ml-1 tracking-normal text-buttercup-500 transition-transform duration-150 ease-in-out group-hover/arrow:translate-x-1">
        -&gt;
      </span>
    </Link>
  </div> */

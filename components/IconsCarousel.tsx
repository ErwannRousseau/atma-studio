'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import Swiper, { Autoplay } from 'swiper';

import Particles from './Particles';

import Swiper1 from '@/public/images/swiper1.svg';
import Swiper10 from '@/public/images/swiper10.svg';
import Swiper2 from '@/public/images/swiper2.svg';
import Swiper3 from '@/public/images/swiper3.svg';
import Swiper4 from '@/public/images/swiper4.svg';
import Swiper5 from '@/public/images/swiper5.svg';
import Swiper6 from '@/public/images/swiper6.svg';
import Swiper7 from '@/public/images/swiper7.svg';
import Swiper8 from '@/public/images/swiper8.svg';
import Swiper9 from '@/public/images/swiper9.svg';

// Import Swiper
import 'swiper/swiper.min.css';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
Swiper.use([Autoplay]);

export default function IconsCarousel() {
  useEffect(() => {
    new Swiper('.swiper-carousel', {
      slidesPerView: 'auto',
      spaceBetween: 64,
      centeredSlides: true,
      loop: true,
      speed: 5000,
      noSwiping: true,
      noSwipingClass: 'swiper-slide',
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
    });
  }, []);

  return (
    <section>
      <div className="relative w-full ">
        {/* Particles animation */}
        <div className="absolute inset-0 mx-auto max-w-6xl ">
          <Particles className="absolute inset-0 -z-10" quantity={5} />
        </div>
        <div className="relative py-7 md:py-10">
          <div className="overflow-hidden before:absolute before:top-[-4px] before:h-2 before:w-[100%] before:backdrop-blur-xs after:absolute after:bottom-[-4px] after:h-2 after:w-[100%] after:backdrop-blur-xs ">
            {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
            {/* * Custom styles in src/css/additional-styles/theme.scss */}
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="swiper-carousel swiper-container relative h-10 before:pointer-events-none before:absolute before:inset-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-buttercup-300/60 before:blur-sm after:pointer-events-none  after:absolute after:inset-0 after:left-auto after:z-10 after:w-32 after:bg-gradient-to-l after:from-buttercup-300/60 after:blur"
            >
              <div className="swiper-wrapper select-none items-center !ease-linear">
                {/* Carousel items */}
                <div className="swiper-slide icons-swiper-slide !w-auto">
                  <Image src={Swiper1} alt="swiper 01" />
                </div>
                <div className="swiper-slide icons-swiper-slide !w-auto">
                  <Image src={Swiper3} alt="swiper 03" />
                </div>
                <div className="swiper-slide icons-swiper-slide !w-auto">
                  <Image src={Swiper2} alt="swiper 02" />
                </div>
                <div className="swiper-slide icons-swiper-slide !w-auto">
                  <Image src={Swiper8} alt="swiper 08" />
                </div>
                <div className="swiper-slide icons-swiper-slide !w-auto">
                  <Image src={Swiper4} alt="swiper 04" />
                </div>
                <div className="swiper-slide icons-swiper-slide !w-auto">
                  <Image src={Swiper5} alt="swiper 05" />
                </div>
                <div className="swiper-slide icons-swiper-slide !w-auto">
                  <Image src={Swiper6} alt="swiper 06" />
                </div>
                <div className="swiper-slide icons-swiper-slide !w-auto">
                  <Image src={Swiper7} alt="swiper 07" />
                </div>
                <div className="swiper-slide icons-swiper-slide !w-auto">
                  <Image src={Swiper9} alt="swiper 09" />
                </div>
                <div className="swiper-slide icons-swiper-slide !w-auto">
                  <Image src={Swiper10} alt="swiper 010" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

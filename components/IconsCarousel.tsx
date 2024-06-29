"use client";

import Image from "next/image";
import { useEffect } from "react";
import Swiper, { Autoplay } from "swiper";

import Particles from "./Particles";

import Swiper1 from "@/public/images/swiper1.svg";
import Swiper2 from "@/public/images/swiper2.svg";
import Swiper3 from "@/public/images/swiper3.svg";
import Swiper4 from "@/public/images/swiper4.svg";
import Swiper5 from "@/public/images/swiper5.svg";
import Swiper6 from "@/public/images/swiper6.svg";
import Swiper7 from "@/public/images/swiper7.svg";
import Swiper8 from "@/public/images/swiper8.svg";
import Swiper9 from "@/public/images/swiper9.svg";
import Swiper10 from "@/public/images/swiper10.svg";

const SwiperIcons = [
  Swiper1,
  Swiper2,
  Swiper3,
  Swiper7,
  Swiper4,
  Swiper5,
  Swiper6,
  Swiper9,
  Swiper10,
  Swiper8,
];

import "swiper/swiper.min.css";

Swiper.use([Autoplay]);

export default function IconsCarousel() {
  useEffect(() => {
    new Swiper(".swiper-carousel", {
      slidesPerView: "auto",
      spaceBetween: 64,
      centeredSlides: true,
      loop: true,
      speed: 5000,
      noSwiping: true,
      noSwipingClass: "swiper-slide",
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
    });
  }, []);

  return (
    <section>
      <div className="relative w-full">
        {/* Particles animation */}
        <div className="absolute inset-0 mx-auto max-w-6xl">
          <Particles className="-z-10 absolute inset-0" quantity={5} />
        </div>
        <div className="relative py-7 md:py-10">
          <div className="overflow-hidden before:absolute before:top-[-4px] before:h-2 before:w-[100%] before:backdrop-blur-xs after:absolute after:bottom-[-4px] after:h-2 after:w-[100%] after:backdrop-blur-xs">
            {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
            {/* Custom styles in src/css/additional-styles/theme.scss */}
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="swiper-carousel swiper-container relative h-10 before:pointer-events-none before:absolute before:inset-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-buttercup-300/60 before:blur-sm after:pointer-events-none after:absolute after:inset-0 after:left-auto after:z-10 after:w-32 after:bg-gradient-to-l after:from-buttercup-300/60 after:blur"
            >
              <div className="swiper-wrapper !ease-linear select-none items-center">
                {/* Carousel items */}
                {SwiperIcons.map((icon, key) => (
                  <div
                    // biome-ignore lint/suspicious/noArrayIndexKey:
                    key={key}
                    className="swiper-slide icons-swiper-slide !w-auto"
                  >
                    <Image src={icon} alt="swiper 01" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

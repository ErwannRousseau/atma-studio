import { Popover } from '@rewind-ui/core';
import Image from 'next/image';
import Link from 'next/link';

import Particles from './Particles';

import Illustration from '@/public/images/glow-bottom.svg';

export default function HeroHome() {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-10" />
        {/* Illustration */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden rounded-b-[3rem]"
          aria-hidden="true"
        >
          <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
            <Image src={Illustration} className="max-w-none" width={2146} priority alt="Hero Illustration" />
          </div>
        </div>
        <div className="pb-16 pt-32 md:pb-32 md:pt-52">
          {/* Hero content */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6" data-aos="fade-down">
              <div className="relative inline-flex before:absolute before:inset-0 before:bg-buttercup-500 before:blur-md">
                <div className="btn-sm group relative py-0.5 text-buttercup-50 shadow transition duration-150 ease-in-out [background:linear-gradient(theme(colors.buttercup.500),_theme(colors.buttercup.500))_padding-box,_linear-gradient(theme(colors.buttercup.500),_theme(colors.buttercup.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/50 hover:text-white">
                  <span className="relative inline-flex items-center">Studio d&apos;enregistrement</span>
                </div>
              </div>
            </div>
            <h1
              className="h1 bg-gradient-to-r from-buttercup-50 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent"
              data-aos="fade-down"
            >
              ATMA STUDIO
            </h1>
            <p className="mb-8 text-lg text-buttercup-50" data-aos="fade-down" data-aos-delay="200">
              Enregistrement, composition, production et post-production musicale
            </p>
            <div
              className="mx-auto max-w-xs space-y-4 sm:inline-flex sm:max-w-none sm:justify-center sm:space-x-4 sm:space-y-0"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <Popover color="slate" shadow="md" size="md">
                <Popover.Trigger>
                  <div className="cursor-not-allowed">
                    <a
                      className="btn group w-full cursor-not-allowed bg-gradient-to-r from-white/80 via-white to-white/80 text-slate-900 transition duration-150 ease-in-out hover:bg-white"
                      href="#0"
                    >
                      Réservez une session
                      <span className="ml-1 tracking-normal text-buttercup-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </a>
                  </div>
                </Popover.Trigger>
                <Popover.Content>La réservation en ligne arrive bientôt !</Popover.Content>
              </Popover>
              <div>
                <Link
                  className="btn w-full bg-slate-900 bg-opacity-25 text-slate-200 transition duration-150 ease-in-out hover:bg-opacity-30 hover:text-white"
                  href="/nos-references"
                >
                  <svg
                    className="mr-3 shrink-0 fill-slate-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                  </svg>
                  <span>Voir nos artistes</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

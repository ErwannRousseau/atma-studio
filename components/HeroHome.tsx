import { Sliders, Sparkles } from 'lucide-react';
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
                  <p className="relative inline-flex items-center">Studio d&apos;enregistrement</p>
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
              <div>
                <Link
                  href="/reservation"
                  className="btn group w-full bg-gradient-to-r from-white/80 via-white to-white/80 text-slate-900 transition duration-150 ease-in-out hover:bg-white"
                >
                  Réservez une session
                  <span className="ml-1 tracking-normal text-buttercup-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  className="btn w-full bg-slate-900 bg-opacity-25 text-slate-200 transition duration-150 ease-in-out hover:bg-opacity-30 hover:text-white"
                  href="/nos-references"
                >
                  <Sparkles className="mr-3 shrink-0 " />
                  <span>Voir nos artistes</span>
                </Link>
              </div>
              <div>
                <Link
                  className="btn w-full bg-slate-900 bg-opacity-25 text-slate-200 transition duration-150 ease-in-out hover:bg-opacity-30 hover:text-white"
                  href="/contact-acces?subject=Mix%20à%20distance"
                >
                  <Sliders className="mr-3 shrink-0 fill-slate-300" />
                  <span>Mix à distance</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

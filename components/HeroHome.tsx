import { Sliders, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Particles from "./Particles";

import { cn } from "@/lib/utils";
import Illustration from "@/public/images/glow-bottom.svg";
import { buttonVariants } from "./ui/button";

export default function HeroHome() {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Particles animation */}
        <Particles className="-z-10 absolute inset-0" />
        {/* Illustration */}
        <div
          className="-z-10 -mx-28 pointer-events-none absolute inset-0 overflow-hidden rounded-b-[3rem]"
          aria-hidden="true"
        >
          <div className="-z-10 -translate-x-1/2 absolute bottom-0 left-1/2">
            <Image
              src={Illustration}
              className="max-w-none"
              width={2146}
              priority
              alt="Hero Illustration"
            />
          </div>
        </div>
        <div className="pt-32 pb-16 md:pt-52 md:pb-32">
          {/* Hero content */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6" data-aos="fade-down">
              <div className="relative inline-flex before:absolute before:inset-0 before:bg-buttercup-500 before:blur-md">
                <div
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "group relative overflow-hidden [background:linear-gradient(theme(colors.buttercup.500),_theme(colors.buttercup.500))_padding-box,_linear-gradient(theme(colors.buttercup.500),_theme(colors.buttercup.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/50",
                  )}
                >
                  <p className="relative inline-flex items-center">
                    Studio d&apos;enregistrement
                  </p>
                </div>
              </div>
            </div>
            <h1
              className="h1 bg-gradient-to-r from-buttercup-50 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent"
              data-aos="fade-down"
            >
              ATMA STUDIO
            </h1>
            <p
              className="mb-8 text-buttercup-50 text-lg"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Enregistrement, composition, production et post-production
              musicale
            </p>
            <div
              className="mx-auto max-w-xs space-y-4 sm:inline-flex sm:max-w-none sm:justify-center sm:space-x-4 sm:space-y-0"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div>
                <Link
                  href="/reservation"
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "group w-full",
                  )}
                >
                  Réservez une session
                  <span className="ml-1 text-buttercup-500 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  href="/nos-references"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group w-full",
                  )}
                >
                  <Sparkles className="mr-3 shrink-0" />
                  <span>Voir nos artistes</span>
                </Link>
              </div>
              <div>
                <Link
                  href="/contact-acces?subject=Mix%20à%20distance"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group w-full",
                  )}
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

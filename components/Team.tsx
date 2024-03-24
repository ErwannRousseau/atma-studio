"use client";

import { Transition } from "@headlessui/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Particles from "./Particles";

import { cn } from "@/lib/utils";
import type { TeamMember } from "@/sanity/types/StudioPage";

export default function Team({ team }: { team: TeamMember[] }) {
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const [autorotateTiming] = useState<number>(7000);

  const testimonials = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(active + 1 === team.length ? 0 : (active) => active + 1);
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate, autorotateTiming, team.length]);

  const heightFix = () => {
    if (testimonials.current?.parentElement)
      testimonials.current.parentElement.style.height = `${testimonials.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, [heightFix]);

  return (
    <section>
      <div className="mx-auto max-w-3xl px-4 pt-8 sm:px-6 md:pt-20">
        <div className="relative pb-12 md:pb-20">
          {/* Particles animation */}
          <div className="-z-10 -mt-6 -translate-x-1/2 absolute top-0 left-1/2 h-80 w-80">
            <Particles
              className="-z-10 absolute inset-0"
              quantity={10}
              staticity={40}
            />
          </div>
          {/* Carousel */}
          <div className="text-center">
            {/* Testimonial image */}
            <div className="relative h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_40%,theme(colors.white))]">
              <div className="-z-10 -translate-x-1/2 before:-z-20 after:-z-20 pointer-events-none absolute top-0 left-1/2 h-[480px] w-[480px] rounded-full after:absolute before:absolute after:inset-0 before:inset-0 after:m-px after:rounded-full before:rounded-full after:bg-buttercup-500/20 before:bg-gradient-to-b before:from-buttercup-200/50 before:to-20% before:to-transparent">
                {team.map(({ image, name }, index) => (
                  <Transition
                    key={name}
                    show={active === index}
                    className="-z-10 absolute inset-0 h-full"
                    enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                    enterFrom="opacity-0 -rotate-[60deg]"
                    enterTo="opacity-100 rotate-0"
                    leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                    leaveFrom="opacity-100 rotate-0"
                    leaveTo="opacity-0 rotate-[60deg]"
                    beforeEnter={() => heightFix()}
                  >
                    <Image
                      className="-translate-x-1/2 relative top-9 left-1/2 aspect-square rounded-full"
                      src={image.url}
                      width={90}
                      height={90}
                      style={{
                        objectFit: "cover",
                      }}
                      alt={`photo de profil de ${name}`}
                    />
                  </Transition>
                ))}
              </div>
            </div>
            {/* Quote */}
            <div className="mb-5 transition-all delay-300 duration-150 ease-in-out">
              <div className="relative flex flex-col" ref={testimonials}>
                {team.map(({ quote }, index) => (
                  <Transition
                    key={quote}
                    show={active === index}
                    enter="transition ease-in-out duration-500 delay-200 order-first"
                    enterFrom="opacity-0 -translate-x-4"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-out duration-500 delay-300 absolute hidden"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-4"
                    beforeEnter={() => heightFix()}
                  >
                    <div className="bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text font-bold text-transparent text-xl">
                      {quote}
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-col justify-center gap-2 sm:flex-row sm:flex-wrap">
              {team.map(({ role, name }, index) => (
                <button
                  type="button"
                  className={cn(
                    "btn-sm relative mx-auto py-1.5 text-slate-300 text-xs transition duration-150 ease-in-out [background:linear-gradient(theme(colors.buttercup.300/50),_theme(colors.buttercup.400/20))_padding-box,_conic-gradient(theme(colors.buttercup.300),_theme(colors.buttercup.700)_25%,_theme(colors.buttercup.900)_75%,_theme(colors.buttercup.100)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 sm:mx-0 before:rounded-full before:bg-buttercup-900/30",
                    {
                      "opacity-100": active === index,
                      "opacity-30 hover:opacity-60": active !== index,
                    },
                  )}
                  key={name}
                  onClick={() => {
                    setActive(index);
                    setAutorotate(false);
                  }}
                >
                  <span className="relative">
                    <span className="text-slate-50">{name}</span>{" "}
                    <span className="text-slate-600">-</span>{" "}
                    <span>{role}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

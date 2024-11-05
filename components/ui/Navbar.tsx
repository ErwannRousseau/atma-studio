"use client";

import ActiveLink from "@/components/utils/ActiveLink";
import { cn } from "@/lib/utils";
import { Transition } from "@headlessui/react";
import Hamburger from "hamburger-react";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex navbar:hidden">
      {/* Hamburger button */}
      <button
        type="button"
        ref={trigger}
        className={cn("z-30 mt-2 mr-5 size-10 sm:mr-0", {
          active: mobileNavOpen,
        })}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <Hamburger toggled={mobileNavOpen} toggle={setMobileNavOpen} />
      </button>

      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="fixed top-0 left-0 z-20 grid h-screen w-[82%] place-items-center overflow-scroll bg-gradient-to-r from-95% from-black via-opacity-50 to-1% to-transparent"
          enter="transition ease-out duration-200 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-out duration-200"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="absolute top-4 left-4">
            <Logo />
          </div>
          <ul className="flex h-1/2 flex-col justify-center gap-4 px-5 py-2">
            <li>
              <ActiveLink href="/" onClick={() => setMobileNavOpen(false)}>
                Accueil
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href="/le-studio"
                onClick={() => setMobileNavOpen(false)}
              >
                Le studio
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href="/nos-services"
                onClick={() => setMobileNavOpen(false)}
              >
                Nos services
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href="/nos-references"
                onClick={() => setMobileNavOpen(false)}
              >
                Nos références
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href="/contact-acces"
                onClick={() => setMobileNavOpen(false)}
              >
                Contact/Accès
              </ActiveLink>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  );
}

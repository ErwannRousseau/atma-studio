'use client';

import { Transition } from '@headlessui/react';
import { useState, useRef, useEffect } from 'react';

import ActiveLink from '../utils/ActiveLink';

import Logo from './Logo';

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node))
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="flex navbar:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'} z-30 mr-5 mt-2 sm:mr-0`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="h-6 w-6 fill-current text-buttercup-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="via-opacity-50 to-1% fixed left-0 top-0 z-20 grid h-screen w-[82%] place-items-center overflow-scroll bg-gradient-to-r from-black from-95% to-transparent"
          enter="transition ease-out duration-200 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-out duration-200"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="absolute left-4 top-4">
            <Logo />
          </div>
          <ul className="flex h-1/2 flex-col justify-center gap-4 px-5 py-2">
            <li>
              <ActiveLink href="/" onClick={() => setMobileNavOpen(false)}>
                Accueil
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/le-studio" onClick={() => setMobileNavOpen(false)}>
                Le studio
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/nos-service" onClick={() => setMobileNavOpen(false)}>
                Nos services
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/nos-references" onClick={() => setMobileNavOpen(false)}>
                Nos références
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/acces-contact" onClick={() => setMobileNavOpen(false)}>
                Contact/Accès
              </ActiveLink>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  );
}

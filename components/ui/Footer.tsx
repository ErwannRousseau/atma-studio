import { Instagram } from 'lucide-react';
import Link from 'next/link';

import Logo from './Logo';

import { openMapsApp } from '@/utils/openMapApp';

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-8 md:py-12">
          <div className="mb-4 flex flex-col items-center justify-center md:mb-6 md:flex-row md:justify-between">
            <div className="mb-4 grid shrink-0 place-items-center">
              <Logo />
              <div className="mt-4">
                <p
                  onClick={openMapsApp}
                  className="cursor-pointer bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text text-sm text-transparent"
                >
                  6 square Commodore Guiné,
                  <br />
                  44100 Nantes
                </p>
                <p className=" bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text text-sm text-transparent"></p>
                <a className="text-sm text-buttercup-500 hover:text-buttercup-600" href="tel:0695157355">
                  0695157355
                </a>
              </div>
            </div>
            {/* Social links */}
            <div className="mb-4 flex items-center space-x-4 md:order-2 md:mb-0 md:ml-4">
              <div className="bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text text-transparent">
                Suivez nous
              </div>
              <ul className="inline-flex space-x-3">
                <li>
                  <Link href="https://www.instagram.com/atma.wav/" target="blank" aria-label="Instagram">
                    <Instagram size={32} color="#f3a710" strokeWidth={1.75} absoluteStrokeWidth />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center md:flex md:items-center md:justify-between">
            <div className="mb-2 text-sm font-medium md:order-1 md:mb-0">
              <ul className="inline-flex flex-wrap text-sm font-medium">
                <li className="after:px-2 after:text-gray-400 after:content-['·'] last:after:hidden">
                  <Link className="text-gray-500 hover:text-gray-500 hover:underline" href="#0">
                    Conditions Générales
                  </Link>
                </li>
                <li className="after:px-2 after:text-gray-400 after:content-['·'] last:after:hidden">
                  <Link className="text-gray-500 hover:text-gray-500 hover:underline" href="#0">
                    Confidentialité
                  </Link>
                </li>
              </ul>
            </div>
            {/* Copyright */}
            <div className="text-sm text-gray-500">@ATMA Studio | Tous droits réservés</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

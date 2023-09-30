import Link from 'next/link';

import Highlighter, { HighlighterItem } from './Highlighter';
import Particles from './Particles';
import SwipperArtists from './SwipperArtists';

import { ReferenceItem } from '@/sanity/types/ReferencesPage';

export default function ArtistsList({ referencesList }: { referencesList: ReferenceItem[] }) {
  const firstBlockArtists = referencesList.slice(0, 2);
  const secondBlockArtists = referencesList.slice(2, 5);

  const nextArtists = referencesList.slice(5);
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div>
          <div className="relative pb-6 md:pb-10">
            {/* Blurred shape */}
            <div
              className="pointer-events-none absolute bottom-0 left-1/2 -mb-20 -translate-x-1/2 opacity-50 blur-2xl"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                <defs>
                  <linearGradient id="bs2-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                    <stop offset="0%" stopColor="#f3a710" />
                    <stop offset="100%" stopColor="#fce98b" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#bs2-a)"
                  fillRule="evenodd"
                  d="m346 898 461 369-284 58z"
                  transform="translate(-346 -898)"
                />
              </svg>
            </div>
            <Highlighter className="grid gap-6 md:grid-cols-12">
              {/* Box #1 */}
              {firstBlockArtists.map(({ _key, artistName, image, link }) => (
                <div key={_key} className="group/slide md:col-span-6" data-aos="fade-down" data-aos-delay="100">
                  <HighlighterItem>
                    <div
                      className="relative z-20 grid aspect-square w-full  grow place-items-center overflow-hidden rounded-[inherit] bg-cover bg-center bg-no-repeat md:aspect-4/3 "
                      style={{ backgroundImage: `url(${image.url})` }}
                      aria-label={image?.altText}
                    >
                      <Particles
                        className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover/slide:opacity-100"
                        quantity={5}
                      />
                      <p className="relative mb-1 inline-block bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text text-center text-lg font-bold text-transparent underline">
                        {artistName}
                        <span className="absolute inset-x-0 bottom-0 h-[2.5px] rounded-sm bg-gradient-to-r from-buttercup-500 to-buttercup-200 opacity-0 transition-opacity duration-300 group-hover/slide:opacity-100" />
                      </p>

                      <div className=" group/arrow absolute bottom-5 right-5 md:bottom-6 md:right-8 ">
                        <div className="relative inline-flex before:absolute before:inset-0 before:bg-buttercup-500 before:blur-md">
                          <Link
                            href={link}
                            target="_blank"
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
                  </HighlighterItem>
                </div>
              ))}
              {/* Box #3 */}
              {secondBlockArtists.map(({ _key, artistName, image, link }) => (
                <div key={_key} className="group/slide md:col-span-4" data-aos="fade-down">
                  <HighlighterItem>
                    <div
                      className="relative z-20 grid aspect-square w-full grow  place-items-center overflow-hidden rounded-[inherit] bg-cover bg-center bg-no-repeat md:aspect-4/3.5"
                      style={{ backgroundImage: `url(${image.url})` }}
                      aria-label={image?.altText}
                    >
                      <Particles
                        className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover/slide:opacity-100"
                        quantity={5}
                      />
                      <p className="relative mb-1 inline-block bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text text-center text-lg font-bold text-transparent underline">
                        {artistName}
                        <span className="absolute inset-x-0 bottom-0 h-[2.5px] rounded-sm bg-gradient-to-r from-buttercup-500 to-buttercup-200 opacity-0 transition-opacity duration-300 group-hover/slide:opacity-100" />
                      </p>
                      <div className=" absolute bottom-5 right-5 md:bottom-6 md:right-8 ">
                        <div className="relative inline-flex before:absolute before:inset-0 before:bg-buttercup-500 before:blur-md">
                          <Link
                            href={link}
                            target="_blank"
                            className="btn-sm group relative py-0.5 text-buttercup-50 shadow transition duration-150 ease-in-out [background:linear-gradient(theme(colors.buttercup.500),_theme(colors.buttercup.500))_padding-box,_linear-gradient(theme(colors.buttercup.500),_theme(colors.buttercup.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-buttercup-600/70 hover:text-white"
                          >
                            <span className="relative inline-flex items-center">
                              Découvrir{' '}
                              <span className="ml-1 tracking-normal text-buttercup-50 transition-transform duration-150 ease-in-out group-hover/slide:translate-x-1">
                                -&gt;
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </HighlighterItem>
                </div>
              ))}
              {/* Box #4 */}
            </Highlighter>
          </div>
        </div>
        <SwipperArtists nextArtists={nextArtists} />
      </div>
    </section>
  );
}
// Optional arrow
/* <div className="absolute bottom-6 right-8">
      <a
        className="btn-sm group text-slate-300 transition duration-150 ease-in-out [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/30 hover:text-white"
        href="#0"
      >
        <span className="inline-flex items-center">
          Découvrir{' '}
          <span className="ml-1 tracking-normal text-buttercup-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
            -&gt;
          </span>
        </span>
      </a>
  </div> */

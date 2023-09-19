import React, { useState, useEffect } from 'react';
import { TERipple } from 'tw-elements-react';

export default function ScrollTopButton() {
  const [showButton, setShowButton] = useState<boolean>(false);

  const handleScroll = () => {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <TERipple rippleColor="light">
          <button
            type="button"
            onClick={backToTop}
            className={` ${
              showButton ? `inline-block` : `hidden`
            } fixed bottom-6 right-6 z-50 rounded-full bg-buttercup-500/50 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-buttercup-500/60 hover:shadow-lg focus:bg-buttercup-500/60 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-buttercup-600/50 active:shadow-lg`}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="h-4 w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
              ></path>
            </svg>
          </button>
        </TERipple>
      )}
    </>
  );
}

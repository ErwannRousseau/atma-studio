'use client';

import Script from 'next/script';

export default function GoogleAds() {
  const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

  return (
    <>
      <Script strategy="afterInteractive" async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`} />
      <Script
        id="google-ads"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GOOGLE_ADS_ID}', {
                  page_path: window.location.pathname,
                }),;
                `,
        }}
      />
    </>
  );
}

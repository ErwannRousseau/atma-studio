import type { HomePageData } from '@/sanity/types/HomePage';

import ActualityCarousel from '@/components/ActualityCarousel';
import AtmaPres from '@/components/AtmaPres';
import HeroHome from '@/components/HeroHome';
import IconsCarousel from '@/components/IconsCarousel';
import { homePageQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';

export default async function Home() {
  const { history, image, actualitySection } = await sanityFetch<HomePageData>({ query: homePageQuery });

  return (
    <>
      <HeroHome />
      <IconsCarousel />
      <AtmaPres history={history} image={image} />
      <ActualityCarousel actualities={actualitySection} />
    </>
  );
}

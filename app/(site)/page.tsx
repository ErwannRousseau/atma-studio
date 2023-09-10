import ActualityCarousel from '@/components/ActualityCarousel';
import AtmaPres from '@/components/AtmaPres';
import HeroHome from '@/components/HeroHome';
import SwipperCarousel from '@/components/IconsCarousel';

export default function Home() {
  return (
    <>
      <HeroHome />
      <SwipperCarousel />
      <AtmaPres />
      <ActualityCarousel />
    </>
  );
}

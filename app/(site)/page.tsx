import ActualityCarousel from '@/components/ActualityCarousel';
import AtmaPres from '@/components/AtmaPres';
import HeroHome from '@/components/HeroHome';
import IconsCarousel from '@/components/IconsCarousel';

export default function Home() {
  return (
    <>
      <HeroHome />
      <IconsCarousel />
      <AtmaPres />
      <ActualityCarousel />
    </>
  );
}

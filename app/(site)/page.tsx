import ActualityCarousel from '@/components/ActualityCarousel';
import AtmaPres from '@/components/AtmaPres';
import Cta from '@/components/cta';
import Features02 from '@/components/features-02';
import Features03 from '@/components/features-03';
import Features04 from '@/components/features-04';
import Hero from '@/components/Hero';
import SwipperCarousel from '@/components/IconsCarousel';
import Pricing from '@/components/pricing';
import Testimonials from '@/components/Team';

export default function Home() {
  return (
    <>
      <Hero />
      <SwipperCarousel />
      <AtmaPres />
      {/* <Features02 /> */}
      {/* <Features03 /> */}
      <ActualityCarousel />
      {/* <Features04 /> */}
      {/* <Pricing />
      <Testimonials />
      <Cta /> */}
    </>
  );
}

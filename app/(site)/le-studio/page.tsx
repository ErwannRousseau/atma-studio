import EquipmentsList from '@/components/EquipmentsList';
import HeroStudio from '@/components/HeroStudio';
import StudioPres from '@/components/StudioPres';
import Team from '@/components/Team';

export default function StudioPage() {
  return (
    <>
      <HeroStudio />
      <StudioPres />
      <EquipmentsList />
      <Team />
      {/* <Cta />
      <Features02 />
      <Features03 />
      <ActualityCarousel />
      <Features04 />
      <Pricing /> */}
    </>
  );
}

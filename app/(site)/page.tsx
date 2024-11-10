import ActualityCarousel from "@/components/ActualityCarousel";
import AtmaPres from "@/components/AtmaPres";
import HeroHome from "@/components/HeroHome";
import IconsCarousel from "@/components/IconsCarousel";
import { getHomePageData } from "@/sanity/lib/queries";

export default async function Home() {
  const { history, image, actualitySection } = await getHomePageData();

  return (
    <>
      <HeroHome />
      <IconsCarousel />
      <AtmaPres history={history} image={image} />
      <ActualityCarousel actualities={actualitySection} />
    </>
  );
}

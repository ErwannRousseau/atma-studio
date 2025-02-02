import ActualityCarousel from "@/components/ActualityCarousel";
import AtmaPres from "@/components/AtmaPres";
import HeroHome from "@/components/HeroHome";
import IconsCarousel from "@/components/IconsCarousel";
import { getHomePageData } from "@/sanity/lib/dataFetchers";

export default async function Home() {
  const { data } = await getHomePageData();

  return (
    <>
      <HeroHome />
      <IconsCarousel />
      <AtmaPres history={data.history} image={data.image} />
      <ActualityCarousel actualities={data.actualitySection} />
    </>
  );
}

import {
  Activity,
  BoomBox,
  CassetteTape,
  Disc3,
  Headphones,
  MicVocal,
  Music,
  Music2,
  Music4,
  Speaker,
} from "lucide-react";
import { Marquee } from "./Marquee";
import Particles from "./Particles";

const icons = [
  Activity,
  BoomBox,
  CassetteTape,
  Disc3,
  Headphones,
  MicVocal,
  Music,
  Music2,
  Music4,
  Speaker,
];

export default function IconsCarousel() {
  return (
    <section>
      <div className="relative w-full">
        {/* Particles animation */}
        <div className="absolute inset-0 mx-auto max-w-6xl">
          <Particles className="-z-10 absolute inset-0" quantity={5} />
        </div>
        <div
          className="relative py-7 md:py-10"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <Marquee>
            {icons.map((Icon, index) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey:
                key={index}
                className="relative mr-16 flex h-full w-fit items-center justify-start"
              >
                <Icon size={32} color="#f3a710" strokeWidth={1.5} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

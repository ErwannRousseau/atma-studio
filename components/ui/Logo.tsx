import Image from "next/image";
import Link from "next/link";

import LogoImg from "@/public/images/logo.webp";

export default function Logo() {
  return (
    <Link className="grid h-[70px] w-[70px]" href="/" aria-label="Atma Studio">
      <Image
        src={LogoImg}
        priority
        alt="Logo Atam Studio"
        className="h-auto w-auto"
      />
    </Link>
  );
}

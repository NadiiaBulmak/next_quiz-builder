'use client';

import { LogoType } from "@/types/props";
import Image from "next/image";

export default function Logo({ opened, setOpened }: LogoType) {
  const handleClick = () => {
    if (!setOpened) return;
    setOpened(!opened);
  };

  return (
    <div
      className="flex lg:min-h-18 items-center p-2 px-3 border-b border-gray-300"
      onClick={handleClick}
    >
      {opened ? (
        <Image
          src="/logo.webp"
          alt="Quiz Flow logo"
          width={180}
          height={72}
          className="h-auto w-auto max-h-14"
          priority
        />
      ) : (
        <Image
          src="/icon.webp"
          alt="Quiz Flow logo"
          width={72}
          height={72}
          className="h-auto w-auto max-h-14"
          priority
        />
      )}
    </div>
  );
}
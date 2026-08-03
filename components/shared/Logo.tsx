import Image from "next/image";

export default function Logo() {
    return (<div className="flex lg:min-h-18 items-center p-2 px-3">
  <Image
    src="/logo.webp"
    alt="Quiz Flow logo"
    width={180}
    height={72}
    className="h-auto w-auto max-h-14"
    priority
  />
</div>);
}
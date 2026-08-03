import { SectionTopContentType } from "@/types/props";

export default function SectionTopContent({ heading, subheading }: SectionTopContentType) {
    return (
        <div className="flex flex-col items-start gap-1 md:items-start">
            <h2 className="text-xl md:text-2xl font-medium text-black relative after:absolute after:right-[-20%] md:after:right-[-20%] after:w-5 after:h-5 after:bg-[url('/images/yellow.webp')] after:bg-contain after:top-[50%] after:bottom-[50%] after:-translate-y-1/2 after:-translate-x-1/2">{heading}</h2>
            <p className="text-xs md:text-sm font-regular text-zinc-400">{subheading}</p>
        </div>
    )
}

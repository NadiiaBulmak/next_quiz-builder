import { SectionTopContentType } from "@/types/props";

export default function SectionTopContent({ heading, subheading }: SectionTopContentType) {
    return (
        <div className="flex flex-col items-start gap-1 md:items-start">
            <h2 className="text-xl md:text-2xl font-medium text-black">{heading}</h2>
            <p className="text-xs md:text-sm font-regular text-zinc-400">{subheading}</p>
        </div>
    )
}

import { CONTENT } from "@/constants/content";

export default function RightsReserved() {
    return (
        <div className="flex w-full items-center justify-between px-12 py-6 text-xs font-light text-zinc-400 dark:bg-black max-w-[85rem] mx-auto">
            <p>{CONTENT.footer.rightsReserved}</p>
            <p>{CONTENT.footer.email}</p>
        </div>
    )
}
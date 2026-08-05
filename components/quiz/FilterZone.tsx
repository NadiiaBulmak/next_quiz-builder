import {  SlidersHorizontal } from "lucide-react";
import { Input } from "../ui/input";

export default function FilterZone() {
    return (
        <div className="flex items-stretch gap-3 py-3 px-4 w-full h-16">
            <Input
                type="text"
                placeholder="Search quizzes..."
                className="flex-1 bg-gray-100 rounded-sm p-2 h-10 border-1 border-gray-300"
            />

            <button className="p-2 bg-gray-100 rounded-sm cursor-pointer border-1 border-gray-300">
                <SlidersHorizontal width={24} height={24} />
            </button>
        </div>
    )
}
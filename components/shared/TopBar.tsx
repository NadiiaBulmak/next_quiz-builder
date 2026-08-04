'use client';
import { getNavTitle } from "@/utils/getNavTitle";

export default function TopBar() {
    const { label, description } = getNavTitle();
    return (
        <div className="flex flex-col bg-white dark:bg-black p-4 py-3 border-b border-gray-300 dark:border-gray-700">
            <h1 className="text-lg font-bold">{label}</h1>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    )
}
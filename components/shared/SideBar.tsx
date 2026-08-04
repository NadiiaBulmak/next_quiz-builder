'use client';

import { User } from "@/types/user";
import Logo from "./Logo";
import SidebarMenu from "./SidebarMenu";
import SidebarBottom from "./SidebarBottom";
import { useState } from "react";

export default function SideBar({ name, email }: User) {
    const [opened, setOpened] = useState(true);

    return (
        <div className={`hidden lg:flex flex-col gap-4 h-screen bg-white px-4 shadow-lg border-r border-gray-300 overflow-hidden transition-[max-width] duration-300 ease-in-out ${opened ? 'max-w-[20rem]' : 'max-w-[5rem]'}`}>
            <div className="flex-1 flex flex-col gap-4 min-w-0">
                <Logo opened={opened} setOpened={setOpened} />
                <SidebarMenu opened={opened} />
            </div>
            <SidebarBottom name={name} email={email} opened={opened} />
        </div>
    );
}
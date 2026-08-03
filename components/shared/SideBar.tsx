import { User } from "@/types/user";
import Logo from "./Logo";
import SidebarMenu from "./SidebarMenu";
import SidebarBottom from "./SidebarBottom";

export default function SideBar({ name, email, id }: User) {
    return (
        <div className="hidden lg:flex flex-col gap-4 w-full md:w-full md:max-w-[20%] h-screen bg-white px-4 shadow-lg border-r border-gray-300">
            <div className="flex-1">
                <Logo />
                <SidebarMenu />
            </div>
            <SidebarBottom name={name} email={email} />
        </div>
    );
}
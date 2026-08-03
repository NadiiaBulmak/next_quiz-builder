import Logo from "./Logo";

export default function MobileTopBar() {
    return (
        <div className="flex justify-between lg:hidden px-4 py-8 w-full h-16 bg-white shadow-md border-0.5 border-gray-300">
            
        <Logo />
        some-icon
        </div>
    )
}
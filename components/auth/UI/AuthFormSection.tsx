import { AuthFormSectionProps } from "@/types/auth";
import SectionTopContent from "./SectionTopContent";

export default function AuthFormSection({heading, subheading, children}: AuthFormSectionProps) {
    return (
        <div className="flex w-full rounded-xl flex-col items-center justify-center md:items-start bg-white px-6 py-8 shadow-md border-0.5 border-gray-300">
          <div className="md:max-w-[60%] lg:max-w-md flex flex-1 flex-col justify-center items-start gap-4 md:items-start mx-auto w-full max-w-xl">
            <SectionTopContent heading={heading} subheading={subheading} />
            {children}
          </div>
        </div>
    )
}
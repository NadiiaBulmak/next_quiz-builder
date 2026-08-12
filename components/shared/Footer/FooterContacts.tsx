import { LANDING_NAV_LINKS } from "@/constants/landing_nav_links"
import Link from "next/link"

export const FooterContact = () => {
    return (
        <>
          {LANDING_NAV_LINKS.map((nav_column) => (
            <div className="flex flex-col gap-2 max-w-[20%]" key={nav_column.title}>
              <div className='font-bold text-slate-700'>{nav_column.title}</div>
              {nav_column.links.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm text-gray-500">
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </>
    )
}
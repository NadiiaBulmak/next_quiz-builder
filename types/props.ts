import { LucideIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export type AuthRedirectLinkType = { link: string, text: string, boldText: string };
export type SectionTopContentType = { heading: string, subheading: string };
export type SecondaryButtonType = { href: string, text: string, icon?: string, type: ButtonType };

export enum ButtonType {
    primary = 'primary',
    secondary = 'secondary'
}
export type SidebarMenuType = { opened?: boolean };

export type SidebarLinkType = {
  href: string;
  label: string;
  description: string;
  icon: LucideIcon;
  iconVisible?: boolean;
  labelVisible?: boolean;
} & SidebarMenuType;

export type LogoType = SidebarMenuType & { setOpened?: Dispatch<SetStateAction<boolean>> };

export type SidebarBottomType = { name: string | null; email: string } & SidebarMenuType;
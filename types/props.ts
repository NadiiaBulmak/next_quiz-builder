export type AuthRedirectLinkType = { link: string, text: string, boldText: string };
export type SectionTopContentType = { heading: string, subheading: string };
export type SecondaryButtonType = { href: string, text: string, icon?: string, type: ButtonType };

export enum ButtonType {
    primary = 'primary',
    secondary = 'secondary'
}
export type LoginFormDate = {
    email: string;
    password: string;
};

export type RegisterFormDate = {
    name: string;
    email: string;
    password: string;
};

export type AuthFormSectionProps = {
  heading: string;
  subheading: string;
  children: React.ReactNode;
};

export type AuthRedirectLinkType = {
    link: string;
    text: string;
    boldText: string;
};
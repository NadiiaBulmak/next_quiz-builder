import { CONTENT } from "./content";

export const LANDING_NAV_LINKS = [
  {
    title: 'Product',
    links: [
      {
        name: 'Features',
        href: '/#features',
      },
      {
        name: 'Quiz Examples',
        href: '/#quiz_examples',
      },
    ],
  },
  {
    title: 'Legal',
    links: [
      {
        name: 'Privacy Policy',
        href: '/privacy_policy',
      },
      {
        name: 'Terms of Service',
        href: '/terms_of_service',
      },
    ],
  },
  {
    title: 'Contact Us',
    links: [
      {
        name: CONTENT.footer.email,
        href: CONTENT.footer.mailto,
      },
    ],
  },
];


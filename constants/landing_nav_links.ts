import { CONTENT } from './content';

export const LANDING_NAV_LINKS = [
  {
    title: CONTENT.navigation.landing.product,
    links: [
      {
        name: CONTENT.navigation.landing.features,
        href: '/#features',
      },
      {
        name: CONTENT.navigation.landing.quiz_examples,
        href: '/#quiz_examples',
      },
    ],
  },
  {
    title: CONTENT.navigation.landing.legal,
    links: [
      {
        name: CONTENT.navigation.landing.privacy_policy,
        href: '/privacy_policy',
      },
      {
        name: CONTENT.navigation.landing.terms_of_service,
        href: '/terms_of_service',
      },
    ],
  },
  {
    title: CONTENT.navigation.landing.contact_us,
    links: [
      {
        name: CONTENT.footer.email,
        href: CONTENT.footer.mailto,
      },
    ],
  },
];

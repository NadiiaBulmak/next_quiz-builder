import { TitleContentType } from '@/types/props';

export const TITLE_CONTENT: TitleContentType[] = [
  {
    href: '/quizzes/all',
    label: 'All Quizzes',
    description: 'Explore all available quizzes',
  },
  {
    href: '/quizzes/my',
    label: 'My Quizzes',
    description: "View quizzes you've created",
  },
  {
    href: '/quizzes/create',
    label: 'Create Quiz',
    description: 'Start a new quiz',
  },
  {
    href: '/quizzes/results',
    label: 'Results',
    description: 'View quiz results',
  },
  {
    href: '/edit',
    label: 'Edit Quiz',
    description: 'Edit an existing quiz',
  },
  {
    href: '/settings',
    label: 'Settings',
    description: 'Manage your account settings',
  },
  {
    href: '/preview',
    label: 'Preview',
    description: 'Preview a quiz',
  },
];
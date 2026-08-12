import { ROUTES } from '@/constants/routes';
import { TitleContentType } from '@/types/props';
import { CONTENT } from '@/constants/content';

export const TITLE_CONTENT: TitleContentType[] = [
  {
    href: ROUTES.QUIZZES.ALL,
    label: CONTENT.navigation.sidebar.all_quizzes,
    description: CONTENT.navigation.sidebar.all_quizzes_description,
  },
  {
    href: ROUTES.QUIZZES.MY,
    label: CONTENT.navigation.sidebar.my_quizzes,
    description: CONTENT.navigation.sidebar.my_quizzes_description,
  },
  {
    href: ROUTES.QUIZZES.CREATE,
    label: CONTENT.navigation.sidebar.create_quiz,
    description: CONTENT.navigation.sidebar.create_quiz_description,
  },
  {
    href: ROUTES.QUIZZES.RESULTS,
    label: CONTENT.navigation.sidebar.results,
    description: CONTENT.navigation.sidebar.results_description,
  },
  {
    href: ROUTES.EDIT,
    label: CONTENT.navigation.sidebar.edit_quiz,
    description: CONTENT.navigation.sidebar.edit_quiz_description,
  },
  {
    href: ROUTES.SETTINGS,
    label: CONTENT.navigation.sidebar.settings,
    description: CONTENT.navigation.sidebar.settings_description,
  },
  {
    href: ROUTES.PREVIEW,
    label: CONTENT.navigation.sidebar.preview,
    description: CONTENT.navigation.sidebar.preview_description,
  },
];

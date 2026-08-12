import { List, User, Plus, BarChart3, Settings, ListCheck } from 'lucide-react';
import { SidebarLinkType } from '@/types/props';
import { ROUTES } from '@/constants/routes';
import { CONTENT } from '@/constants/content';

export const SIDEBAR_LINKS: SidebarLinkType[] = [
  {
    href: ROUTES.QUIZZES.ALL,
    label: CONTENT.navigation.sidebar.all_quizzes,
    description: CONTENT.navigation.sidebar.all_quizzes_description,
    icon: List,
    iconVisible: true,
    labelVisible: true,
  },
  {
    href: ROUTES.QUIZZES.MY,
    label: CONTENT.navigation.sidebar.my_quizzes,
    description: CONTENT.navigation.sidebar.my_quizzes_description,
    icon: ListCheck,
    iconVisible: true,
    labelVisible: true,
  },
  {
    href: ROUTES.QUIZZES.CREATE,
    label: CONTENT.navigation.sidebar.create_quiz,
    description: CONTENT.navigation.sidebar.create_quiz_description,
    icon: Plus,
    iconVisible: true,
    labelVisible: false,
  },
  {
    href: ROUTES.QUIZZES.RESULTS,
    label: CONTENT.navigation.sidebar.results,
    description: CONTENT.navigation.sidebar.results_description,
    icon: BarChart3,
    iconVisible: true,
    labelVisible: true,
  },
];

export const BOTTOM_SIDEBAR_LINK: SidebarLinkType = {
  href: ROUTES.SETTINGS,
  label: CONTENT.navigation.sidebar.settings,
  description: CONTENT.navigation.sidebar.settings_description,
  icon: Settings,
  iconVisible: true,
  labelVisible: true,
};

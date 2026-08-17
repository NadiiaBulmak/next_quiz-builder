import {
  BarChart3,
  Edit3,
  GraduationCap,
  Megaphone,
  Share2,
  Sparkles,
  Users,
} from 'lucide-react';
import { CONTENT } from '@/constants/content';

export const LANDING_USE_CASES = [
  {
    title: CONTENT.main.use_cases.items[0].title,
    description: CONTENT.main.use_cases.items[0].description,
    icon: GraduationCap,
  },
  {
    title: CONTENT.main.use_cases.items[1].title,
    description: CONTENT.main.use_cases.items[1].description,
    icon: Sparkles,
  },
  {
    title: CONTENT.main.use_cases.items[2].title,
    description: CONTENT.main.use_cases.items[2].description,
    icon: Megaphone,
  },
  {
    title: CONTENT.main.use_cases.items[3].title,
    description: CONTENT.main.use_cases.items[3].description,
    icon: Users,
  },
];

export const LANDING_VALUES = [
  {
    icon: Edit3,
    title: CONTENT.main.value_proposition.items[0].title,
    description: CONTENT.main.value_proposition.items[0].description,
  },
  {
    icon: Share2,
    title: CONTENT.main.value_proposition.items[1].title,
    description: CONTENT.main.value_proposition.items[1].description,
  },
  {
    icon: BarChart3,
    title: CONTENT.main.value_proposition.items[2].title,
    description: CONTENT.main.value_proposition.items[2].description,
  },
];

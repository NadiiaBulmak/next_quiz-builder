import {
  BarChart3,
  Edit3,
  FilePlus2,
  Link2,
  Share2,
  Users,
} from 'lucide-react';
import { CONTENT } from '@/constants/content';

export const LANDING_STEPS = [
  {
    number: CONTENT.main.how_it_works.landing.steps[0].number,
    icon: Edit3,
    title: CONTENT.main.how_it_works.landing.steps[0].title,
    description: CONTENT.main.how_it_works.landing.steps[0].description,
  },
  {
    number: CONTENT.main.how_it_works.landing.steps[1].number,
    icon: Share2,
    title: CONTENT.main.how_it_works.landing.steps[1].title,
    description: CONTENT.main.how_it_works.landing.steps[1].description,
  },
  {
    number: CONTENT.main.how_it_works.landing.steps[2].number,
    icon: Users,
    title: CONTENT.main.how_it_works.landing.steps[2].title,
    description: CONTENT.main.how_it_works.landing.steps[2].description,
  },
];

export const LANDING_STEP_ICONS = [FilePlus2, Link2, BarChart3];

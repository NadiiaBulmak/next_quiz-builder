import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Edit3,
  Heart,
  Lightbulb,
  Play,
  Plus,
  Share2,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from 'lucide-react';
import { CONTENT } from '@/constants/content';

export const steps = [
  {
    number: CONTENT.main.how_it_works.steps[0].number,
    icon: Edit3,
    title: CONTENT.main.how_it_works.steps[0].title,
    description: CONTENT.main.how_it_works.steps[0].description,
  },
  {
    number: CONTENT.main.how_it_works.steps[1].number,
    icon: Share2,
    title: CONTENT.main.how_it_works.steps[1].title,
    description: CONTENT.main.how_it_works.steps[1].description,
  },
  {
    number: CONTENT.main.how_it_works.steps[2].number,
    icon: Users,
    title: CONTENT.main.how_it_works.steps[2].title,
    description: CONTENT.main.how_it_works.steps[2].description,
  },
];

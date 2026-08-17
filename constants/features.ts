import { BarChart3, Edit3, Lightbulb, Share2 } from 'lucide-react';
import { CONTENT } from '@/constants/content';

export const features = [
  {
    icon: Edit3,
    title: CONTENT.main.features.items[0].title,
    description: CONTENT.main.features.items[0].description,
  },
  {
    icon: Share2,
    title: CONTENT.main.features.items[1].title,
    description: CONTENT.main.features.items[1].description,
  },
  {
    icon: Lightbulb,
    title: CONTENT.main.features.items[2].title,
    description: CONTENT.main.features.items[2].description,
  },
  {
    icon: BarChart3,
    title: CONTENT.main.features.items[3].title,
    description: CONTENT.main.features.items[3].description,
  },
];

import {
  Calendar,
  CheckCircle2,
  Command,
  Mail,
  Percent,
  User,
} from 'lucide-react';
import { CONTENT } from '@/constants/content';

export const RESULT_DETAILS_COLUMNS = [
  { label: CONTENT.results.details.table.name, icon: User },
  { label: CONTENT.results.details.table.email, icon: Mail },
  { label: CONTENT.results.details.table.score, icon: Percent },
  { label: CONTENT.results.details.table.correctAnswers, icon: CheckCircle2 },
  { label: CONTENT.results.details.table.finishedAt, icon: Calendar },
  { label: CONTENT.results.details.table.action, icon: Command },
];

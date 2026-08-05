import { CreateQuizClient } from '@/components/quiz-create/CreateQuizClient';
import { getCathegories } from '@/services/category.service';
import type { Category } from '@/components/quiz-create/CategorySelectClient';

export default async function CreateQuiz() {
  const categories = await getCathegories();

  return <CreateQuizClient categories={categories} />;
}

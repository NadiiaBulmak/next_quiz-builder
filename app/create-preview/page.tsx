import { CreateQuizClient } from '@/components/quiz-create/CreateQuizClient';
import { getCathegories } from '@/services/category.service';

export const dynamic = 'force-dynamic';

export default async function CreateQuizPreview() {
  const categories = await getCathegories();

  return <CreateQuizClient categories={categories} previewMode={true} />;
}

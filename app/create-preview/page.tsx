import { CreateQuizClient } from '@/components/quiz-create/CreateQuizClient';
import { getCathegories } from '@/services/category.service';
import { CONTENT } from '@/constants/content';
import { QuizCreateProvider } from '@/providers/QuizCreateProvider';
import type { Metadata } from 'next';

export const metadata: Metadata = CONTENT.metadata.createPreview;

export const dynamic = 'force-dynamic';

export default async function CreateQuizPreview() {
  const categories = await getCathegories();

  return (
    <QuizCreateProvider>
      <CreateQuizClient categories={categories} previewMode={true} />
    </QuizCreateProvider>
  );
}

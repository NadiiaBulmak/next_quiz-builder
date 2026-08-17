import { CreateQuizClient } from '@/components/quiz-create/CreateQuizClient';
import { getCathegories } from '@/services/category.service';
import { CONTENT } from '@/constants/content';
import type { Metadata } from 'next';

export const metadata: Metadata = CONTENT.metadata.createPreview;

export default async function CreateQuizPreview() {
  const categories = await getCathegories();

  return <CreateQuizClient categories={categories} previewMode={true} />;
}

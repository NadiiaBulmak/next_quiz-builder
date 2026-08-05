import { getCathegories } from '@/services/category.service';
import CategorySelectClient from './CategorySelectClient';

export const CategorySelect = async () => {
  const categories = await getCathegories();
  console.log(categories);

  return <CategorySelectClient categories={categories} />;
};

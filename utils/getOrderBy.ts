import { sortType } from "@/types/props";
import { QuizSort } from "@/types/quiz";

export const getOrderBy = (sort?: sortType): QuizSort => {
  switch (sort) {
    case sortType.dateASC:
      return { updatedAt: 'desc' };
    case sortType.dateDSC:
      return { updatedAt: 'asc' };
    case sortType.alphASC:
      return { title: 'asc' };
    case sortType.alphDSC:
      return { title: 'desc' };
    default:
      return {};
  }
};
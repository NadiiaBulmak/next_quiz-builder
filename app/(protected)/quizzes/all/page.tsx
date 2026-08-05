import FilterZone from "@/components/quiz/FilterZone";
import QuizList from "@/components/quiz/QuizList";
import { getCurrentUser } from "@/services/auth";
import { ListType } from "@/types/props";

export default async function AllQuizzes() {
  const quizzes = await getCurrentUser();
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black  bg-white">
      <FilterZone />
      <QuizList listType={ListType.all}/>
    </div>
  );
}

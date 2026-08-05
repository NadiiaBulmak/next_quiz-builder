import { BadgePropsType } from '@/types/quiz';
import Badge from './Badge';
import { QuizItemMenu } from './QuizItemMenu';
import { ShowAllQuizType } from '@/types/props';

export const QuizListItemTopContent = ({ difficultyName, showAllQuiz }: BadgePropsType & ShowAllQuizType) => {
  return (
    <div className="flex justify-between items-center">
      <Badge difficultyName={difficultyName} />
      {!showAllQuiz && <QuizItemMenu />}
    </div>
  );
};

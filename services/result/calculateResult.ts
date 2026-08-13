import type { UserAnswer } from '@/types/result';
import { getQuizForResult } from '../quizz.service';

export const calculateResult = async (
  quizId: string,
  userAnswers: UserAnswer[],
) => {
  const quiz = await getQuizForResult(quizId);

  if (!quiz) {
    throw new Error('Quiz not found or is not publicly available.');
  }

  if (userAnswers.length !== quiz.questions.length) {
    throw new Error('All quiz questions must be answered.');
  }

  const answersByQuestion = new Map<string, UserAnswer>();

  for (const userAnswer of userAnswers) {
    if (answersByQuestion.has(userAnswer.questionId)) {
      throw new Error('A question cannot have multiple answers.');
    }

    const question = quiz.questions.find(
      (quizQuestion) => quizQuestion.id === userAnswer.questionId,
    );
    const answer = question?.answers.find(
      (quizAnswer) => quizAnswer.id === userAnswer.answerId,
    );

    if (!question || !answer) {
      throw new Error('Invalid quiz answer.');
    }

    answersByQuestion.set(userAnswer.questionId, userAnswer);
  }

  const answerResults = quiz.questions.map((question) => {
    const userAnswer = answersByQuestion.get(question.id);

    const selectedAnswer = question.answers.find(
      (answer) => answer.id === userAnswer?.answerId,
    );

    return {
      questionId: question.id,
      answerId: selectedAnswer?.id ?? null,
      questionText: question.text,
      answerText: selectedAnswer?.text ?? '',
      isCorrect: selectedAnswer?.isCorrect ?? false,
    };
  });

  const correctAnswers = answerResults.filter(
    (answer) => answer.isCorrect,
  ).length;

  const totalQuestions = quiz.questions.length;

  const score =
    totalQuestions > 0
      ? Math.round((correctAnswers / totalQuestions) * 100)
      : 0;

  return {
    score,
    correctAnswers,
    totalQuestions,
    answerResults,
  };
};

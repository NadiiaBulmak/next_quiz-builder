import { CONTENT } from '@/constants/content';
import { createQuiz } from '@/services/quizz.service';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!Array.isArray(body)) {
      return Response.json(
        { error: CONTENT.api.invalid_quiz_payload },
        { status: 400 },
      );
    }

    if (body.length === 0) {
      return Response.json(
        { error: 'Quizzes array cannot be empty' },
        { status: 400 },
      );
    }

    const quizzes = await Promise.all(
      body.map((quiz) => {
        if (
          !quiz ||
          typeof quiz !== 'object' ||
          Array.isArray(quiz)
        ) {
          throw new Error(CONTENT.api.invalid_quiz_payload);
        }

        return createQuiz(quiz);
      }),
    );

    return Response.json(
      {
        success: true,
        count: quizzes.length,
        quizzes,
      },
      { status: 201 },
    );
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : CONTENT.api.unable_create_quiz;

    return Response.json({ error: message }, { status: 400 });
  }
}
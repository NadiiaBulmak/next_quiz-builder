import { createQuiz, getAllQuizzes } from '@/services/quizz.service';
import { CONTENT } from '@/constants/content';

export async function GET() {
  return Response.json(await getAllQuizzes(null, { isPublished: true }));
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return Response.json(
        { error: CONTENT.api.invalid_quiz_payload },
        { status: 400 },
      );
    }

    const quiz = await createQuiz(body);

    return Response.json(quiz, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : CONTENT.api.unable_create_quiz;

    return Response.json({ error: message }, { status: 400 });
  }
}

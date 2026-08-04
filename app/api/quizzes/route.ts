import { createQuiz, getAllQuizzes } from "@/services/quizz.service";

export async function GET() {
  return Response.json(await getAllQuizzes());
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log(body);

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return Response.json({ error: "Invalid quiz payload." }, { status: 400 });
    }

    const quiz = await createQuiz(body);

    return Response.json(quiz, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to create quiz.";

    return Response.json({ error: message }, { status: 400 });
  }
}
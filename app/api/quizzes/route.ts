import { prisma } from "@/lib/prisma";

export async function GET() {
  const quizzes = await prisma.quiz.findMany();
  console.log(quizzes)
  return Response.json(quizzes);
}
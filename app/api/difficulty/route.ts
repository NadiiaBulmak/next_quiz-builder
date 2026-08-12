import {
  createBulk,
  getAllDifficultyLevel,
} from '@/services/difficulty.service';
import { CONTENT } from '@/constants/content';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!Array.isArray(body)) {
      return Response.json(
        { error: CONTENT.api.difficulty_expected_array },
        { status: 400 },
      );
    }

    return Response.json(await createBulk(body), { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : CONTENT.api.unable_seed_difficulties;

    return Response.json({ error: message }, { status: 400 });
  }
}

export async function GET() {
  return Response.json(await getAllDifficultyLevel());
}

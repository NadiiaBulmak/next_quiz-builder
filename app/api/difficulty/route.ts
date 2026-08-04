import { createBulk, getAllDifficultyLevel } from "@/services/difficulty.service";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        if (!Array.isArray(body)) {
            return Response.json({ error: "Expected an array of difficulty values." }, { status: 400 });
        }

        return Response.json(await createBulk(body), { status: 201 });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unable to seed difficulties.";

        return Response.json({ error: message }, { status: 400 });
    }
}

export async function GET() {
    return Response.json(await getAllDifficultyLevel());
}
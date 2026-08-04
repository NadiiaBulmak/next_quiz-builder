import { prisma } from "@/lib/prisma"
import { Difficulty } from "@/types/quiz";

export async function createBulk(difficulties: Difficulty[]) {
    return prisma.difficulty.createMany({
        data: difficulties.map((difficulty) => ({
            name: difficulty,
            slug: difficulty.toLowerCase(),
        })),
        skipDuplicates: true,
    });
}

export async function getAllDifficultyLevel() {
    return await prisma.difficulty.findMany();
}
import { prisma } from "@/lib/prisma";
import {normalizeCategoryName} from '@/utils/normalizeCategoryName'


export async function getCathegories() {
    return await prisma.category.findMany();
}

export async function getCategoryById(id: string) {
    return await prisma.category.findUnique({ where: { id } })
}
export async function getCategoryByName(name: string) {
    return await prisma.category.findUnique({ where: { name } })
}

export async function getOrCreateCategories(names: string[]) {
    const uniqueNames = [...new Set(names.map((name) => name.trim()))];

    const categories = await Promise.all(
        uniqueNames.map(async (name) => {
            const slug = normalizeCategoryName(name);

            return prisma.category.upsert({
                where: {
                    slug,
                },
                update: {},
                create: {
                    name,
                    slug,
                },
            });
        })
    );

    return categories;
}

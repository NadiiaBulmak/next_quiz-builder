'use server';

import { NAV_LINKS } from "@/constants/nav_links";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/sessions";
import { FormState, SignupFormSchema } from "@/schemas/sign-up.schema"
import { hashPassword } from "@/utils/hashPassword.util";
import { redirect } from "next/navigation";

export async function signup(_state: FormState, formData: FormData): Promise<FormState> {
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { name, email, password } = validatedFields.data;
    console.log(name, email, password);

    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        }
    })

    if (existingUser) {
        return {
            message: "User already exists"
        }
    }

    const user = await prisma.user.create({
        data: {
            name,
            email,
            passwordHash: await hashPassword(password),
        },
        select: {
            id: true,
            email: true
        }
    })
    console.log(user);

    await createSession(user.id)
    redirect(NAV_LINKS.quizzes.all);
}
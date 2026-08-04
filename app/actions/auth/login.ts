'use server';

import { NAV_LINKS } from "@/constants/nav_links";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/services/sessions";
import { LoginFormState, LoginFormSchema } from "@/schemas/login.schema";
import { comparePassword } from "@/utils/hashPassword.util";
import { redirect } from "next/navigation";

export async function login(_state: LoginFormState, formData: FormData): Promise<LoginFormState> {
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    });

    
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    
    const { email, password } = validatedFields.data;
    console.log('validated', email, password)

    const user = await prisma.user.findUnique({
        where: {
            email,
        },
        select: {
            id: true,
            email: true,
            passwordHash: true,
        }
    })

    console.log(user)

    if (!user) {
    return {
        errors: {
            email: ["Invalid credentials - email"],
        },
    };
}

const isPasswordValid = await comparePassword(
    password,
    user.passwordHash
);

console.log(isPasswordValid)
    
if (!isPasswordValid) {
    return {
        errors: {
            password: ["Invalid credentials"],
        },
    };
}

    await createSession(user!.id)

    console.log('time to redirect')


    redirect(NAV_LINKS.quizzes.all);
}
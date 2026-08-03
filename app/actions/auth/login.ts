'use server';

import { prisma } from "@/lib/prisma";
import { LoginFormState, LoginFormSchema } from "@/schemas/login.schema";
import { hashPassword } from "@/utils/hashPassword.util";

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

    const user = await prisma.user.findUnique({
        where: {
            email,
            passwordHash: await hashPassword(password),
        },
        select: {
            id: true,
            email: true
        }
    })
    console.log(user);

    return {
        success: true,
        message: "Account created successfully",
        user,
    };

    // redirect("/dashboard");
}
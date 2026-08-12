'use server';

import { prisma } from '@/lib/prisma';
import { createSession } from '@/services/sessions';
import { LoginFormState, LoginFormSchema } from '@/schemas/login.schema';
import { comparePassword } from '@/utils/hashPassword.util';
import { CONTENT } from '@/constants/content';

export async function login(
  _state: LoginFormState,
  formData: FormData,
): Promise<LoginFormState> {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        passwordHash: true,
      },
    });

    if (!user) {
      return {
        errors: {
          email: [CONTENT.auth.messages.invalid_credentials],
        },
      };
    }

    if (!user.passwordHash) {
      return {
        errors: {
          email: [CONTENT.auth.messages.use_google_or_reset_password],
        },
      };
    }

    const isPasswordValid = await comparePassword(password, user.passwordHash);

    if (!isPasswordValid) {
      return {
        errors: {
          password: [CONTENT.auth.messages.invalid_credentials],
        },
      };
    }

    await createSession(user.id);

    return {
      success: true,
      message: CONTENT.auth.messages.signed_in_successfully,
    };
  } catch (error) {
    console.error('Login failed:', error);
    return {
      message: CONTENT.auth.messages.unable_sign_in,
    };
  }
}

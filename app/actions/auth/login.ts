'use server';

import { prisma } from '@/lib/prisma';
import { createSession } from '@/services/sessions';
import { LoginFormState, LoginFormSchema } from '@/schemas/login.schema';
import { comparePassword } from '@/utils/hashPassword.util';

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
          email: ['Invalid credentials'],
        },
      };
    }

    if (!user.passwordHash) {
      return {
        errors: {
          email: ['Use Google sign in for this account or reset your password.'],
        },
      };
    }

    const isPasswordValid = await comparePassword(password, user.passwordHash);

    if (!isPasswordValid) {
      return {
        errors: {
          password: ['Invalid credentials'],
        },
      };
    }

    await createSession(user.id);

    return {
      success: true,
      message: 'Signed in successfully.',
    };
  } catch (error) {
    console.error('Login failed:', error);
    return {
      message: 'Unable to sign in right now. Please try again.',
    };
  }
}

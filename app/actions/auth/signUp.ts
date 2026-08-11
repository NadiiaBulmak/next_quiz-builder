'use server';

import { prisma } from '@/lib/prisma';
import { createSession } from '@/services/sessions';
import { FormState, SignupFormSchema } from '@/schemas/sign-up.schema';
import { hashPassword } from '@/utils/hashPassword.util';

export async function signup(
  _state: FormState,
  formData: FormData,
): Promise<FormState> {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });

    if (existingUser) {
      return {
        message: 'User already exists',
      };
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash: await hashPassword(password),
      },
      select: {
        id: true,
        email: true,
      },
    });
    await createSession(user.id);

    return {
      success: true,
      message: 'Account created successfully.',
    };
  } catch (error) {
    console.error('Signup failed:', error);
    return {
      message: 'Unable to create account right now. Please try again.',
    };
  }
}

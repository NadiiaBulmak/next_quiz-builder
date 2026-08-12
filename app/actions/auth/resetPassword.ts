'use server';

import crypto from 'crypto';
import { prisma } from '@/lib/prisma';
import {
  ResetFormSchema,
  ResetFormState,
} from '@/schemas/reset_password.schema';
import { createSession } from '@/services/sessions';
import { hashPassword } from '@/utils/hashPassword.util';

export async function resetPassword(
  _state: ResetFormState,
  formData: FormData,
): Promise<ResetFormState> {
  const validatedFields = ResetFormSchema.safeParse({
    token: formData.get('token'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { token, password } = validatedFields.data;

  try {
    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');

    const resetToken = await prisma.resetToken.findUnique({
      where: {
        tokenHash,
      },
      select: {
        id: true,
        userId: true,
        expiresAt: true,
        usedAt: true,
      },
    });

    if (!resetToken || resetToken.usedAt || resetToken.expiresAt < new Date()) {
      return {
        errors: {
          token: ['Reset link is invalid or has expired.'],
        },
      };
    }

    const passwordHash = await hashPassword(password);

    await prisma.$transaction([
      prisma.user.update({
        where: {
          id: resetToken.userId,
        },
        data: {
          passwordHash,
        },
      }),
      prisma.resetToken.update({
        where: {
          id: resetToken.id,
        },
        data: {
          usedAt: new Date(),
        },
      }),
    ]);

    await createSession(resetToken.userId);

    return {
      success: true,
      message: 'Password updated successfully.',
    };
  } catch (error) {
    console.error('Password reset failed:', error);
    return {
      message: 'Unable to reset password right now. Please try again.',
    };
  }
}

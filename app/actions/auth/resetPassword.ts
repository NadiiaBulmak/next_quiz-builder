'use server';

import crypto from 'crypto';
import { prisma } from '@/lib/prisma';
import {
  ResetFormSchema,
  ResetFormState,
} from '@/schemas/reset_password.schema';
import { createSession } from '@/services/sessions';
import { hashPassword } from '@/utils/hashPassword.util';
import { CONTENT } from '@/constants/content';
import { AuthFormField, PasswordResetFormField } from '@/constants/formFields';

export async function resetPassword(
  _state: ResetFormState,
  formData: FormData,
): Promise<ResetFormState> {
  const validatedFields = ResetFormSchema.safeParse({
    [PasswordResetFormField.TOKEN]: formData.get(PasswordResetFormField.TOKEN),
    [AuthFormField.PASSWORD]: formData.get(AuthFormField.PASSWORD),
    [PasswordResetFormField.CONFIRM_PASSWORD]: formData.get(
      PasswordResetFormField.CONFIRM_PASSWORD,
    ),
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
          [PasswordResetFormField.TOKEN]: [
            CONTENT.auth.messages.reset_link_invalid_or_expired,
          ],
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
      message: CONTENT.auth.messages.password_updated_successfully,
    };
  } catch (error) {
    console.error('Password reset failed:', error);
    return {
      message: CONTENT.auth.messages.unable_reset_password,
    };
  }
}

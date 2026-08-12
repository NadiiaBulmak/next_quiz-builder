'use server';

import { prisma } from '@/lib/prisma';
import {
  ForgotPasswordFormState,
  ForgotPasswordFormSchema,
} from '@/schemas/forgot_password.schema';
import { createResetToken } from '@/services/forgot_password';
import { buildEmailContent, sendMail } from '@/services/sendEmail';
import { CONTENT } from '@/constants/content';

export async function forgotPassword(
  _state: ForgotPasswordFormState,
  formData: FormData,
): Promise<ForgotPasswordFormState> {
  const validatedFields = ForgotPasswordFormSchema.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email } = validatedFields.data;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });

    if (!user) {
      return {
        errors: {
          email: [CONTENT.auth.messages.no_account_for_email],
        },
      };
    }

    const resetToken = await createResetToken(user.id);
    const buildResetLink = buildEmailContent(resetToken);
    await sendMail({
      to: email,
      content: buildResetLink,
    });

    return {
      success: true,
      message: CONTENT.auth.messages.password_reset_instructions_sent,
    };
  } catch (error) {
    console.error('Forgot password failed:', error);
    return {
      message: CONTENT.auth.messages.unable_process_request,
    };
  }
}

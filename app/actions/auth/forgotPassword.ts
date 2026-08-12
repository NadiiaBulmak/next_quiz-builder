'use server';

import { prisma } from '@/lib/prisma';
import { ForgotPasswordFormState, ForgotPasswordFormSchema } from '@/schemas/forgot_password.schema';
import { createResetToken } from '@/services/forgot_password';
import { buildEmailContent, sendMail } from '@/services/sendEmail';

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
          email: ['It seems like there is no account associated with this email address.'],
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
      message: 'Password reset instructions sent successfully.',
    };
  } catch (error) {
    console.error('Forgot password failed:', error);
    return {
      message: 'Unable to process your request right now. Please try again.',
    };
  }
}

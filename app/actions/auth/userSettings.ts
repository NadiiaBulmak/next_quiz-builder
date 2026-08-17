'use server';

import { revalidatePath } from 'next/cache';
import { forgotPassword } from '@/app/actions/auth/forgotPassword';
import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/services/auth';
import { NAV_LINKS } from '@/constants/nav_links';
import {
  RequestPasswordResetState,
  UpdateUserNameSchema,
  UpdateUserNameState,
} from '@/schemas/user-settings.schema';

export async function updateUserName(
  _state: UpdateUserNameState,
  formData: FormData,
): Promise<UpdateUserNameState> {
  const validatedFields = UpdateUserNameSchema.safeParse({
    name: formData.get('name'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const user = await getCurrentUser();

  try {
    await prisma.user.update({
      where: { id: user.id },
      data: { name: validatedFields.data.name },
    });

    revalidatePath(NAV_LINKS.settings);
    revalidatePath(NAV_LINKS.quizzes.my);
    revalidatePath(NAV_LINKS.quizzes.all);

    return {
      success: true,
      message: 'Name updated successfully.',
    };
  } catch (error) {
    console.error('Update user name failed:', error);
    return {
      message: 'Unable to update your name right now. Please try again.',
    };
  }
}

export async function requestPasswordReset(
  state: RequestPasswordResetState,
  _formData: FormData,
): Promise<RequestPasswordResetState> {
  const user = await getCurrentUser();
  const formData = new FormData();
  formData.set('email', user.email);

  return forgotPassword(state, formData);
}

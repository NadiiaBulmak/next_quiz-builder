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
import { CONTENT } from '@/constants/content';
import { AuthFormField } from '@/constants/formFields';

export async function updateUserName(
  _state: UpdateUserNameState,
  formData: FormData,
): Promise<UpdateUserNameState> {
  const validatedFields = UpdateUserNameSchema.safeParse({
    [AuthFormField.NAME]: formData.get(AuthFormField.NAME),
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
      message: CONTENT.settings.messages.name_updated,
    };
  } catch (error) {
    console.error('Update user name failed:', error);
    return {
      message: CONTENT.settings.messages.unable_update_name,
    };
  }
}

export async function requestPasswordReset(
  state: RequestPasswordResetState,
  _formData: FormData,
): Promise<RequestPasswordResetState> {
  const user = await getCurrentUser();
  const formData = new FormData();
  formData.set(AuthFormField.EMAIL, user.email);

  return forgotPassword(state, formData);
}

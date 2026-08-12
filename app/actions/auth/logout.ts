'use server';

import { deleteSession } from '@/services/sessions';
import { CONTENT } from '@/constants/content';

export async function logout(_state: unknown, _formData: FormData) {
  await deleteSession();

  return {
    success: true,
    message: CONTENT.auth.messages.logged_out_successfully,
  };
}

'use server';

import { deleteSession } from '@/services/sessions';

export async function logout(_state: unknown, _formData: FormData) {
  await deleteSession();

  return {
    success: true,
    message: 'Logged out successfully.',
  };
}

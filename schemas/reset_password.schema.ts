import * as z from 'zod';
import { CONTENT } from '@/constants/content';

export const ResetFormSchema = z
  .object({
    token: z
      .string()
      .min(1, { error: CONTENT.auth.validation.reset_token_required })
      .trim(),
    password: z
      .string()
      .min(8, { error: CONTENT.auth.validation.password_min })
      .regex(/[a-zA-Z]/, { error: CONTENT.auth.validation.password_letter })
      .regex(/[0-9]/, { error: CONTENT.auth.validation.password_number })
      .regex(/[^a-zA-Z0-9]/, {
        error: CONTENT.auth.validation.password_special,
      })
      .trim(),
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: CONTENT.auth.validation.passwords_do_not_match,
    path: ['confirmPassword'],
  });

export type ResetFormState = {
  success?: boolean;
  errors?: {
    token?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string;
  user?: {
    id: string;
    // email: string;
  };
};

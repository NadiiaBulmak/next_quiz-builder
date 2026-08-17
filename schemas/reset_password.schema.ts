import * as z from 'zod';
import { CONTENT } from '@/constants/content';
import { AuthFormField, PasswordResetFormField } from '@/constants/formFields';

export const ResetFormSchema = z
  .object({
    [PasswordResetFormField.TOKEN]: z
      .string()
      .trim()
      .min(1, { error: CONTENT.auth.validation.reset_token_required }),
    [AuthFormField.PASSWORD]: z
      .string()
      .trim()
      .min(8, { error: CONTENT.auth.validation.password_min })
      .regex(/[a-zA-Z]/, { error: CONTENT.auth.validation.password_letter })
      .regex(/[0-9]/, { error: CONTENT.auth.validation.password_number })
      .regex(/[^a-zA-Z0-9]/, {
        error: CONTENT.auth.validation.password_special,
      }),
    [PasswordResetFormField.CONFIRM_PASSWORD]: z.string().trim(),
  })
  .refine(
    (data) =>
      data[PasswordResetFormField.CONFIRM_PASSWORD] ===
      data[AuthFormField.PASSWORD],
    {
      message: CONTENT.auth.validation.passwords_do_not_match,
      path: [PasswordResetFormField.CONFIRM_PASSWORD],
    },
  );

export type ResetFormState = {
  success?: boolean;
  errors?: {
    [PasswordResetFormField.TOKEN]?: string[];
    [AuthFormField.PASSWORD]?: string[];
    [PasswordResetFormField.CONFIRM_PASSWORD]?: string[];
  };
  message?: string;
  user?: {
    id: string;
    // email: string;
  };
};

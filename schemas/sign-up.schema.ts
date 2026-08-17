import * as z from 'zod';
import { CONTENT } from '@/constants/content';
import { AuthFormField } from '@/constants/formFields';

export const SignupFormSchema = z.object({
  [AuthFormField.NAME]: z
    .string()
    .trim()
    .min(2, { error: CONTENT.auth.validation.name_min }),
  [AuthFormField.EMAIL]: z
    .string()
    .trim()
    .email({ error: CONTENT.auth.validation.email_invalid }),
  [AuthFormField.PASSWORD]: z
    .string()
    .trim()
    .min(8, { error: CONTENT.auth.validation.password_min })
    .regex(/[a-zA-Z]/, { error: CONTENT.auth.validation.password_letter })
    .regex(/[0-9]/, { error: CONTENT.auth.validation.password_number })
    .regex(/[^a-zA-Z0-9]/, {
      error: CONTENT.auth.validation.password_special,
    }),
});

export type FormState = {
  success?: boolean;
  errors?: {
    [AuthFormField.NAME]?: string[];
    [AuthFormField.EMAIL]?: string[];
    [AuthFormField.PASSWORD]?: string[];
  };
  message?: string;
  user?: {
    id: string;
    email: string;
  };
};

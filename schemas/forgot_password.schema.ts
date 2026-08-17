import * as z from 'zod';
import { CONTENT } from '@/constants/content';
import { AuthFormField } from '@/constants/formFields';

export const ForgotPasswordFormSchema = z.object({
  [AuthFormField.EMAIL]: z
    .string()
    .trim()
    .email({ error: CONTENT.auth.validation.email_invalid }),
});

export type ForgotPasswordFormState = {
  success?: boolean;
  errors?: {
    [AuthFormField.EMAIL]?: string[];
    // password?: string[];
  };
  message?: string;
  user?: {
    id: string;
    email: string;
  };
};

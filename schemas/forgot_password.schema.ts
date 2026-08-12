import * as z from 'zod';
import { CONTENT } from '@/constants/content';

export const ForgotPasswordFormSchema = z.object({
  email: z
    .string()
    .email({ error: CONTENT.auth.validation.email_invalid })
    .trim(),
});

export type ForgotPasswordFormState = {
  success?: boolean;
  errors?: {
    email?: string[];
    // password?: string[];
  };
  message?: string;
  user?: {
    id: string;
    email: string;
  };
};

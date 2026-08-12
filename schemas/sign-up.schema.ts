import * as z from 'zod';
import { CONTENT } from '@/constants/content';

export const SignupFormSchema = z.object({
  name: z.string().min(2, { error: CONTENT.auth.validation.name_min }).trim(),
  email: z.email({ error: CONTENT.auth.validation.email_invalid }).trim(),
  password: z
    .string()
    .min(8, { error: CONTENT.auth.validation.password_min })
    .regex(/[a-zA-Z]/, { error: CONTENT.auth.validation.password_letter })
    .regex(/[0-9]/, { error: CONTENT.auth.validation.password_number })
    .regex(/[^a-zA-Z0-9]/, {
      error: CONTENT.auth.validation.password_special,
    })
    .trim(),
});

export type FormState = {
  success?: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string;
  user?: {
    id: string;
    email: string;
  };
};

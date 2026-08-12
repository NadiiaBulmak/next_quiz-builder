import * as z from 'zod';

export const ResetFormSchema = z
  .object({
    token: z.string().min(1, { error: 'Reset token is required.' }).trim(),
    password: z
      .string()
      .min(8, { error: 'Be at least 8 characters long' })
      .regex(/[a-zA-Z]/, { error: 'Contain at least one letter.' })
      .regex(/[0-9]/, { error: 'Contain at least one number.' })
      .regex(/[^a-zA-Z0-9]/, {
        error: 'Contain at least one special character.',
      })
      .trim(),
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: 'Passwords do not match',
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

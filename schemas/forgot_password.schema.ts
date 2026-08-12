import * as z from 'zod'

export const ForgotPasswordFormSchema = z.object({
  email: z.string().email({ error: 'Please enter a valid email.' }).trim(),
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
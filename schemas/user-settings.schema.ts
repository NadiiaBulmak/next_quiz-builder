import * as z from 'zod';

export const UpdateUserNameSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .max(60, { message: 'Name must be less than 60 characters.' }),
});

export type UpdateUserNameState = {
  success?: boolean;
  errors?: {
    name?: string[];
  };
  message?: string;
};

export type RequestPasswordResetState = {
  success?: boolean;
  errors?: {
    email?: string[];
  };
  message?: string;
};

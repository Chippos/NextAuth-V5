'use server';

import { signupSchema } from '@/schemas';
import { z } from 'zod';

export const signup = async (values: z.infer<typeof signupSchema>) => {
  const validatedFields = signupSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid Credentials' };
  }

  return { success: 'Account Created Successfully' };
};

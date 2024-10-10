import { z } from 'zod';

export const FormSchema = z.object({
  name: z.string().min(1, 'Please enter name.'),
  phone: z.string().min(1, 'Please enter phone.'),
  message: z.string().optional(),
  email: z
    .string()
    .optional()
    .refine((value) => !value || z.string().email().safeParse(value).success, {
      message: 'Please enter a valid email address.',
    }),
  accept: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions.',
  }),
});

export type FormValues = z.infer<typeof FormSchema>;

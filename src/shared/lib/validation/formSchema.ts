import { z } from 'zod';
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
export const FormSchema = z.object({
  name: z.string().min(2, 'Please enter name.'),
  phone: z.string().min(9, 'Please enter phone.').regex(phoneRegex, 'Invalid Number!'),
  message: z.string().optional(),
  email: z
    .string()
    .optional()
    .refine((value) => value && z.string().email().safeParse(value).success, {
      message: 'Please enter a valid email address.',
    }),
  accept: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions.',
  }),
});

export type FormValues = z.infer<typeof FormSchema>;

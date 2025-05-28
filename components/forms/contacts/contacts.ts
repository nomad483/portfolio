import { zodResolver } from '@hookform/resolvers/zod'
import { z as zod } from 'zod'

export const FormSchema = zod.object({
  name: zod.string().min(1, { message: 'Name is required' }),
  subject: zod.string(),
  email: zod
    .string()
    .email({ message: 'Invalid email address' })
    .min(1, { message: 'Email is required' }),
  message: zod.string().min(1, { message: 'Message is required' }),
  turnstileToken: zod
    .string()
    .min(1, { message: 'Please complete the CAPTCHA.' }),
})

export type ContactsFormSchema = zod.infer<typeof FormSchema>

export const FormSchemaResolver = zodResolver(FormSchema)

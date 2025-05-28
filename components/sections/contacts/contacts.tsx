'use client'

import { useForm } from 'react-hook-form'
import { SiGithub, SiInstagram } from '@icons-pack/react-simple-icons'
import { Turnstile } from '@marsidev/react-turnstile'
import { ArrowRight, ExternalLink, Mail, Send } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

import {
  ContactsFormSchema,
  FormSchemaResolver,
} from '@/components/forms/contacts/contacts'
import {
  Button,
  Card,
  Container,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  SectionTitle,
  Separator,
  Textarea,
} from '@/components/ui'

export const Contacts = () => {
  const form = useForm<ContactsFormSchema>({
    resolver: FormSchemaResolver,
    defaultValues: {
      name: '',
      subject: '',
      email: '',
      message: '',
      turnstileToken: '',
    },
  })

  const onSubmit = async ({
    name,
    message,
    email,
    subject,
    turnstileToken,
  }: ContactsFormSchema) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        message,
        email,
        subject,
        turnstileToken,
      }),
    })

    if (!res.ok) {
      const error = await res.json()
      console.error('Error sending email:', error)

      toast.error('Failed to send message. Please try again later.', {
        description: 'An unexpected error occurred.',
      })
      return
    }

    form.reset()
    toast.success('Message sent successfully!', {
      description: 'Thank you for reaching out. I will get back to you soon.',
    })
  }

  const inputNames = ['name', 'subject', 'email'] as const
  const inputPlaceholders = ['John Doe', 'Job Offer', 'john@doe.com'] as const
  const inputLabels = ['Name', 'Subject', 'Email'] as const
  const inputRequired = [true, false, true] as const

  const inputTypes = ['text', 'text', 'email'] as const

  const inputFields = inputNames.map((name, index) => ({
    name,
    placeholder: inputPlaceholders[index],
    label: inputLabels[index],
    type: inputTypes[index],
    required: inputRequired[index],
  }))

  return (
    <Card id="contacts">
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link href="mailto:mykolazakliuka.work@gmail.com">
                <Mail />
                Email
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild>
              <Link target="_blank" href="https://github.com/nomad483">
                <SiGithub />
                GitHub
                <ExternalLink />
              </Link>
            </Button>
            <Button asChild>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/mykola-zakliuka-053534192/"
              >
                in LinkedIn
                <ExternalLink />
              </Link>
            </Button>
            <Button asChild>
              <Link
                target="_blank"
                href="https://www.instagram.com/developer_notes/"
              >
                <SiInstagram />
                Instagram
                <ExternalLink />
              </Link>
            </Button>
          </div>
          <Separator>or</Separator>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {inputFields.map(
                ({ name, placeholder, label, type, required }) => (
                  <FormField
                    key={name}
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel aria-required={true}>
                          {label}
                          {required && (
                            <span className="text-lg text-red-500">*</span>
                          )}
                        </FormLabel>
                        <FormControl>
                          <Input
                            type={type}
                            placeholder={placeholder}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                )
              )}

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel aria-required={true}>
                      Message
                      <span className="text-lg text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Hello there, I would like to ask you about..."
                        maxLength={500}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="turnstileToken"
                render={({ field }) => (
                  <FormItem>
                    <Turnstile
                      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                      onSuccess={(token) => {
                        form.setValue('turnstileToken', token, {
                          shouldValidate: true,
                        })
                        field.onChange(token)
                      }}
                      onError={() => {
                        form.setValue('turnstileToken', '', {
                          shouldValidate: true,
                        })
                        field.onChange('')
                      }}
                      onExpire={() => {
                        form.setValue('turnstileToken', '', {
                          shouldValidate: true,
                        })
                        field.onChange('')
                      }}
                    />
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                <Send />
                Send
              </Button>
            </form>
          </Form>
        </div>
      </Container>
    </Card>
  )
}

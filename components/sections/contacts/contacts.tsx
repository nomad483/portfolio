'use client'

import { useForm } from 'react-hook-form'
import {
  SiGithub,
  SiInstagram,
  SiTelegram,
} from '@icons-pack/react-simple-icons'
import { ArrowRight, ExternalLink, Mail, Send } from 'lucide-react'
import Link from 'next/link'

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
    },
  })

  const onSubmit = ({ name, message, email, subject }: ContactsFormSchema) => {
    console.log(name, message, email, subject)
  }
  const inputNames = ['name', 'subject', 'email'] as const
  const inputPlaceholders = ['John Doe', 'Job Offer', 'john@doe.com'] as const
  const inputLabels = ['Name', 'Subject', 'Email'] as const

  const inputTypes = ['text', 'text', 'email'] as const

  const inputFields = inputNames.map((name, index) => ({
    name,
    placeholder: inputPlaceholders[index],
    label: inputLabels[index],
    type: inputTypes[index],
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
              <Link href="https://github.com/nomad483">
                <SiGithub />
                GitHub
                <ExternalLink />
              </Link>
            </Button>
            <Button asChild>
              <Link href="https://www.linkedin.com/in/mykola-zakliuka-053534192/">
                in LinkedIn
                <ExternalLink />
              </Link>
            </Button>
            <Button asChild>
              <Link href="https://www.instagram.com/developer_notes/">
                <SiInstagram />
                Instagram
                <ExternalLink />
              </Link>
            </Button>
            {/*<Button asChild>*/}
            {/*  <Link href="">*/}
            {/*    <SiTelegram />*/}
            {/*    Telegram*/}
            {/*    <ExternalLink />*/}
            {/*  </Link>*/}
            {/*</Button>*/}
          </div>
          <Separator>or</Separator>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {inputFields.map(({ name, placeholder, label, type }) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel aria-required={true}>
                        {label}
                        <span className="text-lg text-red-500">*</span>
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
              ))}

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

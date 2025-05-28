import { NextResponse } from 'next/server'
import { Resend } from 'resend'

import { FormSchema } from '@/components/forms/contacts/contacts'
import { Email } from '@/components/templates'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  const parsed = FormSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }

  const { name, subject, email, message, turnstileToken } = parsed.data
  const emailSubject = subject || `New message from ${name}`

  const secret = process.env.TURNSTILE_SECRET_KEY
  const ip = req.headers.get('CF-Connecting-IP')
  const idempotencyKey = crypto.randomUUID()
  const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

  const verifyRes = await fetch(url, {
    body: JSON.stringify({
      secret,
      response: turnstileToken,
      remoteip: ip,
      idempotency_key: idempotencyKey,
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const verifyData = await verifyRes.json()

  if (!verifyData.success) {
    return NextResponse.json(
      { success: false, message: 'Invalid captcha' },
      { status: 403 }
    )
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Mykola Zakliuka <onboarding@resend.dev>',
      to: ['mykolazakliuka.work@gmail.com'],
      subject: `Portfolio Contact: ${emailSubject}`,
      react: Email({ name, email, message }),
    })

    if (error) {
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
}

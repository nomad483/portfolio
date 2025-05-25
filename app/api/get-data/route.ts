import { type NextRequest, NextResponse } from 'next/server'

import { DOBA } from '../../../lib/constants'

type RevalidatingFetch = RequestInit & {
  next?: {
    revalidate?: number
  }
}

const FILES: Record<string, string> = {
  timeline: process.env.GOOGLE_DRIVE_TIMELINE_FILE_ID!,
  projects: process.env.GOOGLE_DRIVE_PROJECTS_FILE_ID!,
  skills: process.env.GOOGLE_DRIVE_SKILLS_FILE_ID!,
}

export async function GET(request: NextRequest) {
  const key = request.nextUrl.searchParams.get('file')

  if (!key || !FILES[key]) {
    return NextResponse.json(
      { error: 'Invalid or missing file key' },
      { status: 400 }
    )
  }

  const fileId = FILES[key]
  const url = `https://drive.google.com/uc?export=download&id=${fileId}`

  try {
    const res = await fetch(url, {
      next: { revalidate: DOBA },
    } as RevalidatingFetch)

    if (!res.ok) {
      throw new Error(`Failed to fetch file: ${res.statusText}`)
    }
    console.log(res)
    const json = await res.json()
    return NextResponse.json(json)
  } catch (error: any) {
    console.error(error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

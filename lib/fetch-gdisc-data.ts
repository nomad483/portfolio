import { DOBA } from '@/lib/constants'

const FILES: Record<string, string> = {
  timeline: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_TIMELINE_FILE_ID!,
  projects: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_PROJECTS_FILE_ID!,
  skills: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_SKILLS_FILE_ID!,
}

type FileKey = keyof typeof FILES

export const fetchGdiscData = async <T>(file: FileKey): Promise<T> => {
  const fileId = FILES[file]
  if (!fileId) {
    throw Error('Invalid or missing file key')
  }

  const url = `https://drive.google.com/uc?export=download&id=${fileId}`

  try {
    const res = await fetch(url, {
      next: { revalidate: DOBA },
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch file: ${res.statusText}`)
    }

    return await res.json()
  } catch (e: any) {
    console.error(e.message)
    throw new Error(`Failed to fetch file: ${e.message}`)
  }
}

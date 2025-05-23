import { DOBA } from '@/lib/constants'

export const getJsonFromApi = async <T>(
  file: 'timeline' | 'projects' | 'skills'
): Promise<T> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/get-data?file=${file}`,
    {
      next: { revalidate: DOBA },
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch JSON from API')
  }

  return await res.json()
}

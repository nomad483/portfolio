import { DOBA } from '@/lib/constants'

export const getJsonFromApi = async <T>(
  file: 'timeline' | 'projects' | 'skills'
): Promise<T> => {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
    'http://localhost:3000'
  console.log(process.env.VERCEL_URL, 'vu')
  console.log(baseUrl, 'bu')
  console.log(process.env.NEXT_PUBLIC_VERCEL_URL, 'npvu')
  const res = await fetch(`${baseUrl}/api/get-data?file=${file}`, {
    next: { revalidate: DOBA },
  })
  console.log(res, 'res')
  if (!res.ok) {
    throw new Error('Failed to fetch JSON from API')
  }

  return await res.json()
}

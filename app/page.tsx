import {
  Contacts,
  Hero,
  Projects,
  Skills,
  Timeline,
} from '@/components/sections'
import { PageContainer } from '@/components/ui'

export const revalidate = 10 // 86400 - 24 hours in seconds

export default function Home() {
  return (
    <PageContainer>
      <Hero />
      <Skills />
      <Timeline />
      <Projects />
      <Contacts />
    </PageContainer>
  )
}

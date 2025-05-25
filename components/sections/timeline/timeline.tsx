import {
  EducationList,
  ExperienceList,
} from '@/components/sections/timeline/atoms'
import { Card, Container, SectionTitle } from '@/components/ui'
import { fetchGdiscData } from '@/lib/fetch-gdisc-data'
import type { Timeline as TimelineType } from '@/types/timeline'

export const Timeline = async () => {
  const timeline = await fetchGdiscData<TimelineType>('timeline')

  return (
    <Card id="timeline">
      <Container>
        <SectionTitle>Experience</SectionTitle>
        <ExperienceList experience={timeline.experience} />
        <SectionTitle>Education</SectionTitle>
        <EducationList education={timeline.education} />
      </Container>
    </Card>
  )
}

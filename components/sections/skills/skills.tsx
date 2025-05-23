import { SkillList } from '@/components/sections/skills/atoms'
import { Card, Container, SectionTitle } from '@/components/ui'
import { getJsonFromApi } from '@/lib/getJsonFromApi'
import type { Skills as SkillsType } from '@/types/skills'

export const Skills = async () => {
  const skills = await getJsonFromApi<SkillsType[]>('skills')

  return (
    <Card id="skills">
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <SkillList skills={skills} />
      </Container>
    </Card>
  )
}

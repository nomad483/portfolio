import { SkillListItem } from '@/components/sections/skills/atoms'
import { techResolver } from '@/lib/tech-resolver'
import type { Skills } from '@/types/skills'

type Props = {
  skills: Skills[]
}

export const SkillList = ({ skills }: Props) => {
  return (
    <ul className="flex w-full list-none flex-row flex-wrap justify-center gap-2 pl-5">
      {skills.map((skill, index) => (
        <SkillListItem
          key={`${skill.key}_${skill.id}_${index}`}
          skill={techResolver(skill.key)}
          level={skill.level}
          href={skill.href}
        />
      ))}
    </ul>
  )
}

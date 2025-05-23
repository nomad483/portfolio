import { ExperienceListItem } from '@/components/sections/timeline/atoms'
import type { Experience } from '@/types/timeline'

type Props = {
  experience: Experience[]
}
export const ExperienceList = ({ experience }: Props) => {
  return (
    <ul className="after:bg-foreground/30 relative flex w-full list-none flex-col flex-wrap justify-center gap-3 pl-5 after:absolute after:top-0 after:left-0 after:h-full after:w-[2px] after:-translate-x-1/2 after:content-['']">
      {experience.map((job, index) => (
        <ExperienceListItem
          key={`${job.company}_${job.id}_${index}`}
          company={job.company}
          startDate={job.startDate}
          endDate={job.endDate}
          positions={job.positions}
        />
      ))}
    </ul>
  )
}

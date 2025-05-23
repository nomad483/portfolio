import { PositionList } from '@/components/sections/timeline/atoms'
import type { Position } from '@/types/timeline'

type Props = {
  company: string
  startDate: string
  endDate: string
  positions: Position[]
}

export const ExperienceListItem = ({
  company,
  endDate,
  startDate,
  positions,
}: Props) => {
  return (
    <li className="bg-background/20 border-foreground/10 box-border flex w-full flex-col justify-center rounded-2xl border p-3 text-lg transition-all ease-in-out">
      <div>
        <h3 className="after:bg-foreground/70 text-lg font-bold after:absolute after:left-0 after:h-3 after:w-3 after:-translate-x-1/2 after:translate-y-1/2 after:rounded-full after:content-['']">
          {company}
        </h3>
        <span className="text-foreground/60 text-sm">
          {startDate} - {endDate}
        </span>
        <PositionList positions={positions} company={company} />
      </div>
    </li>
  )
}

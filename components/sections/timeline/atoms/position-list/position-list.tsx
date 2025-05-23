import { Fragment } from 'react'

import { PositionListItem } from '@/components/sections/timeline/atoms'
import { Separator } from '@/components/ui'
import type { Position } from '@/types/timeline'

type Props = {
  positions: Position[]
  company: string
}

export const PositionList = ({ positions, company }: Props) => {
  return (
    <ul>
      {positions.map((position, index) => (
        <Fragment key={`${company}_${position.title}_${index}`}>
          <PositionListItem
            title={position.title}
            endDate={position.endDate}
            startDate={position.startDate}
            description={position.description}
            location={position.location}
          />
          <Separator className="mt-2 last:hidden" />
        </Fragment>
      ))}
    </ul>
  )
}

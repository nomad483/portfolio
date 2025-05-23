import { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

type Props = PropsWithChildren & {
  className?: string
}

export const SectionTitle = ({ className, children }: Props) => {
  return (
    <h2
      className={cn(
        '4xl:text-3xl text-center text-xl font-bold md:text-start md:text-2xl',
        className
      )}
    >
      {children}
    </h2>
  )
}

SectionTitle.displayName = 'SectionTitle'

import { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

type Props = PropsWithChildren & {
  className?: string
}

export const PageContainer = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        'flex min-h-dvh w-xs min-w-xs flex-col items-center gap-3 py-2 sm:py-3 md:w-2xl md:py-10 lg:w-5xl',
        className
      )}
    >
      {children}
    </div>
  )
}

PageContainer.displayName = 'PageContainer'

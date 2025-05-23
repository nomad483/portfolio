import { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

type Props = PropsWithChildren & {
  className?: string
}

export const Container = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        'box-border flex h-full w-full max-w-screen flex-col gap-4',
        className
      )}
    >
      {children}
    </div>
  )
}

Container.displayName = 'Container'

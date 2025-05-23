import { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

type Props = PropsWithChildren & {
  className?: string
  internalClassName?: string
  id?: string
}

export const Card = ({ children, className, internalClassName, id }: Props) => {
  return (
    <div
      className={cn(
        'bg-card-gradient border-foreground/10 m-5 box-border w-full rounded-2xl border p-7 backdrop-blur-lg transition-all ease-in-out hover:scale-105',
        className
      )}
      id={id}
    >
      <article className={cn('flex h-full w-full', internalClassName)}>
        {children}
      </article>
    </div>
  )
}

Card.displayName = 'Card'

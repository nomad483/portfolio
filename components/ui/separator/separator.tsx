'use client'

import type { ComponentPropsWithoutRef, ComponentRef, ReactNode } from 'react'
import { forwardRef } from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cn } from '@/lib/utils'

type Props = {
  className?: string
  orientation?: 'horizontal' | 'vertical'
  decorative?: boolean
  children?: ReactNode
}

export const Separator = forwardRef<
  ComponentRef<typeof SeparatorPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    {
      className,
      orientation = 'horizontal',
      decorative = true,
      children,
      ...props
    }: Props,
    ref
  ) => {
    const styles = cn(
      'bg-foreground/20',
      !children && 'shrink-0 ',
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]'
    )

    if (children) {
      return (
        <div
          role="separator"
          aria-orientation={orientation}
          className={cn(
            'text flex items-center text-sm',
            orientation === 'horizontal' ? 'flex-row' : 'flex-col'
          )}
        >
          <span className={cn(styles)} />
          <span className={cn('mx-4 whitespace-nowrap')}>{children}</span>
          <span className={cn(styles)} />
        </div>
      )
    }

    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(styles, className)}
        {...props}
      />
    )
  }
)

Separator.displayName = 'Separator'

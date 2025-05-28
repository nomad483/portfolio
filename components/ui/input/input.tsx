import { ComponentProps, forwardRef } from 'react'

import { cn } from '@/lib/utils'

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'border-foreground-20 file:text-foreground placeholder:text-foreground-50 hover:ring-foreground-40 focus-visible:ring-foreground-40 flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-all duration-200 ease-in-out file:border-0 file:bg-transparent file:text-sm file:font-medium autofill:bg-transparent hover:ring-1 focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export { Input }

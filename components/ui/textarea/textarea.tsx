import { ComponentProps, forwardRef } from 'react'

import { cn } from '@/lib/utils'

const Textarea = forwardRef<HTMLTextAreaElement, ComponentProps<'textarea'>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'border-foreground-20 placeholder:text-foreground-50 focus-visible:ring-foreground-40 hover:ring-foreground-40 flex min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-sm transition-all duration-200 ease-in-out hover:ring-1 focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }

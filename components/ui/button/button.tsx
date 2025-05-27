import { ComponentProps } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-foreground-10 hover:bg-foreground-20',
        ghost: 'hover:bg-foreground-20 border-foreground-20 border-1',
      },
      size: {
        default: 'h-10 px-4 rounded-xl',
        sm: 'h-8 px-3 rounded-lg',
        lg: 'h-12 px-6 rounded-2xl',
        icon: 'size-9 rounded-full',
      },
      rounded: {
        default: 'rounded-xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
    },
  }
)

type Props = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }

function Button({
  className,
  variant,
  size,
  rounded,
  asChild = false,
  ...props
}: Props) {
  const Component = asChild ? Slot : 'button'

  return (
    <Component
      data-slot="button"
      className={cn(buttonVariants({ variant, size, rounded, className }))}
      {...props}
    />
  )
}

Button.displayName = 'Button'

export { Button, buttonVariants }

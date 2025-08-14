import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-pill text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-soft hover:shadow-lg',
  {
    variants: {
      variant: {
        default: 'bg-accent1 text-neutral-900',
        secondary: 'bg-accent2 text-neutral-900',
        ghost: 'bg-transparent text-neutral-900 hover:bg-neutral-100',
      },
      size: {
        default: 'h-11 px-6 py-3',
        lg: 'h-12 px-8 py-4 text-base',
        sm: 'h-9 px-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button ref={ref} className={`${buttonVariants({ variant, size })} ${className ?? ''}`.trim()} {...props} />
    )
  }
)
Button.displayName = 'Button'



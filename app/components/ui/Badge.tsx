import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'gold' | 'gray' | 'purple' | 'teal' | 'navy'
  className?: string
}

export default function Badge({ children, variant = 'gray', className = '' }: BadgeProps) {
  const variants = {
    gold: 'bg-amber-100 text-amber-800',
    gray: 'bg-gray-100 text-gray-800',
    purple: 'bg-purple-100 text-purple-800',
    teal: 'bg-teal-100 text-teal-800',
    navy: 'bg-navy-100 text-navy-800',
  }

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}

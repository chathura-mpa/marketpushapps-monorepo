import React from 'react'

export interface CardProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  className?: string
  headerActions?: React.ReactNode
  footer?: React.ReactNode
  padding?: 'none' | 'sm' | 'md' | 'lg'
  shadow?: 'none' | 'sm' | 'md' | 'lg'
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  className = '',
  headerActions,
  footer,
  padding = 'md',
  shadow = 'md',
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  }

  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
  }

  const classes = `bg-white rounded-lg border border-gray-200 ${shadowClasses[shadow]} ${className}`

  return (
    <div className={classes}>
      {(title || subtitle || headerActions) && (
        <div className='px-6 py-4 border-b border-gray-200'>
          <div className='flex items-center justify-between'>
            <div>
              {title && <h3 className='text-lg font-medium text-gray-900'>{title}</h3>}
              {subtitle && <p className='mt-1 text-sm text-gray-500'>{subtitle}</p>}
            </div>
            {headerActions && <div className='flex items-center space-x-2'>{headerActions}</div>}
          </div>
        </div>
      )}

      <div className={paddingClasses[padding]}>{children}</div>

      {footer && (
        <div className='px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg'>{footer}</div>
      )}
    </div>
  )
}

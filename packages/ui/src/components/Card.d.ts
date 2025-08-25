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
export declare const Card: React.FC<CardProps>
//# sourceMappingURL=Card.d.ts.map

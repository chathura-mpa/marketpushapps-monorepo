import React from 'react'
export interface InputProps {
  label?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  disabled?: boolean
  error?: string
  required?: boolean
  className?: string
  name?: string
  id?: string
}
export declare const Input: React.FC<InputProps>
//# sourceMappingURL=Input.d.ts.map

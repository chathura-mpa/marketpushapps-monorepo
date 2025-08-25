import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
export const Input = ({
  label,
  placeholder,
  value = '',
  onChange,
  type = 'text',
  disabled = false,
  error,
  required = false,
  className = '',
  name,
  id,
}) => {
  const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`
  const baseClasses =
    'block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
  const stateClasses = error
    ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
  const disabledClasses = disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
  const classes = `${baseClasses} ${stateClasses} ${disabledClasses} ${className}`
  return _jsxs('div', {
    className: 'w-full',
    children: [
      label &&
        _jsxs('label', {
          htmlFor: inputId,
          className: 'block text-sm font-medium text-gray-700 mb-1',
          children: [
            label,
            required && _jsx('span', { className: 'text-red-500 ml-1', children: '*' }),
          ],
        }),
      _jsx('input', {
        id: inputId,
        name: name,
        type: type,
        value: value,
        onChange: e => onChange?.(e.target.value),
        placeholder: placeholder,
        disabled: disabled,
        required: required,
        className: classes,
      }),
      error && _jsx('p', { className: 'mt-1 text-sm text-red-600', children: error }),
    ],
  })
}
//# sourceMappingURL=Input.js.map

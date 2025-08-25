import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
export const Card = ({
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
  return _jsxs('div', {
    className: classes,
    children: [
      (title || subtitle || headerActions) &&
        _jsx('div', {
          className: 'px-6 py-4 border-b border-gray-200',
          children: _jsxs('div', {
            className: 'flex items-center justify-between',
            children: [
              _jsxs('div', {
                children: [
                  title &&
                    _jsx('h3', { className: 'text-lg font-medium text-gray-900', children: title }),
                  subtitle &&
                    _jsx('p', { className: 'mt-1 text-sm text-gray-500', children: subtitle }),
                ],
              }),
              headerActions &&
                _jsx('div', { className: 'flex items-center space-x-2', children: headerActions }),
            ],
          }),
        }),
      _jsx('div', { className: paddingClasses[padding], children: children }),
      footer &&
        _jsx('div', {
          className: 'px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg',
          children: footer,
        }),
    ],
  })
}
//# sourceMappingURL=Card.js.map

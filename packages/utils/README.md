# @marketpushapps/utils

A collection of utility functions and logging utilities for MarketPushApps projects.

## Installation

```bash
npm install @marketpushapps/utils
# or
yarn add @marketpushapps/utils
```

## Usage

### Logger/Echo Utility

The main feature is a styled console logging utility that provides colored output with CSS styling:

```typescript
import { createEcho, echo } from '@marketpushapps/utils';

// Use the default echo instance
echo.log(
  echo.withSuccessStyle('Success!'),
  echo.withWarningStyle('Warning!'),
  echo.withDangerStyle('Error!')
);

// Create a custom echo instance
const customEcho = createEcho({
  isDev: true,
  withTimestamps: true
});

customEcho.log(
  customEcho.withGeneralStyle('General message'),
  customEcho.withPremiumStyle('Premium feature')
);
```

### Available Styles

- `withGeneralStyle` - Neutral gray
- `withStandardStyle` - Blue
- `withDangerStyle` - Red
- `withSuccessStyle` - Green
- `withNeutralStyle` - Dark base
- `withWarningStyle` - Orange
- `withUrgentStyle` - Bright red
- `withPremiumStyle` - Purple
- `withTest` - Test prefix with 🧪 emoji
- `withCustomStyle` - Custom CSS styling

### Console Methods

All standard console methods are supported:
- `log`, `warn`, `error`, `trace`
- `group`, `groupEnd`

## License

MIT

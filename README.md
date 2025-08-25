# MarketPushApps Monorepo

A monorepo containing shared utilities, UI components, and applications for MarketPushApps projects.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/marketpushapps-monorepo.git
cd marketpushapps-monorepo

# Install dependencies
yarn install

# Build all packages
yarn build

# Start development
yarn dev
```

## 📦 Packages

### @marketpushapps/utils
Utility functions and logging utilities with styled console output.

```bash
npm install @marketpushapps/utils
```

**Features:**
- Styled console logging with CSS colors
- Multiple log levels and styles
- Timestamp support
- Development/production mode switching

### @marketpushapps/ui
React UI components for building consistent interfaces.

```bash
npm install @marketpushapps/ui
```

**Components:**
- Button, Card, Input, Modal, LoadingSpinner
- TypeScript support
- Responsive design
- Customizable themes

### @marketpushapps/shared
Shared types and utilities used across packages.

## 🛠️ Development

```bash
# Build all packages
yarn build

# Run tests
yarn test

# Lint code
yarn lint

# Format code
yarn format

# Clean build artifacts
yarn clean
```

## 📚 Usage in Other Projects

### Installing Individual Packages

```bash
# Install utils package
npm install @marketpushapps/utils

# Install UI package
npm install @marketpushapps/ui
```

### Using Utils Package

```typescript
import { createEcho, echo } from '@marketpushapps/utils';

// Simple usage
echo.log(
  echo.withSuccessStyle('Operation successful!'),
  echo.withWarningStyle('Please check logs')
);

// Custom configuration
const customLogger = createEcho({
  isDev: process.env.NODE_ENV === 'development',
  withTimestamps: true
});
```

### Using UI Package

```typescript
import { Button, Card, Input } from '@marketpushapps/ui';

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

## 🔧 Scripts

- `yarn build` - Build all packages
- `yarn dev` - Start development mode
- `yarn test` - Run tests
- `yarn lint` - Lint code
- `yarn format` - Format code
- `yarn publish:packages` - Publish all packages to npm
- `yarn version:packages` - Version all packages

## 📋 Requirements

- Node.js 18+
- Yarn 1.22+
- TypeScript 5+

## 📄 License

MIT

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions and support, please open an issue on GitHub.

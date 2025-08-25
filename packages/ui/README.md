# @marketpushapps/ui

A collection of React UI components for MarketPushApps projects.

## Installation

```bash
npm install @marketpushapps/ui
# or
yarn add @marketpushapps/ui
```

## Usage

```typescript
import { Button, Card, Input, Modal, LoadingSpinner } from '@marketpushapps/ui';

function App() {
  return (
    <div>
      <Card>
        <h2>Welcome to MarketPushApps</h2>
        <Input placeholder="Enter your name" />
        <Button variant="primary">Submit</Button>
      </Card>
      
      <LoadingSpinner />
    </div>
  );
}
```

## Available Components

- **Button** - Styled button component with multiple variants
- **Card** - Container component for content grouping
- **Input** - Form input component
- **Modal** - Modal/dialog component
- **LoadingSpinner** - Loading indicator component

## Requirements

- React 18+
- React DOM 18+

## License

MIT

import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Button, Card, Input, Modal, LoadingSpinner } from '@marketpushapps/ui'
import { formatCurrency, formatDate, isValidEmail } from '@marketpushapps/shared'
import { echo, createEcho } from '@marketpushapps/utils'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  // Create a custom logger instance with timestamps
  const customLogger = createEcho({
    isDev: true,
    withTimestamps: true,
  })

  const handleEmailChange = (value: string) => {
    setEmail(value)
    if (value && !isValidEmail(value)) {
      setEmailError('Please enter a valid email address')
    } else {
      setEmailError('')
    }
  }

  return (
    <div className='min-h-screen bg-gray-50 py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>Welcome to MarketPush Apps</h1>
          <p className='text-xl text-gray-600'>
            A modern monorepo with reusable components and utilities
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          <Card title='Shared Utilities' subtitle='Common functions and types'>
            <div className='space-y-4'>
              <div>
                <p className='text-sm text-gray-600'>Formatted Currency:</p>
                <p className='font-medium'>{formatCurrency(1234.56)}</p>
              </div>
              <div>
                <p className='text-sm text-gray-600'>Formatted Date:</p>
                <p className='font-medium'>{formatDate(new Date())}</p>
              </div>
            </div>
          </Card>

          <Card title='UI Components' subtitle='Reusable React components'>
            <div className='space-y-4'>
              <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
              <div className='flex space-x-2'>
                <Button variant='secondary' size='sm'>
                  Small
                </Button>
                <Button variant='outline' size='md'>
                  Medium
                </Button>
                <Button variant='ghost' size='lg'>
                  Large
                </Button>
              </div>
            </div>
          </Card>

          <Card title='Form Example' subtitle='Input validation demo'>
            <div className='space-y-4'>
              <Input
                label='Email Address'
                placeholder='Enter your email'
                value={email}
                onChange={handleEmailChange}
                type='email'
                error={emailError}
                required
              />
              <Button
                variant='primary'
                disabled={!!emailError || !email}
                className='w-full'
                onClick={() => {
                  echo.log(
                    echo.withSuccessStyle('Form submitted successfully!'),
                    echo.withStandardStyle(`Email: ${email}`)
                  )
                }}
              >
                Submit
              </Button>
            </div>
          </Card>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
          <Card title='Loading States' subtitle='Different loading indicators'>
            <div className='flex justify-center space-x-8'>
              <div className='text-center'>
                <LoadingSpinner size='sm' />
                <p className='text-sm text-gray-600 mt-2'>Small</p>
              </div>
              <div className='text-center'>
                <LoadingSpinner size='md' />
                <p className='text-sm text-gray-600 mt-2'>Medium</p>
              </div>
              <div className='text-center'>
                <LoadingSpinner size='lg' />
                <p className='text-sm text-gray-600 mt-2'>Large</p>
              </div>
              <div className='text-center'>
                <LoadingSpinner size='xl' color='secondary' />
                <p className='text-sm text-gray-600 mt-2'>Extra Large</p>
              </div>
            </div>
          </Card>

          <Card
            title='Complete Logger Interface'
            subtitle='All available logging methods and styles'
          >
            <div className='space-y-6'>
              {/* Console Methods Section */}
              <div>
                <h4 className='text-sm font-semibold text-gray-700 mb-3'>Console Methods</h4>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => echo.log('Basic log message')}
                    className='text-xs'
                  >
                    console.log
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => echo.warn('Warning message')}
                    className='text-xs'
                  >
                    console.warn
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => echo.error('Error message')}
                    className='text-xs'
                  >
                    console.error
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => echo.trace('Trace message')}
                    className='text-xs'
                  >
                    console.trace
                  </Button>
                </div>
              </div>

              {/* Styling Methods Section */}
              <div>
                <h4 className='text-sm font-semibold text-gray-700 mb-3'>Styling Methods</h4>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => echo.log(echo.withGeneralStyle('General Style'))}
                    className='text-xs'
                  >
                    General
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => echo.log(echo.withStandardStyle('Standard Style'))}
                    className='text-xs'
                  >
                    Standard
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => echo.log(echo.withDangerStyle('Danger Style'))}
                    className='text-xs'
                  >
                    Danger
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => echo.log(echo.withSuccessStyle('Success Style'))}
                    className='text-xs'
                  >
                    Success
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => echo.log(echo.withNeutralStyle('Neutral Style'))}
                    className='text-xs'
                  >
                    Neutral
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => echo.log(echo.withWarningStyle('Warning Style'))}
                    className='text-xs'
                  >
                    Warning
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => echo.log(echo.withUrgentStyle('Urgent Style'))}
                    className='text-xs'
                  >
                    Urgent
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => echo.log(echo.withPremiumStyle('Premium Style'))}
                    className='text-xs'
                  >
                    Premium
                  </Button>
                </div>
              </div>

              {/* Special Methods Section */}
              <div>
                <h4 className='text-sm font-semibold text-gray-700 mb-3'>Special Methods</h4>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => echo.log(echo.withTest('Test message'))}
                    className='text-xs'
                  >
                    withTest 🧪
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() =>
                      echo.log(
                        echo.withCustomStyle(
                          'Custom Style',
                          'background: linear-gradient(45deg, #ff6b6b, #4ecdc4); color: white; padding: 8px 16px; border-radius: 8px; font-weight: bold;'
                        )
                      )
                    }
                    className='text-xs'
                  >
                    withCustomStyle
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => {
                      echo.group('Grouped Logs')
                      echo.log('Message 1')
                      echo.log('Message 2')
                      echo.groupEnd()
                    }}
                    className='text-xs'
                  >
                    Group Logs
                  </Button>
                </div>
              </div>

              {/* Multi-style Examples Section */}
              <div>
                <h4 className='text-sm font-semibold text-gray-700 mb-3'>Multi-style Examples</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() =>
                      echo.log(
                        echo.withSuccessStyle('✅ Operation completed'),
                        echo.withStandardStyle('in'),
                        echo.withPremiumStyle('2.5 seconds')
                      )
                    }
                    className='text-xs'
                  >
                    Success + Standard + Premium
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() =>
                      echo.warn(
                        echo.withWarningStyle('⚠️ Attention required'),
                        echo.withUrgentStyle('for critical operation')
                      )
                    }
                    className='text-xs'
                  >
                    Warning + Urgent
                  </Button>
                </div>
              </div>

              {/* Object Logging Section */}
              <div>
                <h4 className='text-sm font-semibold text-gray-700 mb-3'>
                  Object & Function Logging
                </h4>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() =>
                      echo.log(echo.withSuccessStyle('User Object:'), {
                        id: 1,
                        name: 'John Doe',
                        email: 'john@example.com',
                      })
                    }
                    className='text-xs'
                  >
                    Log Object
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() =>
                      echo.log(echo.withStandardStyle('Function:'), function exampleFunction() {
                        return 'Hello World'
                      })
                    }
                    className='text-xs'
                  >
                    Log Function
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <Card
            title='Custom Logger with Timestamps'
            subtitle='Logger instance with custom configuration'
          >
            <div className='space-y-4'>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() =>
                    customLogger.log(
                      customLogger.withSuccessStyle('Custom success with timestamp!')
                    )
                  }
                >
                  Success
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() =>
                    customLogger.warn(
                      customLogger.withWarningStyle('Custom warning with timestamp!')
                    )
                  }
                >
                  Warning
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() =>
                    customLogger.error(customLogger.withDangerStyle('Custom error with timestamp!'))
                  }
                >
                  Error
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() =>
                    customLogger.log(
                      customLogger.withPremiumStyle('Custom premium'),
                      customLogger.withStandardStyle('with timestamp!')
                    )
                  }
                >
                  Multi-style
                </Button>
              </div>
              <div className='mt-4 p-3 bg-gray-50 rounded-lg'>
                <p className='text-xs text-gray-600 font-mono'>
                  Custom logger config: isDev=true, withTimestamps=true
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title='Example Modal'
        size='md'
      >
        <div className='space-y-4'>
          <p className='text-gray-600'>
            This is an example modal component from the UI package. It demonstrates how components
            can be shared across different applications in the monorepo.
          </p>
          <div className='flex justify-end space-x-2'>
            <Button variant='outline' onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsModalOpen(false)}>Confirm</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

const About = () => (
  <div className='min-h-screen bg-gray-50 py-8'>
    <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
      <Card title='About MarketPush Apps' subtitle='Monorepo Architecture'>
        <div className='prose max-w-none'>
          <h3>Project Structure</h3>
          <ul>
            <li>
              <strong>packages/shared:</strong> Common utilities, types, and constants
            </li>
            <li>
              <strong>packages/ui:</strong> Reusable React components
            </li>
            <li>
              <strong>packages/utils:</strong> Advanced utilities and logger functionality
            </li>
            <li>
              <strong>apps/web:</strong> Web application using Vite + React
            </li>
          </ul>

          <h3>Features</h3>
          <ul>
            <li>TypeScript support with strict configuration</li>
            <li>Yarn workspaces for package management</li>
            <li>Shared dependencies and utilities</li>
            <li>Modern build tools (Vite, Tailwind CSS)</li>
            <li>ESLint and Prettier for code quality</li>
          </ul>
        </div>
      </Card>
    </div>
  </div>
)

const App = () => {
  return (
    <div>
      <nav className='bg-white shadow-sm border-b'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex items-center'>
              <h1 className='text-xl font-semibold text-gray-900'>MarketPush Apps</h1>
            </div>
            <div className='flex items-center space-x-8'>
              <Link to='/' className='text-gray-600 hover:text-gray-900'>
                Home
              </Link>
              <Link to='/about' className='text-gray-600 hover:text-gray-900'>
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App

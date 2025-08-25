interface EchoOptions {
  isDev?: boolean
  withTimestamps?: boolean
}

interface QueueItem {
  value: string
  css: string
}

export const createEcho = ({
  isDev = process.env.NODE_ENV === 'development',
  withTimestamps = false,
}: EchoOptions = {}) =>
  (function () {
    let queue: QueueItem[] = []
    const ECHO_TOKEN = {}
    const RESET_INPUT = '%c '
    const RESET_CSS = ''

    const baseStyle =
      'display: inline-block; font-weight: bold; padding: 3px 7px; border-radius: 3px;'
    const styles = {
      general: `${baseStyle} background-color: #30363D; color: #E6ECEF;`, // Neutral gray
      standard: `${baseStyle} background-color: #1A2B4D; color: #A3D4FF;`, // Blue
      danger: `${baseStyle} background-color: #2F1B25; color: #FF8C94;`, // Red
      success: `${baseStyle} background-color: #1A3C34; color: #79F2C0;`, // Green
      neutral: `${baseStyle} background-color: #0D1117; color: #C9D1D9;`, // Dark base
      warning: `${baseStyle} background-color: #3C2F2F; color: #FFDAB3;`, // Orange
      urgent: `${baseStyle} background-color: #3D1B2F; color: #FF6B94;`, // Bright red
      premium: `${baseStyle} background-color: #2F1B3D; color: #E6B8FF;`, // Purple
    }

    function format(value: string, css: string): typeof ECHO_TOKEN {
      queue.push({ value, css })
      return ECHO_TOKEN
    }

    const withGeneralStyle = (val: string) => format(val, styles.general)
    const withStandardStyle = (val: string) => format(val, styles.standard)
    const withDangerStyle = (val: string) => format(val, styles.danger)
    const withSuccessStyle = (val: string) => format(val, styles.success)
    const withNeutralStyle = (val: string) => format(val, styles.neutral)
    const withWarningStyle = (val: string) => format(val, styles.warning)
    const withUrgentStyle = (val: string) => format(val, styles.urgent)
    const withPremiumStyle = (val: string) => format(val, styles.premium)
    const withTest = (val: string, prefix = '🧪') => format(`${prefix} ${val}`, styles.neutral)
    const withCustomStyle = (val: string, css: string) => format(val, css)

    function using(consoleFn: (...data: unknown[]) => void) {
      return (...args: (string | typeof ECHO_TOKEN | object)[]) => {
        if (!isDev) return

        const inputs: string[] = []
        const modifiers: (string | unknown)[] = []

        if (withTimestamps) {
          inputs.push(`%c[${new Date().toISOString()}]`, RESET_INPUT)
          modifiers.push(styles.neutral, RESET_CSS)
        }

        for (const arg of args) {
          if (arg === ECHO_TOKEN) {
            const item = queue.shift()
            if (item) {
              inputs.push(`%c${item.value}`, RESET_INPUT)
              modifiers.push(item.css, RESET_CSS)
            } else {
              inputs.push('%c[Missing Style]', RESET_INPUT)
              modifiers.push(styles.warning, RESET_CSS)
            }
          } else if (typeof arg === 'object' || typeof arg === 'function') {
            inputs.push('%o', RESET_INPUT)
            modifiers.push(arg, RESET_CSS)
          } else {
            inputs.push(`%c${arg}`, RESET_INPUT)
            modifiers.push(RESET_CSS, RESET_CSS)
          }
        }

        try {
          consoleFn(inputs.join(''), ...modifiers)
        } finally {
          queue = []
        }
      }
    }

    return {
      log: using(console.log),
      warn: using(console.warn),
      error: using(console.error),
      trace: using(console.trace),
      group: using(console.group),
      groupEnd: using(console.groupEnd),
      withGeneralStyle,
      withStandardStyle,
      withDangerStyle,
      withSuccessStyle,
      withNeutralStyle,
      withWarningStyle,
      withUrgentStyle,
      withPremiumStyle,
      withTest,
      withCustomStyle,
    }
  })()

export const echo = createEcho()

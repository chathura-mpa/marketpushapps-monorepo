export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
export interface PaginatedResponse<T = any> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}
export declare const formatCurrency: (amount: number, currency?: string) => string
export declare const formatDate: (date: Date | string) => string
export declare const debounce: <T extends (...args: any[]) => any>(
  func: T,
  wait: number
) => (...args: Parameters<T>) => void
export declare const throttle: <T extends (...args: any[]) => any>(
  func: T,
  limit: number
) => (...args: Parameters<T>) => void
export declare const isValidEmail: (email: string) => boolean
export declare const isValidPhone: (phone: string) => boolean
export declare const APP_CONSTANTS: {
  readonly MAX_FILE_SIZE: number
  readonly SUPPORTED_IMAGE_TYPES: readonly ['image/jpeg', 'image/png', 'image/webp']
  readonly SUPPORTED_DOCUMENT_TYPES: readonly [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ]
  readonly DEFAULT_PAGE_SIZE: 20
  readonly MAX_PAGE_SIZE: 100
}
//# sourceMappingURL=index.d.ts.map

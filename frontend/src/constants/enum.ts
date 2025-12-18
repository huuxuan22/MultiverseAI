/**
 * Enums và Constants cho toàn bộ ứng dụng
 * 
 * Best Practices:
 * - Sử dụng enum cho các giá trị cố định, có thể dùng làm type
 * - Sử dụng const object cho các giá trị không cần type safety mạnh
 * - Export riêng từng enum để dễ import
 */

// ============================================
// LANGUAGE ENUMS
// ============================================

/**
 * Mã ngôn ngữ được hỗ trợ trong ứng dụng
 */
export enum LanguageCode {
    ENGLISH = 'en',
    VIETNAMESE = 'vi',
}

/**
 * Type helper cho LanguageCode
 */

export type Language = LanguageCode;

// ============================================
// ROUTE ENUMS
// ============================================

/**
 * Các route paths trong ứng dụng
 * Sử dụng enum để tránh hardcode string và dễ refactor
 */
export enum RoutePath {
    HOME = '/',
    LOGIN = '/login',
    REGISTER = '/register',
    DASHBOARD = '/app',
    USERS = '/app/users',
    USER_DETAIL = '/app/users/:userId',
    INTRO = '/intro',
}

/**
 * Helper function để tạo dynamic route với params
 */
export const createUserDetailRoute = (userId: string | number): string => {
    return `/app/users/${userId}`;
};

// ============================================
// UI COMPONENT ENUMS
// ============================================

/**
 * Button variants - các kiểu button trong UI
 */
export enum ButtonVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    GHOST = 'ghost',
}

/**
 * Type helper cho ButtonVariant
 */
export type ButtonVariantType = ButtonVariant;

// ============================================
// ACTION ENUMS (CRUD Operations)
// ============================================

/**
 * Các hành động CRUD cơ bản
 */
export enum ActionType {
    CREATE = 'CREATE',
    READ = 'READ',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE',
    LIST = 'LIST',
}

// ============================================
// USER STATUS ENUMS (Ví dụ cho future)
// ============================================

/**
 * Trạng thái người dùng
 */
export enum UserStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    SUSPENDED = 'SUSPENDED',
    PENDING = 'PENDING',
}

// ============================================
// HTTP STATUS CODES (Ví dụ cho API calls)
// ============================================

/**
 * HTTP status codes thường dùng
 */
export enum HttpStatus {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

// ============================================
// CONSTANTS (Không phải enum nhưng là giá trị cố định)
// ============================================

/**
 * Các constants không cần type safety mạnh
 */
export const APP_CONSTANTS = {
    APP_NAME: 'Multiverse',
    DEFAULT_PAGE_SIZE: 10,
    MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
    SESSION_TIMEOUT: 30 * 60 * 1000, // 30 minutes
} as const;

/**
 * LocalStorage keys
 */
export const STORAGE_KEYS = {
    LANGUAGE: 'i18nextLng',
    AUTH_TOKEN: 'auth_token',
    USER_PREFERENCES: 'user_preferences',
} as const;

/**
 * Regex patterns
 */
export const REGEX_PATTERNS = {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE: /^[0-9]{10,11}$/,
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
} as const;


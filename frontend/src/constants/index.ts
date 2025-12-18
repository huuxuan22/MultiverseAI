/**
 * Constants Barrel Export
 * 
 * Export tất cả constants từ một điểm để dễ import:
 * 
 * import { RoutePath, LanguageCode, ButtonVariant } from '@/constants';
 * 
 * Thay vì:
 * import { RoutePath } from '@/constants/enum';
 * import { ROUTES } from '@/constants/routes';
 */

// Enums
export {
    LanguageCode,
    RoutePath,
    ButtonVariant,
    ActionType,
    UserStatus,
    HttpStatus,
    type Language,
    type ButtonVariantType,
    createUserDetailRoute,
} from './enum';

// Constants
export {
    APP_CONSTANTS,
    STORAGE_KEYS,
    REGEX_PATTERNS,
} from './enum';

// Routes
export {
    ROUTES,
    routeHelpers,
} from './routes';


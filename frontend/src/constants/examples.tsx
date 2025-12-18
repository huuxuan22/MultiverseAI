/**
 * EXAMPLES: Cách sử dụng Constants & Enums
 * 
 * File này chỉ để tham khảo, không được import vào production code
 */

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// ✅ Import từ barrel export
import {
    RoutePath,
    LanguageCode,
    ButtonVariant,
    ActionType,
    ROUTES,
    routeHelpers,
    APP_CONSTANTS,
    STORAGE_KEYS,
    REGEX_PATTERNS,
} from './index';

export const NavigationExample: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        // ✅ Tốt: Dùng enum thay vì hardcode
        navigate(RoutePath.LOGIN);

        // ❌ Tránh: Hardcode string
        // navigate('/login');
    };

    return (
        <div>
            <button onClick={handleNavigation}>Go to Login</button>
        </div>
    );
};

// ============================================
// EXAMPLE 2: Sử dụng LanguageCode với i18n
// ============================================
export const LanguageExample: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lang: LanguageCode) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div>
            <button onClick={() => changeLanguage(LanguageCode.ENGLISH)}>
                English
            </button>
            <button onClick={() => changeLanguage(LanguageCode.VIETNAMESE)}>
                Tiếng Việt
            </button>
        </div>
    );
};

// ============================================
// EXAMPLE 3: Sử dụng ButtonVariant
// ============================================

type ButtonExampleProps = {
    variant: ButtonVariant;
};

export const ButtonExample: React.FC<ButtonExampleProps> = ({ variant }) => {
    // ✅ Type-safe: TypeScript sẽ báo lỗi nếu truyền giá trị không hợp lệ
    return <button className={`btn-${variant}`}>Button</button>;
};

// Usage:
// <ButtonExample variant={ButtonVariant.PRIMARY} /> ✅
// <ButtonExample variant="primary" /> ❌ TypeScript error

// ============================================
// EXAMPLE 4: Dynamic Routes với Helper Functions
// ============================================

export const DynamicRouteExample: React.FC = () => {
    const navigate = useNavigate();
    const { userId } = useParams<{ userId: string }>();

    const handleUserClick = (id: number) => {
        // ✅ Tốt: Dùng helper function
        navigate(routeHelpers.userDetail(id));

        // ❌ Tránh: Hardcode template string
        // navigate(`/app/users/${id}`);
    };

    return (
        <div>
            <button onClick={() => handleUserClick(123)}>
                View User 123
            </button>
        </div>
    );
};

// ============================================
// EXAMPLE 5: Sử dụng Constants
// ============================================

export const ConstantsExample: React.FC = () => {
    // ✅ Dùng constants thay vì magic numbers/strings
    const maxFileSize = APP_CONSTANTS.MAX_FILE_SIZE;
    const appName = APP_CONSTANTS.APP_NAME;

    // Validate email
    const validateEmail = (email: string): boolean => {
        return REGEX_PATTERNS.EMAIL.test(email);
    };

    // Get from localStorage
    const savedLanguage = localStorage.getItem(STORAGE_KEYS.LANGUAGE);

    return (
        <div>
            <p>App: {appName}</p>
            <p>Max file size: {maxFileSize / 1024 / 1024}MB</p>
            <p>Saved language: {savedLanguage}</p>
        </div>
    );
};

// ============================================
// EXAMPLE 6: Switch/Case với Enum
// ============================================

export const SwitchCaseExample: React.FC<{ action: ActionType }> = ({ action }) => {
    const handleAction = (action: ActionType) => {
        switch (action) {
            case ActionType.CREATE:
                console.log('Creating...');
                break;
            case ActionType.UPDATE:
                console.log('Updating...');
                break;
            case ActionType.DELETE:
                console.log('Deleting...');
                break;
            case ActionType.READ:
                console.log('Reading...');
                break;
            case ActionType.LIST:
                console.log('Listing...');
                break;
            // TypeScript sẽ báo lỗi nếu thiếu case nào
            default:
                const _exhaustive: never = action;
                return _exhaustive;
        }
    };

    return <div onClick={() => handleAction(action)}>Action: {action}</div>;
};

// ============================================
// EXAMPLE 7: Type Definitions với Enum
// ============================================

// ✅ Type-safe function parameters
export const handleLanguageChange = (lang: LanguageCode): void => {
    // TypeScript sẽ báo lỗi nếu truyền giá trị không hợp lệ
    console.log('Language changed to:', lang);
};

// ✅ Type-safe component props
type MyComponentProps = {
    variant: ButtonVariant;
    language: LanguageCode;
    route: RoutePath;
};

export const TypedComponentExample: React.FC<MyComponentProps> = ({
    variant,
    language,
    route,
}) => {
    return (
        <div>
            <p>Variant: {variant}</p>
            <p>Language: {language}</p>
            <p>Route: {route}</p>
        </div>
    );
};

// Usage:
// <TypedComponentExample
//   variant={ButtonVariant.PRIMARY}
//   language={LanguageCode.ENGLISH}
//   route={RoutePath.HOME}
// />

// ============================================
// EXAMPLE 8: Sử dụng ROUTES object
// ============================================

export const RoutesObjectExample: React.FC = () => {
    // ✅ Có thể dùng ROUTES object nếu cần
    const routes = [
        { path: ROUTES.HOME, label: 'Home' },
        { path: ROUTES.DASHBOARD, label: 'Dashboard' },
        { path: ROUTES.LOGIN, label: 'Login' },
    ];

    return (
        <nav>
            {routes.map((route) => (
                <a key={route.path} href={route.path}>
                    {route.label}
                </a>
            ))}
        </nav>
    );
};


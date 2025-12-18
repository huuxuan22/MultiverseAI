/**
 * Route Constants
 * 
 * Tập trung tất cả route paths để dễ quản lý và refactor
 */

import { RoutePath } from './enum';

/**
 * Route paths object - dùng khi cần object thay vì enum
 */
export const ROUTES = {
    HOME: RoutePath.HOME,
    LOGIN: RoutePath.LOGIN,
    REGISTER: RoutePath.REGISTER,
    DASHBOARD: RoutePath.DASHBOARD,
    USERS: RoutePath.USERS,
    USER_DETAIL: RoutePath.USER_DETAIL,
} as const;

/**
 * Helper functions để tạo dynamic routes
 */
export const routeHelpers = {
    /**
     * Tạo route chi tiết user với userId
     */
    userDetail: (userId: string | number): string => {
        return `/app/users/${userId}`;
    },

    /**
     * Tạo route với query params
     */
    withQuery: (path: string, params: Record<string, string | number>): string => {
        const queryString = new URLSearchParams(
            Object.entries(params).map(([key, value]) => [key, String(value)])
        ).toString();
        return `${path}?${queryString}`;
    },
};


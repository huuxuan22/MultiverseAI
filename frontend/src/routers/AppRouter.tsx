import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import RootLayout from '../layouts/RootLayout';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';

import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import DashboardHomePage from '../pages/dashboard/DashboardHomePage';
import UsersPage from '../pages/dashboard/UsersPage';
import UserDetailPage from '../pages/dashboard/UserDetailPage';

function AppRouter() {
  return (
    <Routes>
      {/* Public site */}
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
      </Route>

      {/* Auth routes */}
      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      {/* Protected app area */}
      <Route path="app" element={<DashboardLayout />}>
        <Route index element={<DashboardHomePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:userId" element={<UserDetailPage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRouter;



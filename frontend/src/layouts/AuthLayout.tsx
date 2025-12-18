import React from 'react';
import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50">
      <div className="w-full max-w-md bg-slate-900 rounded-xl shadow-lg p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;



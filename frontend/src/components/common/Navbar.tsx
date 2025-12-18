import React from 'react';
import { NavLink } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher';

function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <NavLink
            to="/"
            className="text-lg font-semibold tracking-tight text-slate-50"
          >
            Multiverse
          </NavLink>
        </div>
        <nav className="flex items-center gap-4 text-sm text-slate-300">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `hover:text-white ${isActive ? 'text-white font-medium' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/app"
            className={({ isActive }) =>
              `hover:text-white ${isActive ? 'text-white font-medium' : ''}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `hover:text-white ${isActive ? 'text-white font-medium' : ''}`
            }
          >
            Login
          </NavLink>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}

export default Navbar;



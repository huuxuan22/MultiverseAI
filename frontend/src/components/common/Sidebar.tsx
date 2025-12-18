import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-900/60 p-4">
      <nav className="flex flex-col gap-2 text-sm text-slate-300">
        <NavLink
          to="/app"
          end
          className={({ isActive }) =>
            `px-3 py-2 rounded-md hover:bg-slate-800 ${
              isActive ? 'bg-slate-800 text-white font-medium' : ''
            }`
          }
        >
          Overview
        </NavLink>
        <NavLink
          to="/app/users"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md hover:bg-slate-800 ${
              isActive ? 'bg-slate-800 text-white font-medium' : ''
            }`
          }
        >
          Users
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;



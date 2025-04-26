import React from 'react';
import { useLocation } from 'react-router-dom';
import { Settings, HelpCircle, Package } from 'lucide-react';
import Search from "../Search";
import { SidebarLink } from '../SidebarLink';

export const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <aside className="w-[220px] p-5 min-h-screen bg-[#1E1E1E]">
      <div className="p-2">
        <h1 className="text-xl font-semibold text-white">Admin Panel</h1>
      </div>
      <Search />
      <nav className="flex flex-col text-sm font-medium gap-2">
        <div className="gap-2 flex flex-col">
          <SidebarLink
            to="/admin"
            icon={Package}
            label="Productos"
            isActive={isActive('/admin')}
          />
                  <SidebarLink
            to="/admin/ayuda"
            icon={HelpCircle}
            label="Ayuda"
            isActive={isActive('/admin/ayuda')}
          />
                  <SidebarLink
          to="/admin/configuracion"
          icon={Settings}
          label="Configuracion"
          isActive={isActive('/admin/configuracion')}
        />
        </div>
      </nav>
    </aside>
  );
};
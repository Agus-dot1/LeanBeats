import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[#1E1E1E]">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="p-16 border border-white/10 rounded-xl h-[calc(100vh-4rem)] overflow-y-scroll">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
// src/components/dashboard-layout.tsx
import React from 'react';
import Sidebar from '@/components/ui/sidebar';
import { NAV_LINKS } from '@/lib/nav-links';
import { logout } from '@/lib/session'; // Import from the new session utility

// A new component for the logout button
function LogoutButton() {
  return (
    <form action={logout}>
      <button 
        type="submit" 
        className="w-full text-left px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-700 hover:text-white rounded-md"
      >
        Cerrar Sesión
      </button>
    </form>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar navLinks={NAV_LINKS}>
        <div className="mt-auto">
           <LogoutButton />
        </div>
      </Sidebar>
      <main className="flex-1 p-8 bg-gray-50 dark:bg-gray-900">
        {children}
      </main>
    </div>
  );
}

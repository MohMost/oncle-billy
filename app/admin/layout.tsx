'use client';

import { Sidebar, adminNavItems } from '@/components/navigation/Sidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar items={adminNavItems} onLogout={handleLogout} title="Admin" isAdmin={true} />
      <main className="flex-1 overflow-y-auto md:ml-0">
        <div className="p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
}
